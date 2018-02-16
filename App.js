import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Interactable from 'react-native-interactable';
import Gestures from 'react-native-easy-gestures';


export default class App extends React.Component {

    state = {
      editable : true
    }
  

    
 


  render() {
    return (
       
      <View style={styles.container}>
        
          <Gestures
            rotatable={this.state.editable}
            scalable={this.state.editable}
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
      
        <Button  title="editar" color="#faa" onPress={()=> {console.log(this.state.editable),this.setState({editable:false})}} ></Button>

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
