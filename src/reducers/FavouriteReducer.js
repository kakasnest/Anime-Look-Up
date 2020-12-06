export const ADD = "add";
export const REMOVE = "remove";
export const RESET = "reset";

export const initialState = [];

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD:
      if (!state.includes(payload)) {
        return [...state, payload];
      }
      return state;
    case REMOVE:
      return state.filter((s) => s !== payload);
    case RESET:
      return initialState;
    default:
      throw new Error("Unknown type");
  }
};
