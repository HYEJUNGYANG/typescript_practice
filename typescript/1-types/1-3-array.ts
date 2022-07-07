{
  // Array
  // 타입 정의 방법 2개
  const fruits: string[] = ['🍅', '🍌'];
  const scores: Array<number> = [1, 2, 3];
  // 주어진 데이터를 변경 및 업데이트 불가능 (readonly 뒤에 Array<string>은 x)
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class 등으로 대체가능
  // 동적으로 return하는데 클래스, 인터페이스 등으로 묶기 애매하고 동적으로 관련있는 다른 타입의 데이터를 묶어서 이름을 정의해서 쓸 경우가 아니면 대체 가능여부 생각해보는 것이 좋음
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
