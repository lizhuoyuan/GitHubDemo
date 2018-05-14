/**
 * Created by 卓原 on 2018/5/11.
 * zhuoyuan93@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    Modal,
    Text
} from 'react-native';
import AppState from '../mobx/AppState';

import {observer} from 'mobx-react';

@observer
export default class LoadingView extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <View style={this.props.style}>
                <Modal transparent={true}
                       style={styles.modal}
                       visible={AppState.showLoad ? true : false}
                       animationType={'fade'}
                       onRequestClose={() => {
                           this.setState({
                               isVisible: false,
                           })
                       }}>
                    <View style={{flex: 1}}>
                        <Text style={{backgroundColor: 'yellow',}}>loading...</Text>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        justifyContent: 'center',

    }
});