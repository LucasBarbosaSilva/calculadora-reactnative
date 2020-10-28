import React from 'react';
import {Text, View} from 'react-native';

import styles from '../styles/display';

const Display = (props) => {
	return ( 
		<View style={ styles.display }>
	      	<Text style={ styles.text } > { props.valor } </Text>
	    </View>
	);
}

export default Display;
