/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { View, SafeAreaView, Text, Button} from 'react-native';
import { StyleSheet } from 'react-native';
import { Linking } from 'react-native';

const App = () =>{
  return (
    <View style={styles.body}>
      <Text style = {styles.text}>
        This is some Text
        </Text>
        <Button  title='Click' onPress = {()=> {Linking.openURL('https://www.google.com')}}>
        </Button>
      </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    alignItems : 'center', 
    justifyContent: 'center' ,
    backgroundColor:'#0000ff',
   },
   text:{
      color:'#000000',
      fontSize:40,
      fontStyle:'italic'
   }
});
export default App;