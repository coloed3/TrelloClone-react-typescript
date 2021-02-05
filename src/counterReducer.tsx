interface State {
  count: number;
}

type Action =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    };

export const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
