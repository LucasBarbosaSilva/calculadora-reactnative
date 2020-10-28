import React from 'react';
import {View, Button} from 'react-native';

import styles from '../styles/key';

const Key = (props) => {
  return (
    <View style={ styles.button } >
      <Button
        
        onPress={props.onPress }
        title={props.title}
        color= {props.color ? props.color : "green"}
      />
    </View>
  );
}

export default Key;