/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigation from "./src/Configuration/Navigation";
import {Provider} from "react-redux";
import store from "./src/Store/Store";
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <AppNavigation/>
      </Provider>
    )
  }
}

export default App;
