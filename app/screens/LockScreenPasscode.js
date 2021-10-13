import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  Alert,
  TouchableHighlight,
} from 'react-native';

class LockScreenPasscode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: ['', '', '', ''],
    };
  }

  _onPressNumber = num => {
    let tempCode = this.state.passcode;
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == '') {
        tempCode[i] = num - -1;
        break;
      } else {
        continue;
      }
    }
    this.setState({passcode: tempCode});

    _onPressCancel = () => {
      let tempCode = this.state.passcode;
      for (var i = tempCode.length - 1; i >= 0; i--) {
        if (tempCode[i] != '') {
          tempCode[i] = '';
          break;
        } else {
          continue;
        }
      }
      this.setState({passcode: tempCode});
    };

    render() {
      let numbers = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 0},
      ];
 
export default LockScreenPasscode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
 
});
