{
  /**
   * Type Assertions ๐ฉ
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // ๊ทธ๋ฅ result๋ง ์์ฑํ๋ฉด anyํ์์ด๊ธฐ ๋๋ฌธ์ ๋ฌธ์์ด ๊ด๋ จ api๋ฅผ ์ฌ์ฉํ  ์ ์์
  console.log((result as string).length);
  console.log((<string>result).length);
  // ๋ง์ฝ์ jsStrFunc() return ๊ฐ์ด 10(number);์ด๋ผ๋ฉด ์ฝ๋๋ฅผ ์คํํ์ ๋ undefined์ด ๋์ค๊ฒ ๋จ!
  // Type Assertions์ 100% ์ฅ๋ดํ  ์ ์์ ๋๋ง ์ฌ์ฉํ๋๊ฒ ์ข๋ค

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ์๋ฌ ๋ฐ์ ๐ฑ ๐ฉ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // ! -> ?์ ๋ฐ๋๋๋ ๊ฒ์ผ๋ก 100% ์ฅ๋ดํ๋ ๊ฒ - ์ด๋ฌ๋ค ์๋ฌ๊ฐ ๋ฐ์ํ  ์๋ ์์ผ๋ฏ๋ก ์กฐ์ฌํด์ ์ฌ์ฉ
}
