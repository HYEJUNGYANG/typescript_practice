{
  /**
   * Type Inference (타입 추론)
   */
  let text = 'hello'; // let text: string = 'hello'와 같음
  text = 'hi';
  //   text = 1;  // error - ts에서 자동으로 string 타입이라 인식하고 에러 발생(타입 추론)
  // 함수 매개변수 타입을 명시하지 않으면 any 타입! -> any 타입은 💩
  // 매개변수에 타입을 명시하지 않아도 기본 값을 할당 하면 타입 추론 가능
  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');
  //   print(1); // error

  function add(x: number, y: number) {
    return x + y; // return 타입도 number일 것이라고 추론됨
  }

  const result = add(1, 2); // result: number
  // 추론보다는 명확하게 명시해주는 것이 좋음 or 팀에서 생략 가능한 범위를 정해두고 그에 맞춰가는 것도 좋음
}
