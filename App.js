import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Interactable from 'react-native-interactable';
import Gestures from 'react-native-easy-gestures';


export default class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>

        <Gestures
          rotatable={true}
          scalable={true}
          onChange={(event, styles) => {
            console.log(styles);
          }}
        >
          <Interactable.View
            verticalOnly={true}
            dragEnabled={true}
            snapPoints={[{y: 0}, {y: 100}, {y: 200}]}
          >
            <View style={styles.green}></View>
          </Interactable.View>
        </Gestures>


        <Interactable.View
         verticalOnly={true}
         dragEnabled={true}
         snapPoints={[{y: 0}, {y: 100}, {y: 200}]}
        >
          
          <View style={styles.green}></View>
        </Interactable.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  green: {
    height: 75,
    width:200,
    backgroundColor: '#5894f3',
    alignItems: 'center',
    zIndex: 1001
  }
});
