import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // width:'100%'
    },
    title:{
        color:'#fff',
        // textAlign:'center',
        fontSize:25,
        fontWeight: 'bold',
    },
    Header:{
      backgroundColor:'#a80905',
        width: '100%'
    },
    Headers:{
        flex:1.5,
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        padding:10,
        backgroundColor:'#fff',
    },
    textHeader:{
        textAlign:'center',
        fontSize:20,
        // fontWeight: 'bold',
        color: '#3889c9'
    },
    Body:{
        flex:5.5,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },
    imgBody:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
    },
    chartImage:{
        height:400,
        width:375,
    },
    Footer:{
        flex:3,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
    },
    imgFooter:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
    },
    chartimgFooter:{
        height:190,
        width:'100%',
    },


    flexText:{
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#6cffdd',
    },
    textHeader1: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#3889c9',
    },
    textHeaderBPM: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#dddddd',
    },
    textHeaderstyle:{
        fontSize:13,
        textAlign:'center',
        color:'#000',
    },
    styleViewHeader:{
        flexDirection:'column',
        justifyContent:'center',
    },
    styleIcon: {
        width: 30,
        height: 30,
    },
    progessView:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingLeft:80,
        // backgroundColor: '#ffcb8b',
    },
});