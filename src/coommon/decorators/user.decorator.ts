import { ExecutionContext, createParamDecorator } from '@nestjs/common';

// CurrentUser 라는 이름의 사용자 정의 데코레이터를 생성합니다.
export const CurrentUser = createParamDecorator(
  // ExecutionContext 객체에서 HTTP 요청을 가져옵니다.
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // 요청 객체에서 user 정보를 반환합니다.
    return request.user;
  },
);
