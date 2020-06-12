import {APIGatewayEvent, APIGatewayProxyResult, Context} from "aws-lambda";
import {ResponseBuilder} from "./ResponseBuilder";

class ApiEndpoint {
    private responseBuilder: ResponseBuilder;
    
    constructor() {
        this.responseBuilder = new ResponseBuilder();
    }
    
    public async helloWorld(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
        return this.responseBuilder.getResponse('Hello world', event);
    }
    
    public async goodbyeWorld(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
        return this.responseBuilder.getResponse('Goodbye world', event);
    }
}

export const handler = new ApiEndpoint();

export const helloWorld = handler.helloWorld.bind(handler);
export const goodbyeWorld = handler.goodbyeWorld.bind(handler);