export interface Handler<Request,Response> {
    setNext(next:Handler<Request,Response>):Handler<Request, Response>;
    handle(request:Request,response:Response):Response;
}