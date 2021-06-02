import {
    APIGatewayProxyEvent,
    Context,
    APIGatewayProxyResult,
} from "aws-lambda";

export const handler = async (
    event: APIGatewayProxyEvent,
    context: Context
): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: "Hello World!",
    };
};
