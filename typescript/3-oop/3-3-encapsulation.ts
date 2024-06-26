{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public - default
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_CRAM_PER_SHOT: number = 7; // class level 클래스 레벨에서 함께 공유하려면 static
    private coffeeBeans: number = 0; // instance (object) level 오브젝트마다 새로 만들어져야 하는 변수라면

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 보통 이렇게 함수에 static을 붙이는 것은 누군가가 생성자를 이용해서 생성하는 것을 금지하기 위해 사용함
    // -> constructor를 private으로 해서 항상 static 메서드를 이용하도록 하는 것이 좋다
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('커피콩의 크기는 0보다 커야해!');
      }
      this.coffeeBeans += beans;
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

  //   const maker = new CoffeeMaker(43); - error
  const maker = CoffeeMaker.makeMachine(12);
  maker.fillCoffeeBeans(32);

  // getter, setter 연습
  class User {
    private internalAge = 4;

    // get이라는 키워드를 쓰면 아래처럼 함수형태이지만 호출시에는 일반 멤버변수처럼 호출
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }

    // 생성자 함수 매개변수명 앞에 private, public, protected와 같은 키워드를 붙이면 멤버변수 선언과 동일한 역할
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // 멤버변수처럼 호출
  user.age = 6;
}
