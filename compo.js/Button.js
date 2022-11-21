import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Button } from 'react-native';


export default function Buttons() {
    return(
    <View>
        <Button color={'#3AFF00'} title='Next' accessibilityLabel='Next' accessibilityActions='sasadad'/>
        <Button color={'#FFD100'} disabled={true} title='Next'/>
    </View>
    )
}