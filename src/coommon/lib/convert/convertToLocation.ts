const convertToLocation = (address) => {
  // 입력 값이 유효한지 확인합니다.
  if (!address || typeof address !== 'string') {
    throw new Error('Invalid address provided');
  }

  // 주소를 공백 기준으로 분리합니다.
  let [city, gu, ...rest] = address.split(' ');

  // 도시 이름을 필요에 따라 수정합니다.
  if (city === '제주특별자치도') {
    city = '제주';
  }

  // 나머지 주소 부분을 하나의 문자열로 결합합니다.
  // 배열의 join 메소드를 사용하여 더 간결하게 작성할 수 있습니다.
  const detail = rest.join(' ');

  // 결과를 객체로 반환합니다.
  return { city, gu, detail };
};

export default convertToLocation;
