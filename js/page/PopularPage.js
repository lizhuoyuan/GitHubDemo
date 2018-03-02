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
import HttpUtil from '../util/HttpUtil';
import * as MyFetch from '../util/MyFetch';

export default class PopularPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            tt: 'a',
            data: {}
        }
    }

    componentDidMount() {
        this.load('http://10.22.218.162/cms/pages/relation/pageV1?id=AP1706A047')
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView>
                {this._renderNav()}
                <Text onPress={() => {
                    navigate('NewPage', {
                        isVisible: true, showLeft: true, showRight: true, callback: data => {
                            this.setState({
                                tt: data
                            });
                            console.log(this.state.tt)
                        }
                    },);
                }}>{this.state.tt}</Text>

            </SafeAreaView>
        )
    }

    _renderNav() {
        return (
            <NavigationBar
                title={'Popular'}
                style={{backgroundColor: 'green'}}
            />
        )
    }

    load(url) {
        HttpUtil.get(url)
            .then(result => {
                this.setState({
                    data: result
                });
                console.log(this.state.data)
            })
            .catch(error => {
                this.setState({
                    data: error
                })
            })
    }

    fetch(url) {
        MyFetch.requestUrl(url, 'GET', '',
            result => {
                console.log(result);
            }, error => {
                console.log(error);
            })
    }
}