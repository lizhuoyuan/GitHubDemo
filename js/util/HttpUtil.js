/**
 * Created by 卓原 on 2018/3/1.
 * zhuoyuan93@gmail.com
 */
import AppState from '../mobx/AppState';

export default class HttpUtil {

    static get(url, loading) {
        if (loading) {
            //AppState.showLoading();
        }
        console.log(url);
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(result => {
                    resolve(result);
                    //   AppState.hideLoading();
                })
                .catch(error => {
                    reject(error);
                    //   AppState.hideLoading();
                });
        })
    }

    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result)
                })
                .catch(error => reject(error))
        })
    }

}