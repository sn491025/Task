import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Button } from 'react-native';
import Headers from './Headers';
import Body from './Body';


export default function Main() {



    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
                {/* Header */}
                <Headers />
                <View>
                    {/* Body */}
                    <Body />
                </View>
            </View>

        </TouchableWithoutFeedback>


    )



}