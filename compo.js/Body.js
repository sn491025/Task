import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Body() {

    const navigation = useNavigation(); 

    const [name, setName] = useState();
    return(
    <View>
        <TextInput 
        placeholder='Enter Your Name'
        style ={styles.inputext}
        onChangeText={setName}
        />
         <Button  title='Next'  onPress={ () => navigation.navigate("Page" , {
            username: name
         }) } />
    </View>
    )
}

const styles = StyleSheet.create({
    inputext: {
        borderWidth: 1,
        borderColor:'#FFFFFF',
        borderBottomColor:'#B4B7B7',
        padding: 10
    },
    forButton: {
        marginTop:20
    }
})