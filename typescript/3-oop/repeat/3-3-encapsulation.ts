{
  // 캡슐화
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public (default)
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_CRAM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; // (static 없는 변수) -> instance(object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_CRAM_PER_SHOT) {
        // 한번 에러가 던져지면 아래 코드는 실행되지 않음
        throw new Error('Not enough coffee beans!!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_CRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker.makeCoffee(3));
}
