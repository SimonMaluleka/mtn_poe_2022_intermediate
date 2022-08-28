import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity,} from 'react-native';
import { Login, Home, NoteDetail }  from './components/screens/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  var [gridView, setGridView] = useState("false");

  
  return (
  
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home}  options={{title:"Noted!", gestureEnabled: false, 
          headerStyle: {
            backgroundColor: "#6699CC"
          },
          headerBackVisible: false,
          headerTintColor: "#fff",        
          headerLeft: ()=> {
            return (
              <TouchableOpacity style={{ paddingRight: 8 }}>
                <Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()}/>
              </TouchableOpacity>  
            )          
          },
          headerRight: () => {
    return (
        <>
        <TouchableOpacity style={{ paddingRight: 8 }}> 
         <Icon name={gridView ? "grid" : "grid-off"} size={24} color="white" onPress={() => {
              setGridView(!gridView);
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingRight: 8 }}>
          <Icon name="plus" size={24} color="white"
            onPress={() => {
              
            }}
          />
        </TouchableOpacity>
        </>
    );
  },
          }}/>
        <Stack.Screen name="NoteDetail" component={NoteDetail} options={{title:"Note Detail", headerStyle: {
            backgroundColor: "#6699CC"
          },
          headerTintColor: "#fff"
          }}  />      
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
