import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    canActivate(context: ExecutionContext) {
        // intercept request to set the credentials in body
        try {            
            const request = context.switchToHttp().getRequest<Request>();
            const auth = request.headers['authorization'];
    
            if (auth.search("Basic ") < 0) {
                throw new UnauthorizedException();
            }
            const encoded = auth.replace('Basic ', '');
            const decoded = Buffer.from(encoded, 'base64').toString('ascii');
            const username = decoded.slice(0, decoded.indexOf(':')); 
            const password = decoded.split(':')[1];
    
            request.body['username'] = username;
            request.body['password'] = password;
    
            return super.canActivate(context);
        } catch {
            throw new UnauthorizedException();
        }
    }
}