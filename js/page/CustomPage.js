/**
 * Created by 卓原 on 2018/3/2.
 * zhuoyuan93@gmail.com
 */

import React from 'react';
import {
    View,
    SafeAreaView
} from 'react-native';

import NavigationBar from '../common/NavigationBar';

export default class CustomPage extends React.Component {
    render() {
        return (
            <SafeAreaView>
                {this._renderNav()}
            </SafeAreaView>)

    }

    _renderNav() {
        return (
            <NavigationBar title={'自定义标签'}/>
        )
    }
}