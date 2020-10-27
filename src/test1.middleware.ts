import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Test1Middleware implements NestMiddleware {
    async use(req: any, res: any, next: () => void) {
        console.log(1);

        return next();
    }
}
