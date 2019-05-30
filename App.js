import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Container, Header, Left, Body, Right, Title, Thumbnail, Icon,Button} from 'native-base';
import {Router, Stack, Scene, Tabs, Actions} from 'react-native-router-flux';
// import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/Home/index'
import Result from './src/Result/index'
import History from "./src/History/History";
import Setting from "./src/Setting";
import User from "./src/User";
import Guide from "./src/Guide/Guide";
import Camera from "./src/Camera";

const home=() => (<Icon name="medkit" size={30} color="#fff" />)
const history=() => (<Icon name="refresh" size={30} color="#000" />)
const pulse=() => (<Icon name="pulse" size={30} color="#000" />)
const map=() => (<Icon name="map-marker" size={30} color="#000" />)
const user=() => (<Icon name="user" size={30} color="#000" />)
const settings=() => (<Icon name="settings" size={30} color="#000" />)

type Props = {};
export default class App extends Component<Props> {
    
    render() {
        return (
            <View style={styles.container}>
                <Router>
                    <Scene key="root">
                        <Scene hideNavBar key="tabbar" tabs>
                            <Scene icon={home} key="Measure" style={styles.color}>
                                <Scene hideNavBar key="Measure" component={Home} inittal/>
                            </Scene>
                            <Scene icon={history} hideNavBar key="History">
                                <Scene back component={History}/>
                            </Scene>
                            <Scene icon={pulse} hideNavBar key="Result">
                                <Scene back component={Result}/>
                            </Scene>
                            <Scene icon={settings} hideNavBar back key="Setting">
                                <Scene back component={Setting}/>
                            </Scene>
                        </Scene>
                        <Scene key="Camera" component={Camera} hideNavBar/>
                        <Scene key="Guide" component={Guide} hideNavBar/>
                    </Scene>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    color:{
        color:'#ff152f',
    }
});
