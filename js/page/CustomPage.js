/**
 * Created by 卓原 on 2018/3/2.
 * zhuoyuan93@gmail.com
 */

import React from 'react';
import {
    View,
    SafeAreaView,
    FlatList,
    StyleSheet
} from 'react-native';

import NavigationBar from '../common/NavigationBar';
import CheckBox from '../common/CheckBox';
import ScreenUtil from "../util/ScreenUtil";

export default class CustomPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            data: [{title: 'ios'}, {title: 'andoid'}, {title: 'javascript'}],
        }
    }

    render() {
        return (
            <SafeAreaView>
                {this._renderNav()}
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={this.state.data}
                    renderItem={({item, index}) => <CheckBox item={item} index={index}/>}
                    numColumns={2}
                />

            </SafeAreaView>
        );

    }

    _renderNav() {
        return (
            <NavigationBar title={'自定义标签'}/>
        )
    }

    _keyExtractor = (item, index) => index + '';
}
