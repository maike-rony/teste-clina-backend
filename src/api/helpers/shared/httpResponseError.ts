import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { responseError } from "../http-helper";

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        const responseExecption: any = exception.getResponse()  
        
        if (exception) { 
            const status = responseExecption.status ? responseExecption.status : responseExecption.statusCode
            const res =  responseExecption.response ? responseExecption.response : responseExecption
            
            response.status(status)
                .json(res);
        }        
        else {            
            response.status(500)
                .json(responseError(('ResponseError')));
        }

    }
}