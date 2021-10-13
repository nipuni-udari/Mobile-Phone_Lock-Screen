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
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Text style={styles.passCodeText}> Enter your PIN Code</Text>
            </View>
            <View style={styles.codeContainer}>
              {this.state.passcode.map(p => {
                let style = p != '' ? styles.code2 : styles.code1;
                return <View style={style} />;
              })}
            </View>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.numberContainer}>
              {numbers.map(num => {
                return (
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#6bcbc7"
                    style={styles.number}
                    key={num.id}
                    onPress={() => this._onPressNumber(num.id)}>
                    <Text style={styles.numText}> {num.id} </Text>
                  </TouchableHighlight>
                );
              })}
              <View style={styles.buttons}>
                <TouchableOpacity onPress={() => this._onPressCancel()}>
                  <Image source={require('../assets/images/delete.png')} />
                  <Text>delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      );
    }
  }
 
export default LockScreenPasscode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
 
});
