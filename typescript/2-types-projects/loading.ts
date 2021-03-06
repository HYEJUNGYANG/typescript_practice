{
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  //   function printLoginState(state: ResourceLoadState) {
  //     if (state.state === 'loading')
  //       //
  //       console.log(`π ${state.state}...`);
  //     else if (state.state === 'success')
  //       console.log(`π ${state.response.body}`);
  //     else console.log(`π± ${state.reason}`);
  //   }

  // switchλ¬Έ μ΄μ©ν  κ²½μ°μλ
  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        console.log(`π ${state.state}...`);
        break;
      case 'success':
        console.log(`π ${state.response.body}`);
        break;
      case 'fail':
        console.log(`π± ${state.reason}`);
        break;
      default:
        throw new Error(`${state}λ μ μλμ§ μμ κ°μλλ€`);
    }
  }

  printLoginState({ state: 'loading' }); // π loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // π loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // π± no network
}
