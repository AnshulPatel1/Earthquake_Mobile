
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Btn from 'react-native-micro-animated-button';

class ButtonToFetch extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onPress();
  }

  render() { 
    return (  
    //   <TouchableOpacity onPress={this.handleClick}>
    //   <View style={styles.button}>
    //     <Text style={{fontSize: 40}}>{this.props.children}</Text>
    //   </View>
    // </TouchableOpacity>
    <Btn
      foregroundColor='#42e5f4'
      label="Fetch Earthquakes ..."
      labelStyle={{fontSize: 30, fontFamily: "Odelette", paddingTop: 17}}
      onPress={() => {
          this.b1.success()
          // this.handleClick()
        }
      }
      ref={ref => (this.b1 = ref)}
      successIcon="check"
      bounce={true}
      style={{height: 60}}
      onSuccess={() => this.b1.reset()}
      iconSize={30}
      expandOnFinish={true}
    />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#42e5f4",
    borderRadius: 5,
    padding: 5,
    borderColor: "black",
    borderWidth: 1
  }
});
 
export default ButtonToFetch;

