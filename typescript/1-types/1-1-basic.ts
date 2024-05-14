{
  // JavaScript
  // let es6에서 도입
  let hi = 'hello';
  hi = 'hi'; // 값 변경 가능
  // const
  const age = 5;
  // 한 번 선언한 값은 변경 불가능
  //   age = 6;

  /**
   * JavaScript
   * Primitive(원시 타입): number, string, boolean, bigint, symbol, null, undefined
   * Object(오브젝트 타입): function, array...
   */

  // TypeScript
  // number (소수도 가능)
  const num: number = 1; // 0.1, -6...

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined (값이 있는지 없는지 결정된 것이 없음)
  let name: undefined; // 💩 이렇게 단독적으로는 사용하지 않음
  // 보편적으로 null보다 undefined 많이 사용! 타입이 있거나 아직 정해지지 않았거나...
  let notYet: number | undefined; // | -> 또는 (or)
  notYet = undefined;
  notYet = 1;
  function find(): number | undefined {
    return 10;
    // return undefined;
  }

  // null (비었다는 것을 명확하게)
  let person: null; // 💩 (undefined이랑 마찬가지로 단독으로 사용 x)
  let person2: string | null;

  // unknown 💩 가능하면 쓰지 않는 것이 좋음
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 unknown과 마찬가지로 가능하면 쓰지 않는 것이 좋음!
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    // 함수에서 void는 생략 가능
    console.log('hello');
    return; // 아무것도 리턴하지 않을 때
  }
  let unusable: void = undefined; // 💩 (변수에서는 활용성이 떨어짐 - undefined밖에 사용할 수 없음)

  // never
  // return X
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
    // return; - 사용 불가능! (함수안에 아무것도 적혀있지 않은 것도 return;과 동일하므로 불가능)
  }
  let neverEnding: never; // 💩

  // object
  // 원시타입을 제외한 모든 오브젝트 타입을 할당할 수 있음
  let obj: object; // 💩 가능하면 좀 더 구체적으로
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
