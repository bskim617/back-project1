import { Injectable } from '@nestjs/common';
import { UserRepo } from './user.repo';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/user.dto';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {}

  // 회원가입
  async signUp(createUserDto: CreateUserDto): Promise<User> {
    // 비밀번호 유효성 검사 - 정규표현 식(최소 8자리에서 최대 16자리 최소한 한 개의 특수 문자를 포함 )
    const regex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;

    if (!createUserDto.password || !regex.test(createUserDto.password)) {
      throw new Error('비밀번호의 형식이 잘 못 되었습니다.');
    }
    // 비밀번호 해쉬 작업
    const hashPassword = await bcrypt.hash(createUserDto.password, 10);

    // 아이디, 닉네임, 휴대폰 등 중복 검사

    // 회원 생성
    return await this.userRepo.createUser({
      ...createUserDto,
      password: hashPassword,
    });
  }
}
