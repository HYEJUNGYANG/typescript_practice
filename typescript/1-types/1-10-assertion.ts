{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // 그냥 result만 작성하면 any타입이기 때문에 문자열 관련 api를 사용할 수 없음
  console.log((result as string).length);
  console.log((<string>result).length);
  // 만약에 jsStrFunc() return 값이 10(number);이라면 코드를 실행했을 때 undefined이 나오게 됨!
  // Type Assertions은 100% 장담할 수 있을 때만 사용하는게 좋다

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 에러 발생 😱 💩

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  const numberss = findNumbers()!; // return값이 100% 장담 가능할 때 함수 뒤에 ! 붙이기도 함 (권장x)
  numbers!.push(2); // ! -> ?와 반대되는 것으로 100% 장담하는 것 - 이러다 에러가 발생할 수도 있으므로 조심해서 사용
}
