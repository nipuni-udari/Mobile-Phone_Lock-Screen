import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class ApplicationLocked extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            marginTop: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.Text}> Maximum attempts reached</Text>
          </View>
          <View style={styles.image}>
            <Image source={require('../assets/images/Lock.jpeg')} />
          </View>
          <View>
            <Text style={styles.Text2}>
              To protect your information, access has been locked for 5 minutes.
              Come back later and try again.
            </Text>
          </View>
          <TouchableOpacity onPress={() => this}>
            <View style={styles.Text3View}>
              <Text style={styles.Text3}> Quit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Text: {
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
  },

  image: {
    width: 32,
    height: 35,
    marginTop: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text2: {
    marginTop: 100,
    fontFamily: 'Roboto-Black',
    fontSize: 20,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
    justifyContent: 'flex-end',
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
  },
  Text3View: {
    backgroundColor: '#a6dde0',
    width: 100,
    height: 60,
    marginTop: 100,
    alignContent: 'center',
    justifyContent: 'center',
  },

  Text3: {
    fontFamily: 'Roboto-Black',
    fontSize: 22,
    marginLeft: 20,
  },
});
