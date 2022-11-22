import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Buttons({route}) {
    const {username} = route.params;
    const navigation = useNavigation(); 

    return(
    <View>
        <Button color={'#3AFF00'} title='Next' accessibilityLabel='Next' accessibilityActions='sasadad'/>
        <Button color={'#FFD100'} disabled={true} title='Next' onPress={() => navigation.navigate('Flatlist')}/>
        <Text>Hi im Hello</Text>

    </View>
    )
}