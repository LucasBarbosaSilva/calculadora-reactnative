import React from 'react';
import {Text, View} from 'react-native';

import styles from '../styles/title';

const Title = (props) => {
  return (
    <View style={ styles.title }>
      <Text style={ styles.text } > {props.text} </Text>
    </View>
  );
}

export default Title;

