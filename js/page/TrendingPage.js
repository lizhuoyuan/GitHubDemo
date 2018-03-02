/**
 * Created by 卓原 on 2018/3/1.
 * zhuoyuan93@gmail.com
 */

import React from 'react';
import {
    View,
    SafeAreaView,
    Text
} from 'react-native';

import NavigationBar from '../common/NavigationBar';

export default class TrendingPage extends React.Component {

    render() {
        return (
            <SafeAreaView>
                {this._renderNav()}
                <Text>trendding</Text>
            </SafeAreaView>
        )
    }

    _renderNav() {
        return (<NavigationBar/>)
    }
}