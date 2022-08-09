import * as Type from "./type";

const initialState = {
  recipe: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_DATA_RECIPE:
      return { ...state, recipe: payload.recipe };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";