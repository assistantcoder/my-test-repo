import React from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
const ModList = ({title,thumbnail,logo,downloads})=>{
    return(
	<Pressable
	    onPress={()=>alert("hi")}
	    style={styles.modBox}>
	    <View style={styles.thumbView}>
		<Image
		    source={{uri: thumbnail}}
		    style={styles.thumbnail}
		/>
	    </View>
	    <View style={styles.infoBox}>
		<View style={styles.part}>
			<Text
			    style={styles.txt}
			>{title}</Text>
			<View style={styles.row}>
			    <Ionicons
				name="download-outline"
				size={23}
				color={"yellow"}
			    />
			    <Text
				style={styles.txt}>التنزيلات: {downloads} </Text>
			</View>
		</View>
		    <Image
			source={{uri: logo}}
			style={styles.logo}
		    />
	    </View>
	</Pressable>
    )
}
export default ModList

const styles = StyleSheet.create({
    modBox: {
	backgroundColor: "green",
	width: "90%",
	height: 250,
	borderRadius: 20,
    },
    thumbnail: {
	width: "100%",
	height: "100%",
	borderTopLeftRadius: 20,
	borderTopRightRadius: 20,
	resizeMode: "cover"
    },
    thumbView: {
	width: "100%",
	height: "71%",
	overflow: "hidden"
    },
    logo: {
	width: 50,
	height: 50,
	backgroundColor: "#fff",
	borderRadius: 4,
	marginHorizontal: 10
    },
    infoBox: {
	height: 64,
	width: "100%",
	justifyContent: "space-around",
	flexDirection: "row",
	marginBottom: 10,
	alignItems: "center",
    },
    part: {
	flex: 6,
	marginTop: 5,
	marginHorizontal: 5,
	alignItems: "flex-end",
	
    },
    txt: {
	color: "#fff",
	fontWeight: "bold",
	fontSize: 20,
	
    },
    row: {
	flexDirection: "row",
	direction: "rtl"
    },
})
