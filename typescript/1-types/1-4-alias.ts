{
  /**
   * Type Aliases  - 새로운 타입을 정의할 수 있음
   */
  type Text = string;
  const name: Text = 'hyejung';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'jung',
    age: 23
    // height: 160,  -> 정의 해놓은 것만 사용 가능
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let jungName: Name;
  //   jungName = 'd' -> 다른 문자열 사용 불가능
  jungName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
