import {AbstractHandler} from "./AbstractHandler";
import {Request} from "./http/Request";
import {Response} from "./http/Response";

export class AuthHandler extends AbstractHandler{
    handle(request: Request, response: Response): Response {
        console.log("Auth handler handler called");
        if(this.next){
            return this.next.handle(request, response);
        }
        return response;
    }
}