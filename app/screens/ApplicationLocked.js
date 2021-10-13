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