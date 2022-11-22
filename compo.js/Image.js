import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Image } from 'react-native';


export default function Image(){
    return(
        <View>
            <Image 
                style={styles.imagessss1}
                source={require('/Users/Chekhra/Task/Uicompo/assets/Avengers Endgame.jpeg')}
            />
            <Image 
            style={styles.imgesss2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imagessss1: {
        alignContent:'space-between',
        width: 40,
    },
    imgesss2: {
        alignContent:'space-between',
        width: 40,
    }
})