// Import specific classes from the @aws-sdk package
const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3");

const BUCKET_NAME = "websiteimagesstack-websiteimagesbucketc3b6307e-ubuqmhoej5as";

// Create an instance of the S3Client
const s3Client = new S3Client({ region: 'us-west-1' });  // Adjust region as needed

exports.handler = async (event) => {

    const prefix = event.queryStringParameters?.prefix || '';

    try {
        // Create the ListObjectsV2Command
        const command = new ListObjectsV2Command({
            Bucket: BUCKET_NAME,
            Prefix: prefix,
        });

        // Send the command to S3
        const data = await s3Client.send(command);

        const filePaths = data.Contents.map((item) => ({
            path: item.Key
        }));

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: JSON.stringify([...filePaths]),
        };

    } catch (error) {

        console.log(error);

        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: JSON.stringify({ error: "Failed to list contents" }),
        }

    };
};
