import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
    },
    title: {
        color: '#fff',
        // textAlign:'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    Header: {
        backgroundColor: '#a80905',
        width: '100%'
    },
    buttonleft: {
        // backgroundColor:'#fff',
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
    flexText:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textHeader: {
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
    boderView:{
        // borderWidth:5,
        // bordercolor:'#000',
    },
    Body: {
        flex: 7,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor:'#fff'

    },
    bodyHeading: {
        flex: 3,
        width: '100%',
        height:50,
        borderBottomWidth: 0.2,
    },
    bodyheadingText:{
        padding:2,
        marginLeft:-6,
        // textAlign:'center',
    },
    bodyText:{
        padding:5,
        marginLeft:5,
        // textAlign:'center',
    },
    flexIcon:{
        flexDirection:'row',
        justifyContent:'space-around',
        // alignItems:'center',
        padding:5,
        marginTop:10,
    },
    bodyContent: {
        flex: 3,
        marginTop:1,
        flexDirection: 'column',
        width: '100%',
        borderBottomWidth: 0.2,

    },
    flexTouch:{
        alignItems:'center',
        justifyContent:'space-between',
    },
    imgbodyHeading: {
        width: 50,
        height: 50,
        borderRadius:24,

    },
    bodyFooter: {
        flex: 4,
        width: '100%',
        padding:5,
    },
    styleIcon: {
        width: 30,
        height: 30,
    },
    iconFooter:{
        marginLeft:10,
        flexDirection:'row',
    },
});