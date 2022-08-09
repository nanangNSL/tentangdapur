import * as Type from "./type";

const initialState = {
  keywords: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_QUERY:
      return { ...state, keywords: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";