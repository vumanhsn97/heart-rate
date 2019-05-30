import React, {Component} from 'react';
import {TouchableOpacity, Platform, StyleSheet, Text, View,Image} from 'react-native';
import {Button, Header, Left, Body, Right, Title, Thumbnail, Text as NativeBaseText} from 'native-base';

import { ProgressCircle } from 'react-native-svg-charts'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Easing from "react-native";

import styles from './styles';
import { Actions } from 'react-native-router-flux';

type Props = {};
export default class Home extends Component {
    constructor() {
        super();
        this.circularProgressRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit() {
        this.circularProgressRef.animate(100, 300, Easing.quad);
    }
    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const uri1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"

        return (
            <View style={styles.container}>
                <Header style={styles.Header}>
                    <Left/>
                    <Body>
                    <Title style={styles.title}>Measure</Title>
                    </Body>
                    <Right/>
                </Header>
                <View style={styles.Headers}>
                    <Text style={styles.textHeader}>
                        Lightly place finger on camera lens and flash
                    </Text>
                </View>
                <View style={styles.Body}>
                    <View style={styles.imgBody}>
                        <AnimatedCircularProgress
                            size={300}
                            // ref='circularProgress'
                            width={10}
                            style={{justifyContent:'center',alignItems:'center',padding:5}}
                            fill={70}
                            rotation={0}
                            tintColor="#FF0A16"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#000">
                            {
                                (fill=(50-100)) => (
                                    <View style={styles.progessView}>
                                        <View style={styles.flexText}>
                                            <View style={styles.styleViewHeader}>
                                                <Text style={styles.textHeader1}>
                                                    065
                                                </Text>
                                            </View>
                                            <View style={styles.styleViewHeader}>
                                                <Image style={styles.styleIcon} source={{uri: uri1}}></Image>
                                                <Text style={styles.textHeaderstyle}>
                                                    BPM
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Button
                                                style={{backgroundColor: '#a80905'}}
                                                onPress={() => Actions.Camera()}>
                                                <NativeBaseText>MEASURE NOW</NativeBaseText>
                                            </Button>
                                        </View>
                                    </View>
                                )
                            }
                        </AnimatedCircularProgress>
                    </View>
                </View>
                <View style={styles.Footer}>
                    <View style={styles.imgFooter}>
                        <Image source={require('../Image/chart1.png')} style={styles.chartimgFooter}/>
                    </View>
                </View>

            </View>
        );
    }
}

