import {APIGatewayEvent} from "aws-lambda";

export class ResponseBuilder {

    public getResponse(message: string, event: APIGatewayEvent) {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: message,
                input: event
            })
        }
    }
} 