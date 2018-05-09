/**
 * Created by 卓原 on 2018/3/1.
 * zhuoyuan93@gmail.com
 */

import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    SafeAreaView,
    Modal,
    Image
} from 'react-native';
import NavigationBar from '../common/NavigationBar';

import {NavigationActions} from 'react-navigation';

import APPState from '../mobx/AppState';

import {observer} from 'mobx-react';

@observer
export default class MyPage extends React.Component {

    render() {
        return (
            <SafeAreaView>
                {this._renderNav()}
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('customPage')
                }}>
                    <Text>去自定义标签</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    APPState.changeTheme()
                }}>
                    <Text>修改主题</Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }

    _renderNav() {
        return (
            <NavigationBar
                showLeft={false}
                title={'MyPage'}
                style={{
                    backgroundColor: APPState.bgcolor
                }}
            />
        )
    }
}