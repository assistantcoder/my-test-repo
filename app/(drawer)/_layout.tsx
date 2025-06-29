import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

const Layout = ()=>{
    return(
	
	<GestureHandlerRootView style={{flex:1}}>
	    <Drawer
		screenOptions={{
		    drawerStyle: {
			backgroundColor: "#3E8E41"
		    },
		    drawerLabelStyle: {
			fontSize: 20
		    },
		    drawerActiveTintColor: "#fff",
		    drawerInactiveTintColor: "#964B00",
		    headerStyle: {
			backgroundColor: "green"
		    },
		    headerTintColor: "#fff"
		}}
	    >
	<Drawer.Screen
	name="index"
	options={{
	    drawerLabel: "Home page",
	    title: "Home",
	    headerShown: false,
	    drawerIcon: ({size,color}) => (
		<Ionicons
		    name="home"
		    size={size}
		    color={color}
		/>
	    )
	}}
	/>
	<Drawer.Screen
	name="info"
	options={{
	    drawerLabel: "Info",
	    title: "Info",
	    drawerIcon: ({size,color}) => (
		<Ionicons
		    name="help-circle"
		    size={size}
		    color={color}
		/>
	    )
	}}
	/>
	    </Drawer>
	</GestureHandlerRootView>
    )
}
export default Layout
