import * as bcrypt from 'bcrypt';

// tohash 함수는 주어진 비밀번호를 해시하는 함수입니다.
export const toHash = (password: string) => {
  // bcrypt.hash 함수는 비밀번호를 받아 해시된 값을 반환합니다.
  // 첫 번째 매개변수는 해시할 비밀번호이고, 두 번째 매개변수는 솔트 라운드 수입니다.
  // 솔트 라운드 : 해시를 생성할 때 추가적인 보안을 제공하는 데 사용
  return bcrypt.hash(password, 10);
};

// compareWithHash 함수는 저장된 해시와 사용자 입력 값을 비교하는 함수
// 이 함수는 비동기적으로 작동하면, Promise를 변환합니다
export const compareWithHash = async (value, hashedValue) => {
  // bcrypt.compare 함수는 두 값을 비교하여 일치하는지 확입합니다.
  // 첫 번째 매개변수는 사용자가 입력한 원본 값이고, 두 번째는 데이터베이스 등에 저장된 해시 값입니다.
  // 이 함수는 일치할 경우 true, 그렇지 않을 경우 false를 반환합니다.
  return await bcrypt.compare(value, hashedValue);
};
