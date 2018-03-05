/**
 * Created by 卓原 on 2018/3/2.
 * zhuoyuan93@gmail.com
 */
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import {NavigationActions} from 'react-navigation';


export default class WelcomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 2
        }
    }

    componentDidMount() {
        this.timeGoHome = setInterval(() => {
            if (this.state.time === 0) {
                this.props.navigation.navigate('App');

                this.timeGoHome && clearTimeout(this.timeGoHome);
            } else {
                this.setState({
                    time: this.state.time - 1
                })
            }
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{`欢迎,进入倒计时:${this.state.time}秒`}</Text>
            </View>
        )
    }

    componentWillUnmount() {
        this.timeGoHome && clearTimeout(this.timeGoHome);
        console.log('欢迎页面-componentWillUnmount')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    }
})