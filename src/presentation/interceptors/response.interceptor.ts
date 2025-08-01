import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../common/api-response';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
	intercept(_context: ExecutionContext, next: CallHandler): Observable<unknown> {
		return next.handle().pipe(
			map((data: unknown) => {
				if (data && typeof data === 'object' && 'success' in data) {
					return data;
				}
				return ApiResponse.ok(data);
			}),
		);
	}
}
