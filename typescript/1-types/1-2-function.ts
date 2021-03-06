{
  //  JavaScript ๐ฉ
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript โจ
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //  JavaScript ๐ฉ
  // ์ฝ๋๊ฐ ๊ธธ๋ค๋ฉด ์ด๋ค๊ฑธ ๋ฆฌํดํ๋์ง ๋ด๋ ค์ ํ์ธํด๋ด์ผ ํ๋ ๋ถํธํจ์ด ์กด์ฌ
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript โจ
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript โจ => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // ์ ๋ฌํ์ง ์์ผ๋ฉด undefined
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
