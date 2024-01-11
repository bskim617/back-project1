import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

// @Catch 데코레이터는 HttpException을 잡아내는 필터를 정의합니다.
// 이 클래스는 HttpException 또는 그 서브클래스들에 의해 발생된 예외들을 처리합니다.
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // catch 메소드는 필터가 예외를 잡아냈을 때 실행됩니다.
  // exception 매개변수는 잡힌 예외 객체를 나타냅니다.
  // host 매개변수는 요청의 실행 컨텍스트를 나타냅니다.
  catch(exception: any, host: ArgumentsHost) {
    // host.switchToHttp()는 HTTP 특화된 실행 컨텍스트를 가져옵니다.
    const ctx = host.switchToHttp();

    // HTTP 응답 객체를 가져옵니다.
    const response = ctx.getResponse<Response>();

    // HTTP 요청 객체를 가져옵니다.
    const request = ctx.getRequest<Request>();

    // 예외로부터 HTTP 상태 코드를 가져옵니다.
    const status = exception.getStatus();

    // 예외로부터 응답 본문을 가져옵니다. 이는 문자열 또는 객체일 수 있습니다.
    const error = exception.getResponse() as
      | string
      | { error: string; statusCode: number; message: string | string[] };

    // 예외의 응답 본문이 문자열인 경우, JSON 형태로 클라이언트에 응답합니다.
    if (typeof error === 'string') {
      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        error: error,
      });
    } else {
      // 예외의 응답 본문이 객체인 경우, 객체의 내용을 확장하여 JSON 형태로 응답합니다.
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        ...error,
      });
    }
  }
}
