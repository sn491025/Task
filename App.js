import React from 'react';
  
import Main from './compo.js/Main';
import Page2 from './compo.js/Page2';
import Buttons from './compo.js/Button';
import Flatlist from './compo.js/Flatlist';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';






export default function App({navigation}) { 
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Main" component={Main} options={{title:'MainPage'}}/>
        <stack.Screen name="Page" component={Page2} options={{
          title:'secondpage',
          headerStyle:{backgroundColor: '#FF1F00'}
          }}/>
         <stack.Screen name='Button' component={Buttons} options={{
          title: 'ButtonPage',
          headerStyle: {backgroundColor:'#FF9B00'}
          }} />
         <stack.Screen name='Flatlist' component={Flatlist} options={{
          title: 'FlatList Page',
          headerStyle: {backgroundColor:'#D8FF00'}
          }} />
      </stack.Navigator>
    </NavigationContainer>

  )
}


