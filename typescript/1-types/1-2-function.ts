{
  //  JavaScript 💩
  // 숫자가 아닌 문자 타입의 값 전달시 예상과 다른 결과 값이 나올 수 있음
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //  JavaScript 💩
  // 코드가 길다면 어떤걸 리턴하는지 내려서 확인해봐야 하는 불편함이 존재
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript
  // Optional parameter
  // ? -> 전달 해도되고 안해도 됨
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // 전달하지 않으면 undefined
  }
  printName('Steve', 'Jobs');
  printName('HyeJung');
  printName('Anna');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
