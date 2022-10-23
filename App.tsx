import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

// Redux
import { store } from "@pdcast/lib/store/configureStore";

// Main App
import Main from "@pdcast/containers/Main";

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
