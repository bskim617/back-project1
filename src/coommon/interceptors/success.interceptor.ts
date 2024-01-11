import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  // intercept 메소드는 NestInterceptor 인터페이스를 구현합니다.
  // 이 메소드는 요청 처리 파이프라인의 특정 지점에서 호출됩니다.
  intercept(
    context: ExecutionContext, // 현재 요청의 실행 컨텍스트 정보를 담고 있습니다.
    next: CallHandler<any>, // CallHandler는 다음 인터셉터나 컨트롤러 핸들러를 나타냅니다.
  ): Observable<any> | Promise<Observable<any>> {
    // next.handle()은 다음 핸들러 또는 인터셉터를 호출합니다.
    // 이는 Observable을 반환합니다.
    return next.handle().pipe(
      // pipe와 map 연산자를 사용하여 반환된 데이터를 변환합니다.
      map((data) => ({
        // 응답 데이터 구조를 { success: true, data: ... } 형태로 변환합니다.
        // 이렇게 하면 모든 응답이 일관된 형식을 갖게 됩니다.
        success: true,
        data,
      })),
    );
  }
}
