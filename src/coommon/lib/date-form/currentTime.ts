// getCurrentDate 함수는 주어진 형식에 따라 현재 날짜의 Date 객체를 변환
export const getCurrentDate = (value, date = new Date()) => {
  // date 객체로부터 연, 월, 일, 시, 분, 초, 밀리초를 추출
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  // value에 따라 다른 형식의 날짜를 반환합니다.
  if (value === 'today') {
    // 'today'인 경우, 현재 날짜만 포함한, UTC 기준의 Date 객체를 변환
    return new Date(Date.UTC(year, month, today));
  } else if (value === 'month') {
    // 'month'인 경우, 현재 연도와 월만 포함한 UTC 기준의 Date 객체를 변환
    return new Date(Date.UTC(year, month));
  } else {
    // 그 외의 경우, 현재의 정확한 날짜와 시간을 포함한 UTC 기준의 Date 객체를 반환합니다.
    return new Date(
      Date.UTC(year, month, today, hours, minutes, seconds, milliseconds),
    );
  }
};

// birthdayFormat 함수는 주어진 Date 객체의 연도, 월, 일만 포함하는 새로운 Date 객체를 반환
export const birthdayFormat = (date: Date) => {
  // date 객체로부터 연, 월, 일을 추출합니다.
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();

  // 추출한 연, 월, 일로 새로운 UTC 기준의 Date 객체를 생성하여 반환합니다.
  // 이는 생일과 같은 날짜만 중요한 경우에 유용합니다.
  return new Date(Date.UTC(year, month, today));
};
