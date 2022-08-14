import * as Tipe from "./type";

const initialState = {
  save: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Tipe.SET_SAVE:
      return { ...state, save: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";