import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Image} from 'react-native';
import styles from "./HistoryStyle";
import {BarChart} from 'react-native-chart-kit'
import {Body, Header, Left, Right, Title} from "native-base";
const  {height: HEIGHT} = Dimensions.get('window')
class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'},
                {time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'},
                {time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'},
                {time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'},
                {time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'},
                {time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'},
                {time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'},
                {time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'},
                {time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'},
                {time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'},
                {time:'10/3/2019, 2:10 PM', status:'binh thuong', measure:'079'}]

        }
    };
    render() {
        return (
            <View style={{height:HEIGHT, width:'100%'}}>
                <Header style={styles.Header}>
                    <Left>
                    </Left>
                    <Body>
                    <Title style={styles.title}>History</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <View style={styles.wrapperChart}>

                    <BarChart
                        data={{
                            datasets: [{
                                data: [ 72,85,65, 100, 82, 0 ]
                            }]
                        }}
                        width={Dimensions.get('window').width} // from react-native
                        height={160}
                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(238 , 99 ,99, ${opacity})`,
                            style: {
                                borderRadius: 2
                            }
                        }}
                    />

                    <Text style={{textAlign:'center',justifyContent:'center'}}>
                        LAST 5 MEASUREMENTS
                    </Text>
                </View>
                <View style={{height:Dimensions.get('window').height-330,backgroundColor:'#ECECEC'}}>
                    <View style={{height:35, backgroundColor:'#fff', flexDirection:'row', alignItems:'center',marginTop:5}}>
                        <Text style={{flex:9}}>Thang 3/2019</Text>
                        <Text style={{flex:1.5}}>Avg 79</Text>
                    </View>
                    <FlatList
                        style={{marginTop:5}}
                        data={this.state.data}
                        renderItem={this._renderItem}
                        keyExtractor = { (item,index) => index.toString()}
                        />
                </View>


            </View>
        );
    }
    _renderItem=({item})=>(
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor:'white', marginBottom:2}}>
               <Image source={require('../Image/heartmonitor.png')} width={20} height={20} style={{flex:1}}/>
            <View style={{flex:5}}>
                <Text style={{color: '#00B2BF'}}>{item.status}</Text>
                <Text>{item.time}</Text>
            </View>
            <Text style={{flex:1, fontSize:20}}>{item.measure}</Text>
        </View>
    )
}
export default History;