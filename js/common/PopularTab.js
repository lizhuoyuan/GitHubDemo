/**
 * Created by 卓原 on 2018/3/2.
 * zhuoyuan93@gmail.com
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import HttpUtil from '../util/HttpUtil';
import {Urls} from '../expand/Urls';
import PopularItem from './PopularItem';
import ScreenUtil from "../util/ScreenUtil";

export default class PopularTab extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: '',
            isRefreshing: false
        }
    }

    componentDidMount() {
        this.load(Urls.popuralUrl + this.props.tabLabel + Urls.popularQUERY_STR);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    onRefresh={() => {
                        this.load(Urls.popuralUrl + this.props.tabLabel + Urls.popularQUERY_STR)
                    }}
                    refreshing={this.state.isRefreshing}
                    keyExtractor={this._keyExtractor}
                    data={this.state.data}
                    renderItem={({item}) => <PopularItem item={item}/>}
                />
            </View>
        )
    }

    load(url) {
        this.setState({
            isRefreshing: true
        });
        HttpUtil.get(url)
            .then(result => {
                this.setState({
                    data: result.items,
                    isRefreshing: false
                });
             })
            .catch(error => {
                this.setState({
                    isRefreshing: false,
                    data: JSON.stringify(error)
                })
            })
    }

    _keyExtractor = (item, index) => index + '';
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sepa: {
        width: ScreenUtil.screenW,
        alignItems: 'center',
    },
    speaText: {
        color: 'green'
    }
})