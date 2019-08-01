import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import {
  reducer
} from "./state";

export class Application {
  static current: Application;
  store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware, thunkMiddleware))
  );
  static async run() {
    Application.current = new Application();
    try {
      await Application.current.onInstall();
      await Application.current.onStart();
    } catch (err) {
      console.error(err);
    }
  }
  //---------------------------------------

  async onStart() {
    console.log(Application.current.store.getState());
  }
  async onInstall() { }
  async onUpdate() { }

  //TODO:
  onError() { }
}
