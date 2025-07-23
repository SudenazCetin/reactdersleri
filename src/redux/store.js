import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Başlangıç state (gerekirse ekle)
const initialState = {};

// Reducer'ları birleştir (ileride artırırsan buraya eklersin)
const reducers = combineReducers({
  // örnek: counter: counterReducer
});

// Store oluştur
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
