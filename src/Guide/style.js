import {
    StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
    mainContent: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#22bcb5',
        // height:'100%',
    },
    image: {
        flex: 3,
        width:'90%',
        alignItems: 'center',
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        flex:2,
        padding:30,
        fontSize:15,
    },
    title: {
        padding:40,
        fontSize: 22,
        color: 'white',
        marginTop:20,
        textAlign:'center',
        fontWeight: 'bold',
    },
});
export default styles;