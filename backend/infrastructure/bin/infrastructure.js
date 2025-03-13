#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { WebsiteImagesStack } = require('../lib/infrastructure-stack');

const app = new cdk.App();

new WebsiteImagesStack(app, 'WebsiteImagesStack', {

	// Defines the account ID and default region to deploy to AWS
	env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
