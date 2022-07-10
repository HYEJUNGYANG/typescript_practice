{
  // 절차지향으로 커피 기계 만들어보기
  // 전역적으로 커피콩을 가지고 있는 변수를 만들고 그것을 이용해서 커피를 만들 수 있는 함수를 만듦
  // 커피를 만드는 makeCoffee()에는 한가지 인자 전달 가능!
  // 샷 -> 원샷은 커피를 한번 내림 / 투샷은 커피를 한번 내리고 다시 한번 더 내려서 커피를 진하게 만듦
  // 얼마나 많은 샷을 포함할건지 전달하는 인자가 있음
  // makeCoffee() 함수는 커피를 만들어서 return

  //   let coffeeBean: string;

  //   function makeCoffee(count: number): string {
  //     return `${count}shot coffee`;
  //   }

  //   coffeeBean = makeCoffee(3);
  //   console.log(coffeeBean);

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_CRAM_PER_SHOT = 7; // 타입 추론으로 number를 꼭 붙이지 않아도 괜찮음! 명시적으로 하고 싶다면 number를 붙여주면 됨

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_CRAM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_CRAM_PER_SHOT;
    return {
      shots, // shots: shots (key와 value의 이름이 같으면 생략 가능)
      hasMilk: false
    };
  }

  coffeeBeans += 3 * BEANS_CRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
