import AWS from "aws-sdk";

// Update AWS config
AWS.config.update({
  accessKeyId: , // Do NOT HARD-CODE your secret credentials here
  secretAccessKey: , // Do NOT HARD-CODE your secret credentials here
  region: "eu-central-1",
});

// Create DynamoDB service object
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

export default db;
