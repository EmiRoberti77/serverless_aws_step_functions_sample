<!--
title: 'AWS NodeJS Example'
description: 'This template demonstrates how to deploy a simple NodeJS function running on AWS Lambda using the Serverless Framework.'
layout: Doc
framework: v4
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, Inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework AWS NodeJS Example

This template demonstrates how to deploy a simple NodeJS function running on AWS Lambda using the Serverless Framework. The deployed function does not include any event definitions or any kind of persistence (database). For more advanced configurations check out the [examples repo](https://github.com/serverless/examples/) which include use cases like API endpoints, workers triggered by SQS, persistence with DynamoDB, and scheduled tasks. For details about configuration of specific events, please refer to our [documentation](https://www.serverless.com/framework/docs/providers/aws/events/).

## NOTE

this project requires serverless-step-functions plugin

```
npm i -D serverless-step-functions
```

link to documentation - https://www.npmjs.com/package/serverless-step-functions

sample command to run the stepfunction
```
sls invoke stepf --name simple-maths --data '{"x":12, "y":12}'
```

## sample out output ( this is from two functions being chained )

```
user@emi-MacBook-Pro stepfunctionhelloworld % sls invoke stepf --name simple-maths --data '{"x":12, "y":12}'

(node:34523) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
.
{
  executionArn: 'arn:aws:states:us-east-1:XXXXXXXXXX:execution:simple-maths:98e092db-d9b3-49be-a084-dc924e76ff7c',
  stateMachineArn: 'arn:aws:states:us-east-1:XXXXXXXXXX:stateMachine:simple-maths',
  name: '98e092db-d9b3-49be-a084-dc924e76ff7c',
  status: 'SUCCEEDED',
  startDate: 2024-08-11T14:52:38.285Z,
  stopDate: 2024-08-11T14:52:40.048Z,
  input: '{"x":12, "y":12}',
  inputDetails: { included: true },
  output: '48',
  outputDetails: { included: true },
  redriveCount: 0,
  redriveStatus: 'NOT_REDRIVABLE',
  redriveStatusReason: 'Execution is SUCCEEDED and cannot be redriven'
}
```



### Deployment

In order to deploy the example, you need to run the following command:

```
serverless deploy
```

After running deploy, you should see output similar to:

```
Deploying "aws-node" to stage "dev" (us-east-1)

✔ Service deployed to stack aws-node-dev (90s)

functions:
  hello: aws-node-dev-hello (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```
serverless invoke --function hello
```

Which should result in response similar to the following:

```json
{
  "statusCode": 200,
  "body": "{\"message\":\"Go Serverless v4.0! Your function executed successfully!\"}"
}
```

### Local development

The easiest way to develop and test your function is to use the Serverless Framework's `dev` command:

```
serverless dev
```

This will start a local emulator of AWS Lambda and tunnel your requests to and from AWS Lambda, allowing you to interact with your function as if it were running in the cloud.

Now you can invoke the function as before, but this time the function will be executed locally. Now you can develop your function locally, invoke it, and see the results immediately without having to re-deploy.

When you are done developing, don't forget to run `serverless deploy` to deploy the function to the cloud.
