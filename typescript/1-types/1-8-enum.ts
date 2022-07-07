{
  /**
   * Enum
   */
  // JavaScript에는 X
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  // 연관된 것을 묶을 수 없음
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY; // 0

  // TypeScript
  enum Days { // 앞에 글자만 대문자 나머지는 소문자
    Monday = 1, // 값을 지정하지 않으면 0부터 (문자열을 넣을 경우에는 모두 할당해줘야 함)
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // 이렇게 해도 에러 발생하지 않음
  console.log(day);
  // TypeScript에서 enum은 가능하면 사용하지 않는 것이 좋음 - 타입이 정확하게 보장되지 않음

  // enum은 대부분 유니온 타입으로 대체되어 사용 가능함
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfweek: DaysOfWeek = 'Monday';
  //   dayOfweek = 'Thursday'; // 작성해두지 않은 것은 값으로 사용 불가능
}
