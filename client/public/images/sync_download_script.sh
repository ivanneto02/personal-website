# This script syncs this `~/repo/public/images` to S3 bucket
bucket_name="WebsiteImagesBucket"

echo "Cloning S3 Bucket ${bucket_name} into repo/public/images/ ..."

aws s3 sync s3://websiteimagesstack-websiteimagesbucketc3b6307e-ubuqmhoej5as ./
