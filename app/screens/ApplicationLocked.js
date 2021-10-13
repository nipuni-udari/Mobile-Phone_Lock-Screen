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
