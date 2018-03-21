/**
 * Created by 卓原 on 2018/3/20.
 * zhuoyuan93@gmail.com
 */
import React from 'react';
import {
    View,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import {Checkbox} from 'teaset';
import * as ScreenUtil from "../util/ScreenUtil";

export default class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        }
    }

    componentDidMount() {
        let {title} = this.props.item;
        ScreenUtil.getAsyncStorage(title,
            (result) => {
                if (result) {
                    this.setState({
                        checked: true
                    })
                }
            },
            (error) => console.log(error))

    }

    render() {
        let {title} = this.props.item;
        return (
            <View style={styles.checkView}>
                <Checkbox
                    title={title}
                    checked={this.state.checked}
                    onChange={checked => this._changeChecked(checked)}
                    size={'lg'}
                />
            </View>
        )

    }


    _changeChecked(checked) {

        let {title} = this.props.item;
        if (checked) {
            //存储
            ScreenUtil.saveAsyncStorage(title, true + "",
                () => console.log('存储成功'),
                error => console.log(error),
            )
        } else {
            ScreenUtil.removeAsyncStorage(title, () => {
                console.log('删成功')
            }, (error) => {
                console.log(error)
            })
        }
    }

}

const styles = StyleSheet.create({
    checkView: {
        width: ScreenUtil.screenW / 2,
        padding: ScreenUtil.scaleSize(10)
    }
});