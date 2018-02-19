import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Interactable from 'react-native-interactable';

import  GestureView  from './components/gestureView';


export default class App extends React.Component {

    state = {
      index:0,
      myArr: [],
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

    

    _onPressOut() {
      let temp = this.state.index ++;
      console.log("pae")
      this.state.myArr.push(temp)
      this.setState({
          myArr: this.state.myArr
      })
    }
    

  render() {

    let Arr = this.state.myArr.map((a, i) => {
      return (<GestureView key={i} editable={this.state.editable} data={this.state.styles}></GestureView>)
    }) 

    return (
            
    <View style={styles.container}>    
      
      {Arr}

        <Button  
          title="editar" 
          color="#faa" 
          onPress={()=> 
            { this._onPressOut(),
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
