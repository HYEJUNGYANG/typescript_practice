{
  // 절차지향적으로 먼저
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_CRAM_PER_SHOT = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_CRAM_PER_SHOT) {
      // 한번 에러가 던져지면 아래 코드는 실행되지 않음
      throw new Error('Not enough coffee beans!!');
    }
    coffeeBeans -= shots * BEANS_CRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false
    };
  }

  coffeeBeans += 3 * BEANS_CRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
