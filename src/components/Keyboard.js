import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';

import styles from '../styles/keyboard';
import Key from './Key';

const Numeros = [
  {
    id: 10,
	title: 'cc',
  },
  {
    id: 11,
	title: '√',
  },
  {
    id: 12,
	title: '%',
  },
  {
    id: 13,
	title: '÷',
  },  
  {
    id: 7,
	title: '7',
	color: '#143414'
  },
  {
    id: 8,
	title: '8',
	color: '#143414'
  },
  {
    id: 9,
	title: '9',
	color: '#143414'
  },
  {
    id: 14,
	title: 'X',
  },
  {
    id: 4,
	title: '4',
	color: '#143414'
  },
  {
    id: 5,
	title: '5',
	color: '#143414'
  },
  {
    id: 6,
	title: '6',
	color: '#143414'
  },
  {
    id: 15,
	title: '-',
  },
  {
    id: 1,
	title: '1',
	color: '#143414'
  },
  {
    id: 2,
	title: '2',
	color: '#143414'
  },
  {
    id: 3,
	title: '3',
	color: '#143414'
  }, 
  {
    id: 16,
	title: '+',
  }, 
  {
    id: 0,
	title: '0',
	color: '#143414'
  }, 
  {
	id: 17,
	title: '=',
  }
  
];


 
class Keyboard extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

  
	render() {
		return (
			<SafeAreaView style={styles.container}>
        <FlatList
          data={Numeros}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <Key
                onPress = { () => { this.props.onPress(item.id) } }
                title = {item.title}
                color = {item.color}
                style={styles.line}
              />
            );
          }}
          numColumns={4}
          
        />
     </SafeAreaView>
    
		);
	}
}



export default Keyboard;