import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Container, Header, Left, Body, Right, Title, Thumbnail, Icon, Button,DatePicker} from 'native-base';

import {Router, Stack, Scene, Tabs, Actions} from 'react-native-router-flux';


import styles from './styles';

const user=() => (<Icon name="user" size={30} color="#000" />)


type Props = {};
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    render() {
        this.state = {text: ''};
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const ava="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png";
        return (
            <View style={styles.container}>
                <Header style={styles.Header}>
                    <Left>
                        <Button style={styles.buttonView} >
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={styles.title}>User</Title>
                    </Body>
                    <Right>
                        <Button style={styles.buttonView}>
                            <Text>Save</Text>
                        </Button>
                    </Right>
                </Header>
                <View style={styles.Body}>
                    <View style={styles.bodyHeading} >
                        <TouchableOpacity style={styles.touchbodyHeading}>
                            <Image style={styles.imgbodyHeading} source={{uri: ava}}></Image>
                        </TouchableOpacity>
                        <View style={styles.textbodyHeading}>
                            <View style={styles.nameView}>
                                <Text>Hoài Thương</Text>
                            </View>
                            <View style={styles.gerenalView}>
                                <TouchableOpacity style={styles.flexGen}>
                                    {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                                    <Icon name="male"></Icon>
                                    <Text style={styles.colorText}>Male</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.flexGen}>
                                    {/*<Image source={{uri: uri}} style={styles.imgbodyContent}></Image>*/}
                                    <Icon name="female"></Icon>
                                    <Text style={styles.colorText}>Female</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View style={styles.bodyContent}>
                        <View style={styles.mailheadContent}>
                            <Text style={styles.textInfo}>First name</Text>
                            <TextInput style={styles.textInfoUser}
                                       onChangeText={(text) => this.setState({text})}>Hoài</TextInput>
                        </View>
                        <View style={styles.mailheadContent}>
                            <Text style={styles.textInfo}>Last name</Text>
                            <TextInput style={styles.textInfoUser}
                                       onChangeText={(text) => this.setState({text})}>Thương</TextInput>
                        </View>
                        <View style={styles.mailheadContent}>
                            <Text style={styles.textInfo}>Email</Text>
                            <Text style={styles.textInfoUser}>hththuong.vn@gmail.com</Text>
                        </View>
                        <View style={styles.mailheadContent}>
                            <Text style={styles.textInfo}>Phone number</Text>
                            <TextInput style={styles.textInfoUser}
                                       onChangeText={(phone) => this.setState({phone})}>+84 8 1180 094</TextInput>
                        </View>
                        <View style={styles.mailheadContent}>
                            <Text style={styles.textInfo}>Birthdate</Text>
                            <DatePicker
                                defaultDate={new Date(1997, 10, 23)}
                                minimumDate={new Date(1800, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="23/10/1997"
                                textStyle={{ color: "#000" }}
                                placeHolderTextStyle={{ color: "#000" }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                            {/*<Text>*/}
                                {/*Date: {this.state.chosenDate.toString().substr(4, 12)}*/}
                            {/*</Text>*/}
                        </View>
                        <View style={styles.mailheadContent}>
                            <Text style={styles.textInfo}>Address</Text>
                            <TextInput style={styles.textInfoUser}
                                       onChangeText={(text) => this.setState({text})}>15/34 C1 p13, q Tan Binh, Tp HCM</TextInput>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

