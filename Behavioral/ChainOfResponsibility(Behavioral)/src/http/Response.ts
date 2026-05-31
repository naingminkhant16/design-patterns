export class Response {
    constructor(
        private status:number,
        private body:Map<string, any>
    ) {}
}