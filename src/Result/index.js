import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image,TouchableOpacity} from 'react-native';
import {Container, Header, Left, Body, Right, Title, Thumbnail, Icon, Button} from 'native-base';


import styles from './styles';

const bicycle=() => (<Icon name="bicycle" size={30} color="#000" />)


type Props = {};
export default class Home extends Component {
    render() {
        this.state = {text: ''};
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const uri1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
        return (
            <View style={styles.container}>
                <Header style={styles.Header}>
                    <Left>
                        <Button style={styles.buttonView}>
                            <Text>Discard</Text>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={styles.title}>Result</Title>
                    </Body>
                    <Right>
                        <Button style={styles.buttonView}>
                            <Text>Save</Text>
                        </Button>
                    </Right>
                </Header>
                <View style={styles.Headers}>
                    <View style={styles.flexText}>
                        <View style={styles.styleViewHeader}>
                            <Text style={styles.textHeader}>
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
                    <View style-={styles.boderView}></View>
                    <View>
                        <Text style={styles.textHeaderBPM}>
                            PERSONAL RANGE
                        </Text>
                    </View>

                </View>
                <View style={styles.Body}>
                    <View style={styles.bodyHeading}>
                        <Text style={styles.bodyText}>When did you measure?</Text>
                        <View style={styles.flexIcon}>
                            <TouchableOpacity style={styles.flexTouch}>
                                {/*<Image style={styles.imgbodyHeading} source={{uri: uri}}></Image>*/}
                                <Icon style={styles.imgbodyHeading} name="pulse" />
                                <Text style={styles.bodyheadingText}>measure</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.flexTouch}>
                                {/*<Image style={styles.imgbodyHeading} source={{uri: uri}}></Image>*/}
                                <Icon style={styles.imgbodyHeading} name="bed" />
                                <Text style={styles.bodyheadingText}>sleep</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.flexTouch}>
                                {/*<Image style={styles.imgbodyHeading} source={{uri: uri}}></Image>*/}
                                <Icon style={styles.imgbodyHeading} name="body" />
                                <Text style={styles.bodyheadingText}>walk</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.flexTouch}>
                                {/*<Image style={styles.imgbodyHeading} source={{uri: uri}}></Image>*/}
                                <Icon style={styles.imgbodyHeading} name="bicycle" />
                                <Text style={styles.bodyheadingText}>riding</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.flexTouch}>
                                {/*<Image style={styles.imgbodyHeading} source={{uri: uri}}></Image>*/}
                                <Icon style={styles.imgbodyHeading} name="walk" />
                                <Text style={styles.bodyheadingText}>run</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bodyContent}>
                        <Text style={styles.bodyText}>How do you feel?</Text>
                        <View style={styles.flexIcon}>
                            <TouchableOpacity>
                                {/*<Image style={styles.imgbodyHeading} source={{uri: uri}}></Image>*/}
                                <Icon  style={styles.imgbodyHeading} name="happy"></Icon>
                                <Text style={styles.bodyheadingText}>happy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                {/*<Image style={styles.imgbodyHeading} source={{uri: uri}}></Image>*/}
                                <Icon style={styles.imgbodyHeading} name="sad"></Icon>
                                <Text style={styles.bodyheadingText}>sad</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                {/*<Image style={styles.imgbodyHeading} source={{uri: uri}}></Image>*/}
                                <Icon style={styles.imgbodyHeading} name="happy"></Icon>
                                <Text style={styles.bodyheadingText}>happy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                {/*<Image style={styles.imgbodyHeading} source={{uri: uri}}></Image>*/}
                                <Icon style={styles.imgbodyHeading} name="sad"/>
                                <Text style={styles.bodyheadingText}>sad</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                {/*<Image style={styles.imgbodyHeading} source={{uri: uri}}></Image>*/}
                                <Icon style={styles.imgbodyHeading} name="happy"/>
                                <Text style={styles.bodyheadingText}>happy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bodyFooter}>
                        <Text style={styles.bodyText}>Additional Infomation</Text>
                        <View style={styles.iconFooter}>
                            {/*<Image style={styles.styleIcon} source={{uri: uri}}></Image>*/}
                            <Icon style={styles.imgbodyHeading} name="create"/>
                            <TextInput
                                style={styles.bodyheadingText}
                                onChangeText={(text) => this.setState({text})}
                                placeholder="Add a note to this measurement"
                            />
                        </View>

                    </View>
                </View>

            </View>
        );
    }
}

