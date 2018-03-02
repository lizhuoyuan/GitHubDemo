/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import {TabNavigator, StackNavigator} from 'react-navigation';

import PopularPage from './js/page/PopularPage';
import TrendingPage from './js/page/TrendingPage';
import FavoritePage from './js/page/FavoritePage';
import MyPage from './js/page/MyPage';
import * as ScreenUtil from './js/util/ScreenUtil';
import NewPage from './js/page/NewPage';

const Tab = TabNavigator({
        Popular: {
            screen: PopularPage,
            //  navigationOptions: ({navigation}) => Navigator({navigation})
            navigationOptions: {
                tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                     source={require('./res/images/ic_polular.png')}/>)
            }
        },
        Trending: {
            screen: TrendingPage,
            navigationOptions: {
                tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                     source={require('./res/images/ic_trending.png')}/>)
            }
        },
        Favorite: {
            screen: FavoritePage,
            navigationOptions: {
                tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                     source={require('./res/images/ic_favorite.png')}/>)
            }
        },
        My: {
            screen: MyPage,
            navigationOptions: {
                tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                     source={require('./res/images/ic_my.png')}/>)
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        initialRouteName: 'Popular',
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: 'blue',//label和icon的前景色 活跃状态下（选中）。
            inactiveTintColor: 'gray',
            //activeBackgroundColor: 'green', //label和icon的背景色 活跃状态下（选中）
            //inactiveBackgroundColor: 'transparent',
            showLabel: true,         //是否显示label，默认开启
            labelStyle: {fontSize: 12}, //label的样式
            style: {height: 50, opacity: 0.5},  //tabbar的样式

        }

    });

const AppStackNavigator = StackNavigator({
    Home: {
        screen: Tab,
        navigationOptions: {
            header: null
        }
    },
    NewPage: {
        screen: NewPage,
        navigationOptions: {
            header: null
        }
    }

});
const styles = StyleSheet.create({
    rightView: {
        marginHorizontal: 20
    },
    headerView: {
        backgroundColor: 'yellow',
    },
    headerTitleStyle: {
        color: 'blue',
        fontSize: 20,
        alignSelf: 'center'
    },
    leftText: {
        color: 'green'
    }
});
export default AppStackNavigator;