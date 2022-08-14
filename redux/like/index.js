import * as Type from "./type";

const initialState = {
  like: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_LIKE:
      return { ...state, like: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";