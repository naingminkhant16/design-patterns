import {Request} from "./http/Request";
import {Response} from "./http/Response";
import {AbstractHandler} from "./AbstractHandler";

export class MiddlewareHandler extends AbstractHandler {
    handle(request: Request, response: Response): Response {
        console.log("Middleware handler handler called");
        if(this.next){
            return this.next.handle(request, response);
        }
        return response;
    }
}