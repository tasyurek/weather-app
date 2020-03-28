import React from "react";
import "./styles/App.css";
import "./styles/base.css";
import "./styles/side.css";
import "./styles/main.css";
import Side from "./components/Side";
import Main from "./components/Main";

import configureStore from "./stores/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Side />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
