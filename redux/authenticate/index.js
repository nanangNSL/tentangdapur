import * as Type from "./type";

const initialState = {
  token: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_AUTH:
      return { ...state,  token: payload.token };

    case Type.REMOVE_AUTH:
      return { ...state, token: null };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";