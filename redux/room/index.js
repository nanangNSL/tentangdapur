import * as Type from "./type";

const initialState = {
  room: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_ROOMS:
      return { ...state, room: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";