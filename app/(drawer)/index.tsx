import React, { useState, useEffect } from "react"
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ModList from "../component/modList"
import Header from "../component/header"
const App = () =>{
    const [data,setData] = useState(null)
    const navigation = useNavigation()
    const router = useRouter()
    useEffect(()=>{
	async function getData(){
	    const res = await fetch("http://localhost:5000/getData",{
		method: "post",
		headers:{
		    "content-type": "application/json"
		},
		body: JSON.stringify({
		    dataSelect: 1
		})
	    })
	    const data = await res.json()
	    setData(data)
	}
	getData()
    },[])
    return(
	<SafeAreaView style={styles.con}>
	    <Header>
		<TouchableOpacity
		    style={styles.headerButton}
		    onPress={() => navigation.openDrawer()}
		>
		    <Ionicons name="menu" color="#fff" size={25}/>
		</TouchableOpacity>
		<TouchableOpacity
		    style={styles.searchBar}
		    onPress={() => router.push("../screens/search")}
		>
		    <Text style={styles.searchBarTxt}>search ...</Text>
		    <Ionicons
			name="search"
			color="#fff"
			size={20}
		    />
		</TouchableOpacity>
	    </Header>
	    <View style={styles.section}>
		{!data ? <ActivityIndicator size={"large"} color={"green"}/> : <></>}
	<FlatList
	style={styles.list}
	data={data}
	keyExtractor={(item) => item.id.toString()}
	renderItem={({item}) => (
	    <View style={styles.listCon}>
	    <ModList
		title={item.title}
		thumbnail={item.thumbnail}
		      logo={item.logo}
		downloads={item.downloads}
	    />
	    </View>
	)}
			    
		/>
	    </View>
	</SafeAreaView>
    )
}

export default App;


const styles = StyleSheet.create({
    con: {
	flex: 1,
	backgroundColor: "greenyellow",
    },
    headerButton: {
	marginHorizontal: 8
    },
    searchBar: {
	backgroundColor: "#2e865f",
	width: "70%",
	borderRadius: "10%",
	height: "60%",
	marginHorizontal: 20,
	flexDirection: "row",
	alignItems: "center",
    },
    searchBarTxt: {
	color: "#fff",
	fontSize: 20,
	marginRight: 132,
	marginLeft: 20
    },
    section: {
	flex: 1,
	alignItems: "center",
	marginTop: -2
    },
    list: {
	width: "100%"
    },
    listCon: {
	width: "100%",
	alignItems: "center",
	marginVertical: 5
    }
})
