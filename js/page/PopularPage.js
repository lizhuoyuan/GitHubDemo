/**
 * Created by 卓原 on 2018/3/1.
 * zhuoyuan93@gmail.com
 */

import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import NavigationBar from '../common/NavigationBar';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import PopularTab from '../common/PopularTab';

export default class PopularPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            tt: 'a',
            data: ''
        }
    }

    componentDidMount() {

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView style={{flex: 1}}>
                {this._renderNav()}
                {/*<Text onPress={() => {
                    navigate('NewPage', {
                        isVisible: true, showLeft: true, showRight: true, callback: data => {
                            this.setState({
                                tt: data
                            });
                            console.log(this.state.tt)
                        }
                    },);
                }}></Text>*/}

                <ScrollableTabView
                    tabBarTextStyle={{fontSize: 14}}
                    tabBarUnderlineStyle={{backgroundColor: '#e7e7e7'}}
                    tabBarActiveTextColor={'white'}
                    tabBarInactiveTextColor={'mintcream'}
                    tabBarBackgroundColor={'green'}
                    renderTabBar={() => <ScrollableTabBar/>}>
                    <PopularTab tabLabel="ios">ios</PopularTab>
                    <PopularTab tabLabel="java">java</PopularTab>
                    <PopularTab tabLabel="android">android</PopularTab>
                </ScrollableTabView>
            </SafeAreaView>
        )
    }

    _renderNav() {
        return (
            <NavigationBar
                showLeft={false}
                title={'Popular'}
                style={{backgroundColor: 'green'}}
            />
        )
    }


}