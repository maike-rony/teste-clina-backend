import { Injectable } from "@nestjs/common";
import { ok } from "./helpers";
import { HttpResponse } from "./helpers/types/http";

@Injectable()
export class AppService {

    constructor() { }
    async getHealthCheck(): Promise<HttpResponse> {
        return ok({
            api: 'api-clina',
            version: '0.1'
        })
    }

}
