import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Button,
  TouchableHighlight,
  Image,
} from 'react-native';

class ApplicationLocked extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 60,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({seconds: this.state.seconds - 1});
    }, 1000);
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.Text}> Maximum attempts reached </Text>
        </View>
        <View>
          <Text style={styles.Text2}>Time:{this.state.seconds}</Text>
        </View>
        <View style={styles.screenIcon}>
          <Image
            source={require('../assets/images/Lock.jpeg')}
            style={{width: 60, height: 70, borderRadius: 40}}
          />
        </View>
        <View>
          <Text style={styles.Text1}>To protect your information,access</Text>
          <Text style={styles.Text1}> has been locked for 5 minites.</Text>
          <Text style={styles.Text1}>Come back later and try again. </Text>
        </View>
        <View style={styles.screenContainer}>
          <Button title="Quit" color="#80e9d8" />
        </View>
      </View>
    );
  }
}

export default ApplicationLocked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text: {
    fontSize: 20,
    color: '#a6d8e8',
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Roboto',
  },
  Text2: {
    fontSize: 20,
    color: '#313334',
    textAlign: 'center',
    marginTop: 80,
    fontFamily: 'Roboto',
    padding: 8,
    color: 'red',
  },

  Text1: {
    fontSize: 15,
    color: '#313334',
    textAlign: 'center',
    fontFamily: 'Roboto',
    top: 230,
  },
  screenContainer: {
    padding: 160,
    marginTop: 120,
  },
  screenIcon: {
    alignItems: 'center',
    top: 115,
  },
});
