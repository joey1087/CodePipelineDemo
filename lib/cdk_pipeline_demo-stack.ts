import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as path from "path";
import * as apigw from "@aws-cdk/aws-apigateway";
import { CfnOutput } from "@aws-cdk/core";

export class CdkPipelineDemoStack extends cdk.Stack {
    public readonly apiUrl: CfnOutput;

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        /// Lambda function
        const lambdaFunc = new lambda.Function(this, "MyLambdaFunc", {
            runtime: lambda.Runtime.NODEJS_12_X,
            code: lambda.Code.fromAsset(path.resolve(__dirname, "lambda")),
            handler: "handler.handler",
        });

        /// API Gateway
        const api = new apigw.LambdaRestApi(this, "api", {
            handler: lambdaFunc,
        });

        /// Output API Gateway url
        this.apiUrl = new CfnOutput(this, "apiUrl", {
            value: api.url,
        });
    }
}
