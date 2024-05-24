{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    // ? -> Optional
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_CRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
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

    clean() {
      console.log('cleaning the machine...🧼');
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

  // 각각 다른 커피머신을 구현
  // 다형성을 이용하면 한 가지의 인터페이스 or 클래스를 이용해서 다른 방식으로 구현한 클래스를 만들 수 있음
  class CaffeLatteMachine extends CoffeeMachine {
    // readonly를 붙이면 한 번 선언하고 그 뒤로는 수정 불가능! 상수 같은 역할
    constructor(beans: number, public readonly serialNumber: string) {
      // 자식 클래스에서 생성자를 따로 구현하는 경우에는 super() 필수 호출!!
      // 부모 생성자 호출이기 때문에 부모 생성자에 필요한 값도 전달해 주어야 함
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk...🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
      // super -> 부모 클래스에 있는 함수 호출 및 접근 가능
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16)
  ];
  // 다형성의 최고의 장점
  // 내부적으로 구현된 다양한 클래스들이 한 가지 인터페이스를 구현하거나
  // or 동일한 부모 클래스를 상속했을 때
  // 동일한 함수를 어떤 클래스인지 구분하지 않고 공통된 api를 호출할 수 있음!!
  machines.forEach((machine) => {
    console.log('--------------------------');
    machine.makeCoffee(1);
  });
}
