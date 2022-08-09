import * as Type from "./type";

const initialState = {
  user: null,
  image: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_USERS:
      return { ...state, user: payload };

    case Type.SET_IMAGE:
      return { ...state, image: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";