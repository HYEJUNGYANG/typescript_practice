{
  /**
   * Print Loading State
   */
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

  function printLoginState(loadState: ResourceLoadState): void {
    switch (loadState.state) {
      case 'loading':
        console.log(`👀 ${loadState.state}...`);
        break;
      case 'fail':
        console.log(`😱 ${loadState.reason}`);
        break;
      case 'success':
        console.log(`😃 ${loadState.response.body}`);
        break;
      default:
        throw new Error(`unknown state: ${loadState}`);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
