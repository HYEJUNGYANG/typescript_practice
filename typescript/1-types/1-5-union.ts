{
  /**
   * Union Types: OR
   * 이거 or 저거 등 모든 가능한 케이스 중에서 발생할 수 있는 딱 하나를 담을 수 있는 타입을 만들고 싶을 때
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16; // 3가지 값 외에 다른 값은 X

  // union type 관련 예제
  // function login() -> 성공, 실패
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!'
      }
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  function printLoginState(state: LoginState) {
    // response라는 key가 state 안에 있는지 확인
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
