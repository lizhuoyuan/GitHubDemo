/**
 * Created by 卓原 on 2018/3/1.
 * zhuoyuan93@gmail.com
 */

import React from 'react';
import {
    View,
    Text
} from 'react-native';

import WebView from '../common/WebView';

export default class FavoritePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            a: 22
        }
    }

    render() {
        return (
            <View>


                <Text onPress={() => this.setState(preState => {
                    a: preState.a++
                }, console.log(this.state.a))}>aaa</Text>
            </View>
        )
    }

    onWebViewScroll(event) {
        console.log(event);
    }
}