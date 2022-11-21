import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, Button } from 'react-native';


export default function Body({ navigation }) {

   

    return(
    <View>
        <TextInput 
        placeholder='Enter Your Name'
        style ={styles.inputext}
        />
        <View style={styles.forButton}>
        <Button title='Next'/>
        </View>
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