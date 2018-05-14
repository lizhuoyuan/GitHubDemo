/**
 * Created by 卓原 on 2017/11/30.
 * zhuoyuan93@gmail.com
 */


import {observable, autorun, computed, action, comparer} from 'mobx';
import {Toast} from 'teaset';


class AppState {

    @observable timer = 0;   //数字 observable可以用来观测一个数据
    @observable backIndex = 0;
    @observable backgroundColor = ['green', 'blue', 'red'];
    @observable bgcolor = 'green';
    @observable showLoad = 0;

    constructor(props) {

        //计算属性——computed
        this.plus = computed(() => comparer.identity(this.timer, 0));  //判断this.timer是否===0  返回 true/false


        /**
         * 当观测到的数据发生变化的时候，如果变化的值处在autorun中，那么autorun就会自动执行。
         * 每当this.plus变化的时候会调用
         * 1->∝的时候 始终为flase 所以 不会触发, -1->∝同理 ,只有在 -1 0 1 之间改变时才会触发this.plus的变化 所以会有toast弹出
         */
        autorun(() => {
            this.bgcolor = this.backgroundColor[this.backIndex % this.backgroundColor.length];
            //Toast.message(this.plus + '', {position: 'bottom'});
        })

    }

    //计算 适用于购物车, 商品数量乘以单价
    @computed
    get count() {
        return this.timer * 2
    }


    // 重置计数器
    @action('重置计数器')
    resetTimer() {
        this.timer = 0;
    }

    @action('增加')
    addTimer() {
        this.timer++
    };

    @action('减少')
    subtractTimer() {
        this.timer--
    }

    @action('改变主题颜色')
    changeTheme() {
        this.backIndex++
    }

    @action(' a')
    hideLoading() {
        this.showLoad = 0
    }

    @action('b')
    showLoading() {
        this.showLoad = 1
    }

}

const appState = new AppState();
export default appState;