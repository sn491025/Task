import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';


export default function  Page2(){
    return(
        <View>
            <Text>ActivityIndicator</Text>
            <ActivityIndicator />
            <ActivityIndicator size={'small'} color={'#FFF000'}/>
            <ActivityIndicator size={'large'} color={'#8B00FF '} />
        </View>
    )
} 