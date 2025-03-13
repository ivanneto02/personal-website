const { Stack, RemovalPolicy, CfnOutput } = require('aws-cdk-lib');
const path = require('path');

const iam = require('aws-cdk-lib/aws-iam');
const origins = require('aws-cdk-lib/aws-cloudfront-origins')
const s3 = require('aws-cdk-lib/aws-s3');
const cloudfront = require('aws-cdk-lib/aws-cloudfront');
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

                // CloudFront will cache these images and distribute them appropriate. Since
                // this service comes with AWS Shield Standard included, it should prevent DDoS attacks
                // on layers 3 and 4.
                const cloudFrontDistribution = new cloudfront.Distribution(this, "WebsiteImagesCDN", {
                        defaultBehavior: {
                                origin: origins.S3BucketOrigin.withOriginAccessControl(imagesBucket),
                                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                                allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
                                cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
                        }
                });

                new CfnOutput(this, "WebsiteImagesCDNURL", {
                        value: cloudFrontDistribution.distributionDomainName,
                });

        }
}

module.exports = { WebsiteImagesStack }
