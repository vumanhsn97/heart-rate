import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Container, Header, Left, Body, Right, Title, Thumbnail, Icon, Button} from 'native-base';
import {Router, Stack, Scene, Tabs, Actions} from 'react-native-router-flux';


import styles from './styles';

type Props = {};
export default class Setting extends Component {
    render() {
        this.state = {text: ''};
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const ava="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png";

        return (
            <View style={styles.container}>
                <Header style={styles.Header}>
                    <Left>
                    </Left>
                    <Body>
                    <Title style={styles.title}>Settings</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <View style={styles.Body}>
                    {/*<TouchableOpacity style={styles.bodyHeading} onPress={()=> Actions.User()}>*/}
                        {/*<View style={styles.touchbodyHeading}>*/}
                            {/*<Image style={styles.imgbodyHeading} source={{uri: ava}}></Image>*/}
                        {/*</View>*/}
                        {/*<View style={styles.textbodyHeading}>*/}
                            {/*<Text style={{color:'#ff2b1a'}}>Hoài Thương</Text>*/}
                            {/*<Text>2 Measurements</Text>*/}
                            {/*<Text>72 BPM Average HR</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}

                    <View style={styles.bodyContent}>
                        <TouchableOpacity style={styles.mailheadContent}>
                            {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                            <Icon name="alarm"></Icon>
                            <Text style={styles.textInfo}>Remind Me</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mailheadContent}>
                            {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                            <Icon name="key"></Icon>
                            <Text style={styles.textInfo}>Privacy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mailheadContent}>
                            {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                            <Icon name="notifications"></Icon>
                            <Text style={styles.textInfo}>Notifications</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bodyContent}>
                        <TouchableOpacity style={styles.mailheadContent} onPress={()=>Actions.Guide()}>
                            {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                            <Icon name="help-circle"></Icon>
                            <Text style={styles.textInfo}>How does it work?</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bodyContent}>
                        <TouchableOpacity style={styles.mailheadContent}>
                            {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                            <Icon name="cog"></Icon>
                            <Text style={styles.textInfo}>Runtastic</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mailheadContent}>
                            {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                            <Icon name="unlock"></Icon>
                            <Text style={styles.textInfo}>Terms & Conditions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mailheadContent}>
                            {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                            <Icon name="apps"></Icon>
                            <Text style={styles.textInfo}>More Apps</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyContent}>
                        <TouchableOpacity style={styles.mailheadContent}>
                            {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                            <Icon name="heart"></Icon>
                            <Text style={styles.textInfo}>App Heath</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mailheadContent}>
                            {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                            <Icon name="warning"></Icon>
                            {/*<Icon name="information"></Icon>*/}
                            <Text style={styles.textInfo}>About</Text>
                        </TouchableOpacity>
                    </View>
                    {/*<View style={styles.bodyContent}>*/}
                        {/*<TouchableOpacity style={styles.mailheadContent}>*/}
                            {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                            {/*<Text style={styles.textInfo}>Sign out</Text>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                </View>

            </View>
        );
    }
}

