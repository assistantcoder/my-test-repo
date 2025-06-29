import React from "react"
import {
    View,
    StyleSheet
} from "react-native"
const Header = ({children}) =>{
    return (
	<View style={styles.header}>
	    {children}
	</View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
	width: "100%",
	height: "10%",
	backgroundColor: "green",
	borderBottomLeftRadius: "15%",
	borderBottomRightRadius: "15%",
	flexDirection: "row",
	alignItems: "center"
    }
})
