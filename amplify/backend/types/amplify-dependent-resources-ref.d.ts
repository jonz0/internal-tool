export type AmplifyDependentResourcesAttributes = {
    "api": {
        "calendarsignup": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "calendarsignup54ecf769": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "S3Trigger5916beb7": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "testFunction2": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string",
            "CloudWatchEventRule": "string"
        },
        "calendarsignupdefaultLayer": {
            "Arn": "string"
        }
    },
    "storage": {
        "calendarstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}