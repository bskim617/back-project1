import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './user.schema';

@ApiTags('회원')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 회원가입
  @ApiOperation({ summary: '회원 가입' })
  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userService.signUp(createUserDto);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // 로그인

  // 로그아웃
}
