import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Button } from 'react-native';
import Headers  from './compo.js/Headers';
import Body  from './compo.js/Body';





export default function App({navigation}) {
  
  
  const onPress = () => {
    navigation.push('Page2')
  }



  return (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View>
      {/* Header */}
      <Headers />
      <View style={styles.center}>
        {/* Body */}
        <Body />
      </View>   
        <Button  title='Next'  onPress={onPress} />

        <ActivityIndicator size={'large'} color={'#8B00FF'} />
    </View>
   </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    margin: 50,
   alignItems:'center',
  }
});
