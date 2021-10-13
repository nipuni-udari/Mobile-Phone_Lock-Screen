import React, {Component} from 'react';
import {
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TouchableHighlight,
  Image,
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

class LockScreenPasscode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: ['', '', '', ''],
    };
  }
  _popUpMsg = () => {
    let text = this.state.passcode.toString('1', '2', '3', '4');
    if ((text == '1', '2', '3', '4')) {
      Alert.alert('Success!..', ' App will redirect you to the home now!', [
        {text: 'ok.'},
      ]);
    } else {
      for (var i = 1; i <= 3; i++) {
        if ((text != '1', '2', '3', '4')) {
          Alert.alert('Retry!..', ' Please enter your PIN Again!', [
            {text: 'ok.'},
          ]);
        }
      }
    }
  };

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
  };

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
            <Text style={styles.Text}> Enter your PIN Code</Text>
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
                  style={styles.number}
                  key={num.id}
                  underlayColor="#6ec8c9"
                  onPress={() => this._onPressNumber(num.id)}>
                  <Text style={styles.numText}> {num.id} </Text>
                </TouchableHighlight>
              );
            })}
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => this._onPressCancel()}>
                <Image source={require('../assets/images/delete.png')} />
              </TouchableOpacity>
              <TouchableHighlight
                style={styles.number}
                onPress={() => this._popUpMsg()}>
                <Text style={styles.buttons}>OK</Text>
              </TouchableHighlight>
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
  Text: {
    marginTop: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 25,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
  },
  codeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 145,
    flexDirection: 'row',
    marginBottom: -150,
  },
  code1: {
    margin: 8,
    width: 10,
    height: 12,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#1bddf2',
    backgroundColor: '#1bddf2',
  },

  code2: {
    margin: 8,
    width: 12,
    height: 14,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#0ba39c',
    backgroundColor: '#0ba39c',
  },
  number: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
    margin: 8,
    borderRadius: 75,
    backgroundColor: '#f0f3fa',
  },
  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0a191a',
    marginTop: 58,
    width: 282,
    height: 348,
  },
  numText: {
    color: '#92969f',
    textAlign: 'center',
    fontFamily: 'Roboto-Light',
    fontSize: 38,
  },

  buttons: {
    alignItems: 'center',
    marginRight: -65,
  },
});
