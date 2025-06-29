import React from "react"
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import Header from "../component/header"
const Search = ()=>{
    const router = useRouter()
    return(
	<SafeAreaView style={styles.con}>
	    <Header>
		<TouchableOpacity
		    onPress={()=> router.back()}
		>
		    <Ionicons
			name="chevron-back"
			size={28}
			color={"#fff"}
		    />
		</TouchableOpacity>
	    </Header>
	    <View  style={styles.section}>
		
	    </View>
	</SafeAreaView>
   )
}

export default Search



const styles = StyleSheet.create({
    con: {
	flex: 1,
    },
    section: {
	flex: 1,
	justifyContent: "center",
	alignItems: "center"
    }
})
