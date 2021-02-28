import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import {Image,Text} from "react-native";
import SignUp from '../Screens/SignUP/SignUp';
import LogIn from "../Screens/LogIn/LogIn"
import StudentSignUp from "../Screens/SignUP/StudentSignUp"
import CompanySignUp from "../Screens/SignUP/CompanySignUp"
import Home from '../Screens/Home';
import Admin from "../Screens/Admin.js/Admin";
import Student from "../Screens/Student.js/Student"
import Company from "../Screens/Company.js/Company"
import PostJobs from "../Screens/Company.js/PostJobs"
import StudentDetails from "../Screens/Student.js/StudentDetails"
import PostShow from '../Screens/Student.js/PostShow'

// import {DrawerContent} from '../Configuration/DrawerContent'
// import {Navigation} from "react-native-navigation";


const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();


// function AppDrawer() {
//   return (
//       <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
//         <Drawer.Screen name="Home" component={Home} />
//       </Drawer.Navigator>
//   );
// }

function AppNavigation() {
    // render(){
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' >
                {/* <Stack.Screen  options={{title:'',headerStyle:{backgroundColor:"white"},headerTitle:props => <Image source={require('../Assets/logo.png')} style={{width:60,height:100,resizeMode:'contain'}}/>}} name="Home" component={Home} /> */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="StudentSignUp" component={StudentSignUp} />
                <Stack.Screen name="CompanySignUp" component={CompanySignUp} />
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="Admin" component={Admin} />
                <Stack.Screen name="Student" component={Student} />
                <Stack.Screen name="Company" component={Company} />
                <Stack.Screen name="PostShow" component={PostShow} />
                <Stack.Screen name="PostJobs" component={PostJobs} /> 
                <Stack.Screen name="StudentDetails" component={StudentDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    
}

export default AppNavigation;