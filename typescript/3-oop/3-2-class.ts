{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_CRAM_PER_SHOT: number = 7; // class level 클래스 레벨에서 함께 공유하려면 static
    coffeeBeans: number = 0; // instance (object) level 오브젝트마다 새로 만들어져야 하는 변수라면

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_CRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_CRAM_PER_SHOT;
      return {
        shots, // shots: shots (key와 value의 이름이 같으면 생략 가능)
        hasMilk: false
      };
    }
  }

  const maker = new CoffeeMaker(43);
  console.log(maker);
  const maker2 = new CoffeeMaker(43);
  console.log(maker2);
  const maker3 = CoffeeMaker.makeMachine(3); // 인스턴스를 생성하지 않아도
}
