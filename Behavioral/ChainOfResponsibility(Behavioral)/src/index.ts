import {AuthHandler} from "./AuthHandler";
import {MiddlewareHandler} from "./MiddlewareHandler";
import {Request} from "./http/Request";
import {Response} from "./http/Response";

const authHandler=new AuthHandler();
const middlewareHandler=new MiddlewareHandler();
authHandler.setNext(middlewareHandler);

authHandler.handle(
    new Request(
        'http://localhost:8080/api/users',
        'GET',
        new Map<string, any>([["email","test@gmail.com"],['password','123456']])
    ),
    new Response(200,new Map<string, any>([['message','success']]))
);