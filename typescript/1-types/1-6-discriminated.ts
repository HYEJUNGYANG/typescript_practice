{
  // function login() -> 성공, 실패
  type SuccessState = {
    // result - 공통적인 프로퍼티 -> 구분하기 쉽게 만들어줌
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      // 공통적인 프로퍼티
      result: 'success',
      response: {
        body: 'logged in!'
      }
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
