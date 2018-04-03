/**
 * Created by 卓原 on 2018/4/2.
 * zhuoyuan93@gmail.com
 */
'use strict';
import React from 'react';
import {
    requireNativeComponent,
    View
} from 'react-native';
import PropTypes from 'prop-types';

var RCTWebView = requireNativeComponent('AndroidRCTWebView', WebView, {
    nativeOnly: {onChange: true}
});

export default class WebView extends React.Component {

    static propTypes = {
        url: PropTypes.string,
        html: PropTypes.string,
        onScrollChange: PropTypes.func,
        ...View.propTypes // 包含默认的View的属性
    };

    constructor(props) {
        super(props);
    }

    _onChange(event: Event) {
        if (!this.props.onScrollChange) {
            return;
        }
        this.props.onScrollChange({ScrollX: event.nativeEvent.ScrollX, ScrollY: event.nativeEvent.ScrollY});
    }

    render() {
        return (
            <RCTWebView {...this.props} onChange={(event) => this._onChange(event)}/>
        )
    }
}

/*
let iface = {
    name: 'WebView',
    propTypes: {
        url: PropTypes.string,
        html: PropTypes.string,
        ...View.propTypes // 包含默认的View的属性
    }
};

module.exports = requireNativeComponent('AndroidRCTWebView', iface);*/

