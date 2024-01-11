import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  // NestMiddleware 인터페이스의 use 메소드를 구현합니다.
  use(req: Request, res: Response, next: NextFunction) {
    // Response 객체의 'finish' 이벤트 리스너를 설정합니다.
    // 이 이벤트는 HTTP 응답이 클라이언트에게 전송 완료되었을 때 발생합니다.
    res.on('finish', () => {
      // 로그를 기록합니다. 요청의 IP 주소, HTTP 메소드, 응답 상태 코드를 포함합니다.
      this.logger.log(
        `${req.ip} ${req.method} ${res.statusCode}`,
        req.originalUrl,
      );
    });

    // next 함수를 호출하여 요청 처리 파이프라인의 다음 미들웨어로 제어를 넘깁니다.
    next();
  }
}
