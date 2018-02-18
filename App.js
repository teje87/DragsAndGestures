import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Interactable from 'react-native-interactable';

import  GestureView  from './components/gestureView';


export default class App extends React.Component {

    state = {
      editable : true,
      styles: {
        left: 0,
        top: 0,
        transform: [
          { rotate: '0deg' },
          { scale: 1 },
        ],
      }
    }
    

  render() {
    return (
            
    <View style={styles.container}>    
      
      
    <GestureView editable={this.state.editable} data={this.state.styles}></GestureView>


        <Button  
          title="editar" 
          color="#faa" 
          onPress={()=> 
            {console.log(this.state.styles),
              console.log(this.state.editable),
              this.setState(prevState => ({
                editable: !prevState.editable
              }))
            }
          }>
        </Button>

      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
