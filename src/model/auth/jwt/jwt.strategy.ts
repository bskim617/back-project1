import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepo } from 'src/model/user/user.repo';
import { Payload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepo: UserRepo) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrkKey: process.env.JWT_SECRET_KEY,
      ignoreExporation: false,
    });
  }

  async validate(payload: Payload) {
    try {
      const user = await this.userRepo.findPassword(payload.sub);
      if (user) {
        return user;
      } else {
        throw new Error('유저를 찾을 수 없습니다.');
      }
    } catch (error) {}
  }
}
