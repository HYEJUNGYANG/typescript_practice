{
  /**
   * Type Inference
   */
  let text = 'hello'; // let text: string = 'hello'와 같음
  text = 'hi';
  //   text = 1;  // error
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
