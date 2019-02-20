/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ButtonToFetch from './assets/ButtonToFetch';

let API_URL = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson"; 
let startTime = "2018-11-12";
let desiredDate = new Date(); 
let endTime = desiredDate.toISOString(); 
endTime = endTime.substring(0,10); 
var toReturn = [];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earthquakes: []
    }
    this.handleFetchRequest = this.handleFetchRequest.bind(this);
  }

  componentWillMount() {
    let URL_TO_FETCH = `${API_URL}&starttime=${startTime}&endtime=${endTime}&minmagnitude=5&limit=10&orderby=magnitude`;
    fetch(URL_TO_FETCH)
      .then(response => response.json())
      .then(data => {
        this.setState({ earthquakes: data.features });
        console.log(this.state.earthquakes[0]);
      });
  }
  handleFetchRequest(e) {
    alert("clicked!");
  }
  render() {
    return (
      <View style={styles.container}>
        <ButtonToFetch onPress={this.handleFetchRequest}>Earthquakes</ButtonToFetch>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
