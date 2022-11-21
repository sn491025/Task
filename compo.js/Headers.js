import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';


export default function Headers() {
    return(
        <View>
            <Text style={styles.head}>
                Task
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    head:{
        fontSize: 50,
        padding: 40,
        backgroundColor: '#00FCA4',
        color:'#ffffff'
    }
})

