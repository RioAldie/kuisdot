export const initialState = {count: 5};

export function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      default:
        throw new Error();
    }
}