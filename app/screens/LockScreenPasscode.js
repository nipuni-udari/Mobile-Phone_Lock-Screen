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