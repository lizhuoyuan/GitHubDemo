/**
 * Created by 卓原 on 2018/3/2.
 * zhuoyuan93@gmail.com
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class PopularItem extends React.Component {

    render() {
        let {full_name, description, owner, stargazers_count} = this.props.item;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{full_name}</Text>
                <View style={styles.descView}>
                    <Text>{description}</Text>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.avatarView}>
                        <Text>Author: </Text>
                        <Image style={styles.avatar} source={{uri: owner.avatar_url}}/>
                    </View>
                    <Text>{`star:${stargazers_count}`}</Text>
                    <Image style={styles.starImg}
                           source={require('../../res/images/ic_star.png')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 3,
        marginHorizontal: 5,
        borderWidth: 0.5,
        padding: 5,
        backgroundColor: 'white',
        borderColor: '#ddd',
        shadowColor: 'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },
    avatar: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatarView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    starImg: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    descView: {
        marginVertical: 10
    }
})