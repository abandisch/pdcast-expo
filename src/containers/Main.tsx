import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "@pdcast/screens/Home";
import EpisodeScreen from "@pdcast/screens/Episode";

// Constants
import { screens } from "@pdcast/lib/constants";

/*
For next time
 4) Click to see info of pod cast
 5) Play a pod cast
 *) Setup OTA (Over The Air) for updates
 *) maybe look at absolute paths (https://betterprogramming.pub/use-absolute-paths-with-react-51ced66f119f)
*/

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.HOME} component={HomeScreen} />
      <Stack.Screen name={screens.EPISODE} component={EpisodeScreen} />
    </Stack.Navigator>
  );
}

export default App;
