import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import auth from "./authenticate/index.js";
import recipe from "./recipe/index.js";
import search from "./search/index.js"
import users from "./users/index.js"
import image from "./users/index.js"
import room from "./room/index.js"
import like from "./like/index.js"
import save from "./save/index.js"

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth", "like","save"],
};
const rootReducer = combineReducers({
  auth,
  recipe,
  search,
  users,
  image,
  room,
  like,
  save
}); 

const persistedReducer =persistReducer(persistConfig, rootReducer);

export default persistedReducer;