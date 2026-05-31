import {Handler} from "./Handler";
import {Request} from "./http/Request";
import {Response} from "./http/Response";

export abstract class AbstractHandler implements Handler<Request, Response> {
    protected next : Handler<Request, Response>|null = null;

    setNext(next:Handler<Request, Response>) :Handler<Request, Response> {
        this.next = next;

        return this.next;
    }

    handle(request:Request,response:Response):Response{
        if(this.next){
            console.log("Default Handler")
         return this.next.handle(request,response);
        }
        return response;
    };
}