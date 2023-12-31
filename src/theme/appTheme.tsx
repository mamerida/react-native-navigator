import { StyleSheet } from "react-native";

export const colores = {
    primary:'#5856D6'
}

export const styles = StyleSheet.create({
    marginGlobal:{
        marginHorizontal:20
    },
    title:{
        fontSize: 30,
        marginBottom:10
    },
    botonGrande:{
        width:100,
        height:100,
        backgroundColor:"green",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:10,
        marginVertical:5
    },
    botonGrandeTexto:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },
    avatarContainer:{
        alignItems:'center',
        marginTop:10
    },
    menuContainer:{
        marginVertical:30,
        marginHorizontal:30,
    },
    menuOption:{
        marginVertical:20
    },
    menuTexto:{
        fontSize:25,
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100
    }
})