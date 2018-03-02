/**
 * Created by 卓原 on 2018/3/1.
 * zhuoyuan93@gmail.com
 */

import React from 'react';
import {
    View,
    Image,
    Text,
    SafeAreaView
} from 'react-native';

import NavigationBar from '../common/NavigationBar';

export default class NewPage extends React.Component {


    render() {

        return (
            <SafeAreaView>
                {this._renderNav()}
                <Text onPress={() => {
                    this.props.navigation.state.params.callback('回调参数');
                    this.props.navigation.goBack();
                }}>{`new${this.props.navigation.state.params.isVisible}`}</Text>
            </SafeAreaView>
        )
    }

    _renderNav() {
        return (
            <NavigationBar
                navigation={this.props.navigation}
                title={'NewP'}
            />
        )
    }
}