{
  // 상속의 문제점!
  // 상속의 깊이가 깊어질수록 관계가 복잡해질 수 있음
  // 상속은 수직적으로 이루어짐
  // 부모클래스의 내용을 수정하면 상속하는 자식 클래스에 영향을 끼칠 수 있음
  // ts에서는 한가지 이상의 부모 클래스를 상속할 수 없음!!
  // -> Composition의 필요성
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

  // 필요한 것을 매번 클래스 내부에 구현하는 것이 아니라
  // 각각의 기능별로 따로 클래스를 만들어서
  // 필요한 곳에서 가져다가 씀

  // 싸구려 우유 거품기
  class CheepMilkSteamer {
    private steamMilk(): void {
      // 복잡한 로직이라고 가정
      console.log('Steaming some milk...🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      // 복잡한 로직이라고 가정
      console.log('Getting some sugar from candy 🍭');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar
      };
    }
  }
  class CaffeLatteMachine extends CoffeeMachine {
    // 우유와 설탕이 필요한 곳에서 로직을 반복해서 적는 것이 아니라
    // 생성자에서 필요한 것들을 외부로부터 주입받아서 가져옴 -> dependency injection
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: CheepMilkSteamer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      // super -> 부모 클래스에 있는 함수 호출 및 접근 가능
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheepMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }
    // 오버라이딩
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
}
