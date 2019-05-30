import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Actions} from 'react-native-router-flux'
import styles from "./style";

// const {height: HEIGHT} = Dimensions.get('window').height

const slides = [
    {
        key: 'somethun',
        title: 'How to Measure',
        text: 'Lightly place your index finger on the camera lens\nand flash on the back of your phone.\nMake sure the lens' +
            ' and flash are fully covered.\n Hold until the measuurement is complete',
        image: require('../Image/chart1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        title: 'History Info',
        text: 'On the history page you will see your past\n measurement. Use the filter to anylyze\n the history of your measurement types.',
        image: require('../Image/chart2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        title: 'How to Measure Your\n Restring Heart Rate (HR)',
        text: 'Measure your resting HR in the morning 2 minutes\n after wakeing up. Activate the notification\nsetting for a reminder',
        image: require('../Image/heartmonitor.png'),
        backgroundColor: '#22bcb5',
    }
];

class Guide extends Component {
    _renderItem = (item) => {
        return (
            <View style={styles.mainContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} style={styles.image}/>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    _onDone = () => {
        Actions.Setting()
    }
    _onSkip = () => {
        Actions.Setting()
    }

    render() {
        return (
            <AppIntroSlider
                renderItem={this._renderItem}
                slides={slides}
                onDone={this._onDone}
                showSkipButton={true}
                onSkip={this._onSkip}
            />
        );
    }
}
export default Guide;