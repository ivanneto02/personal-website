# This script syncs S3 bucket to this `~/repo/public/images`
bucket_name="WebsiteImagesBucket"

echo "Cloning repo/public/images/ into S3 Bucket ${bucket_name}..."

aws s3 sync ./ s3://websiteimagesstack-websiteimagesbucketc3b6307e-ubuqmhoej5as --exact-timestamp --delete
