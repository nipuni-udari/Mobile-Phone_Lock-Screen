import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
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
  passCodeText: {
    marginTop: 80,
    fontFamily: 'Roboto-Regular',
    fontSize: 25,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
  },
  codeContainer: {
    marginTop: 150,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  code1: {
    width: 9,
    height: 9,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#6bcbc7',
    margin: 8,
    backgroundColor: '#6bcbc7',
  },

  code2: {
    width: 12,
    height: 12,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#75b8b7',
    margin: 8,
    backgroundColor: '#75b8b7',
  },
  number: {
    margin: 9,
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: '#f0f3fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 282,
    height: 348,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6cc9c7',
  },
  numText: {
    fontFamily: 'Roboto-Light',
    fontSize: 36,
    color: '#969eab',
    letterSpacing: 0,
    textAlign: 'center',
  },

  buttons: {
    alignItems: 'center',
    marginRight: -40,
  },
});
