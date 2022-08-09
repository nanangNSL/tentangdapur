import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'js-cookie'
import auth from "./authenticate/index.js";
import recipe from "./recipe/index.js";
import search from "./search/index.js"
import users from "./users/index.js"
import image from "./users/index.js"

const persistConfig = {
  key: "root",
  storage:  new CookieStorage(Cookies/*, options */),
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth,
  recipe,
  search,
  users,
  image
}); 

const persistedReducer =persistReducer(persistConfig, rootReducer);

export default persistedReducer;