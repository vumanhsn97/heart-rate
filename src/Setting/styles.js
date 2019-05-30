import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
    },
    title: {
        color: '#fff',
        // textAlign:'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    Header: {
        backgroundColor: '#a80905',
        width: '100%',
    },

    buttonView: {
        backgroundColor: '#a80905',

    },
    Headers: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',

    },
    textHeader: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3889c9'
    },
    Body:{
        flex: 7,
        backgroundColor: '#ededed',
        width:'100%',
    },
    bodyHeading: {
        height: 100,
        width: '100%',
        padding:10,
        backgroundColor:'#fff',
        flexDirection:'row',
    },
    textbodyHeading:{
        padding:15,
        width:'70%',
    },
    touchbodyHeading: {
        height: "100%",
        width: '30%',
        alignItems:'center',
    },
    imgbodyHeading: {
        width: 90,
        height: '100%',
        borderRadius: 40,
        borderWidth: 1

    },
    bodyContent:{
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
        marginTop: 15,
    },
    mailheadContent:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    imgbodyContent:{
        width:20,
        height:20,
    },
    textInfo:{
        marginLeft:20,
    },
    Footer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },

});