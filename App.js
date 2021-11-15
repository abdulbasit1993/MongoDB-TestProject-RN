import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MongoDBTest from './src/Screens/MongoDBTest';
import AddStudent from './src/Screens/AddStudent';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MongoDBTest"
          component={MongoDBTest}
          options={{headerTitle: 'MongoDB Test'}}
        />
        <Stack.Screen
          name="AddStudent"
          component={AddStudent}
          options={{headerTitle: 'Add Student Data'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
