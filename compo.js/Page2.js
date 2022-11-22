import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ActivityIndicator, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function  Page2({route}){
    const {username} = route.params;

    const [name, setName] = useState();
    const navigation = useNavigation(); 
    return(
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Button')}>
        <View>
            <Text>Hi {username && username}, Welcome </Text>
            <ActivityIndicator />
            <ActivityIndicator size={'small'} color={'#FFF000'}/>
            <ActivityIndicator size={'large'} color={'#8B00FF '} />
            <ActivityIndicator size={'large'} color={'#8B00FF'} />
            <TextInput 
            placeholder='Enter here.....'
            onChangeText={setName}
            
            />
        </View>
            </TouchableWithoutFeedback>
    )
} 