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
        /* ScreenUtil.getAsyncStorage(title,(result) => {
                 if (result) {
                     console.log(title + ':' + result)
                     this.setState({
                         checked: true
                     })
                 }
             },
             (error) => console.log(error))*/

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
            this.createData1(title, () => console.log('存储成功'),
                error => console.log(error),);
            /*ScreenUtil.saveAsyncStorage(title, true + "",
                () => console.log('存储成功'),
                error => console.log(error),
            )*/
        } else {
            storage.remove({
                key: title
            }).then();
            /*ScreenUtil.removeAsyncStorage(title, () => {
                console.log('删成功')
            }, (error) => {
                console.log(error)
            })*/
        }
    }

    // 增加
    createData(title) {
        // 使用key保存数据
        storage.save({
            key: title,    // 注意:请不要在key中使用_下划线符号!
            data: 'true',

            // 设为null,则不过期,这里会覆盖初始化的时效
            // expires: 1000 * 60
        }).then(() => alert('成功'), () => alert('失败'));
    }


    // 增加
    async createData1(title, successBack, errorBack) {
        try {
            // 使用key保存数据
            await storage.save({
                key: title,    // 注意:请不要在key中使用_下划线符号!
                data: 'true',

                // 设为null,则不过期,这里会覆盖初始化的时效
                // expires: 1000 * 60
            })
            successBack()
        } catch (e) {
            errorBack()
        }
        //.then(() => alert('成功'), () => alert('失败'));
    }

    select(title, successBack, errorBack) {
        // 读取
        storage.load({
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
        }).then(ret => {
            // 如果找到数据，则在then方法中返回
            // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
            // 你只能在then这个方法内继续处理ret数据
            // 而不能在then以外处理
            // 也没有办法“变成”同步返回
            // 你也可以使用“看似”同步的async/await语法
            successBack(ret);
        }).catch(err => {
            //如果没有找到数据且没有sync方法，
            //或者有其他异常，则在catch中返回
            errorBack(err);
        })
    }

}

const styles = StyleSheet.create({
    checkView: {
        width: ScreenUtil.screenW / 2,
        padding: ScreenUtil.scaleSize(10)
    }
});