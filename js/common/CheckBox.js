/**
 * Created by 卓原 on 2018/3/20.
 * zhuoyuan93@gmail.com
 */
import React from 'react';
import {
    View,
    StyleSheet,
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
        this.select(title, (result) => {
                console.log(title + ':' + result)
                if (result) {
                    this.setState({
                        checked: true
                    })
                }
            },
            (err) => console.warn(err.message))


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
            this.createData(title, () => console.log('存储成功'),
                error => console.log(error),);

        } else {
            this.delete(title, () => console.log('删成功'));
        }
    }

    // 增加
    async createData(title, successBack, errorBack) {
        try {
            // 使用key保存数据
            await storage.save({
                key: title,    // 注意:请不要在key中使用_下划线符号!
                data: 'true',

                // 设为null,则不过期,这里会覆盖初始化的时效
                // expires: 1000 * 60
            });
            successBack()
        } catch (e) {
            errorBack()
        }
        //.then(() => alert('成功'), () => alert('失败'));
    }

    async select(title, successBack, errorBack) {
        // 读取
        try {
            const l = await storage.load({
                key: title,
                // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
                autoSync: true,

                // syncInBackground(默认为true)意味着如果数据过期，
                // 在调用sync方法的同时先返回已经过期的数据。
                // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
                syncInBackground: true,

                // 你还可以给sync方法传递额外的参数
                syncParams: {
                    extraFetchOptions: {
                        // 各种参数
                    },
                    someFlag: true,
                },
            })
            successBack(l)
        } catch (e) {
            errorBack(e);
        }
    }

    async delete(title, successBack) {
        try {
            await storage.remove({
                key: title
            });
            successBack()
        } catch (e) {
            console.error(e.message)
        }

    }


}

const styles = StyleSheet.create({
    checkView: {
        width: ScreenUtil.screenW / 2,
        padding: ScreenUtil.scaleSize(10)
    }
});