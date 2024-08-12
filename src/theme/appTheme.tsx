import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        paddingHorizontal: 45,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    },
    titleHeaderBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 40,
    },
    textBody: {
        fontSize: 15,
        paddingHorizontal: 40,
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInput: {
        marginTop:80,
        gap: 20
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword:{
        position:'absolute',
        right:20,
        zIndex:1, 
        marginTop:10
    },
    textRedirection:{
        marginTop:30,
        fontSize:16,
        color:PRIMARY_COLOR,
        fontWeight:'bold',
        textAlign:'center'
    },
    imagen:{
        width: 80, 
        height: 80, 
        alignSelf: 'center',
        marginVertical: 20
    },
    Title:{
    fontSize: 34,             
    fontWeight: 'bold',       
    color: 'white',         
    textAlign: 'center',
    },
  container: {
    backgroundColor:'#061c4f',
    flex: 1,
    justifyContent: 'center',
    padding:50,
  },
  Container2: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
  },
  Text: {
    marginBottom: 8,
    fontSize: 24,
    color:'white' 
  },
});
