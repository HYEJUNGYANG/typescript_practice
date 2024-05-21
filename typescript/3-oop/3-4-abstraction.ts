{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // CoffeeMachine이라는 클래스는 CoffeeMaker(인터페이스)의 규격을 따라가고 이것을 구현하는 클래스
  // 인터페이스를 구현(implements)하는 클래스에서는 interface에 적혀있는 모든 함수를 구현해야함
  // 인터페이스를 이용하면 추상화를 좀 더 극대화해서 사용가능
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_CRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('커피콩의 크기는 0보다 커야해!');
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_CRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_CRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕️`);
      return {
        shots, // shots: shots (key와 value의 이름이 같으면 생략 가능)
        hasMilk: false
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker1: CoffeeMachine = CoffeeMachine.makeMachine(12);
  maker1.fillCoffeeBeans(32);

  // CoffeeMaker에는 fillCoffeeBeans라는 함수가 없기 때문에 사용 불가능
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(12);
  //   maker2.fillCoffeeBeans(32);
}
