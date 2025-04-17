const { Stack, RemovalPolicy, CfnOutput } = require('aws-cdk-lib');
const path = require('path');

const iam = require('aws-cdk-lib/aws-iam');
const origins = require('aws-cdk-lib/aws-cloudfront-origins')
const s3 = require('aws-cdk-lib/aws-s3');
const cloudfront = require('aws-cdk-lib/aws-cloudfront');
const apigateway = require('aws-cdk-lib/aws-apigateway');
const lambda = require('aws-cdk-lib/aws-lambda');

/* Contains the stack to make my images be displayed on
 * my website. S3 bucket will be accessible via an IAM
 * role, and key will be provided at the time of access. */
class WebsiteImagesStack extends Stack {
    /**
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */
    constructor(scope, id, props) {
        super(scope, id, props);

        // S3 bucket will hold EVERY image on my website and cache them on
        // CloudFront so it can then distribute them. This should prevent abuse
        // and save me some money since the images will be cached.
        const imagesBucket = new s3.Bucket(this, "WebsiteImagesBucket", {
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            accessControl: s3.BucketAccessControl.PRIVATE,
            removalPolicy: RemovalPolicy.RETAIN,
        });

        imagesBucket.addCorsRule({
            allowedOrigins: ["*"],
            allowedMethods: [s3.HttpMethods.GET],
            allowedHeaders: ["*"],
        });

        // CloudFront will cache these images and distribute them appropriate. Since
        // this service comes with AWS Shield Standard included, it should prevent DDoS attacks
        // on layers 3 and 4.
        const cloudFrontDistribution = new cloudfront.Distribution(this, "WebsiteImagesCDN", {
            defaultBehavior: {
                origin: origins.S3BucketOrigin.withOriginAccessControl(imagesBucket),
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
                cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
                responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
            }
        });

        new CfnOutput(this, "WebsiteImagesCDNURL", {
            value: cloudFrontDistribution.distributionDomainName,
        });

        // handles calls to the endpoint to list contents of an S3 directory
        // The request uses the directory name to list out all the images, taking away the need to have
        // a manifest.json file that needs to be updated when images get uploaded
        const lambdaListS3DirectoryContents = new lambda.Function(this, "ListS3DirectoryContentsFunction", {
            code: lambda.Code.fromAsset("lib/functions/listS3DirectoryContentsFunction"),
            runtime: lambda.Runtime.NODEJS_LATEST,
            handler: 'index.handler',
        });

        imagesBucket.grantRead(lambdaListS3DirectoryContents);

        // executes lambdaListS3DirectoryContents function.
        const lambdaListS3DirectoryContentsEndpoint = new apigateway.LambdaRestApi(this, "ListS3DirectoryContentsEndpoint", {
            handler: lambdaListS3DirectoryContents,
            restApiName: "ListS3DirectoryContentsRestAPI",
        });
    }
}

module.exports = { WebsiteImagesStack }
