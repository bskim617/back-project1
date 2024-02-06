import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '회원 ID' })
  uid: string;

  @ApiProperty({ description: '비밀번호' })
  password: string;

  @ApiProperty({ description: '핸드폰 번호' })
  hpNo: string;

  @ApiProperty({ description: '이름' })
  name: string;

  @ApiProperty({ description: '닉네임' })
  nickName: string;

  @ApiProperty({ description: '생년월일' })
  birthdate: string;

  @ApiProperty({ description: '성별' })
  gender: string;

  @ApiProperty({ description: '주소' })
  adress: string;
}
