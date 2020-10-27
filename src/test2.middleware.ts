import { Injectable, NestMiddleware } from '@nestjs/common';
import { MyService } from './test.service';

@Injectable()
export class Test2Middleware implements NestMiddleware {
    constructor(private readonly service: MyService) {}

    async use(req: any, res: any, next: () => void) {
        console.log(2);

        return next();
    }
}
