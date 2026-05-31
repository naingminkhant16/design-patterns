export class Request {
    constructor(
        private url: string,
        private method: string,
        private body: Map<string, any>
    ) {}
}