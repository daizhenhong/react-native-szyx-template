/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/8/14 5:46 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React, {Fragment} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';


let titleStyle = {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
};

class _RouterOptions {

    //TODO 添加颜色修改参数
    getNavOptions = ({navigation}) => {
        return {
            headerStyle: {
                elevation: 0,
                borderBottomColor: '#F2F2F2',
                borderBottomWidth: 1,
            },
            headerTitleStyle: titleStyle,
            headerTitle: navigation.headerTitle ? navigation.headerTitle : '标题',
            headerRight: <View/>,
            headerLeft: <Fragment>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={style.backView}
                    onPress={() => {
                        if (navigation.getParam('onClickBack')) {
                            navigation.getParam('onClickBack')();
                        } else {
                            navigation.goBack();
                        }
                    }
                    }
                >
                    <View style={{}}/>

                </TouchableOpacity>
            </Fragment>,
        };
    }


    /**
     * 生成Tab相关
     * @param tabBarTitle
     * @param normalImage
     * @param selectedImage
     * @param navTitle
     * @param navigation
     * @returns {{tabBarLabel: *, tabBarIcon: (function({focused?: *}): *), headerTitle: *, headerTitleStyle:
     *     {fontSize: *, color: string, alignSelf: string}, headerStyle: {backgroundColor: string}, tabBarVisible:
     *     boolean}}
     */
    //TODO 添加Image大小参数
    getTabOptions(tabBarTitle, normalImage, selectedImage, navTitle, navigation) {
        const tabBarLabel = tabBarTitle;
        const tabBarIcon = ({focused}) => {
            return (
                <Image
                    source={!focused ? normalImage : selectedImage}
                    resizeMode={'contain'}
                    style={{height: 23, width: 23}}
                />
            );
        };
        const headerTitle = navTitle;
        const headerTitleStyle = {
            fontSize: 18,
            color: 'white',
            alignSelf: 'center',
        };
        // header的style
        const headerStyle = {backgroundColor: '#4ECBFC'};
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
            tabBarVisible = false;
        }

        return {
            tabBarLabel: tabBarLabel,
            tabBarIcon: tabBarIcon,
            headerTitle: headerTitle,
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
            tabBarVisible: tabBarVisible,
        };
    }


    /**
     * tab的config设置
     * @returns {{initialRouteName: string, header: null, tabBarPosition: string, swipeEnabled: boolean,
     *     animationEnabled: boolean, tabBarVisible: boolean, lazy: boolean, tabBarOptions: {iconStyle: {width: *,
     *     height: *, marginTop: *}, indicatorStyle: {height: number}, showLabel: boolean, showIcon: boolean,
     *     activeTintColor: string, inactiveTintColor: string, style: {height: *, backgroundColor: string,
     *     borderTopColor: string, borderTopWidth: *, paddingTop: number, paddingBottom: number}, labelStyle:
     *     {fontSize: *, margin: number}}}}
     */
    getTabConfig({initialRouteName}) {
        let config = {
            initialRouteName: initialRouteName,
            header: null,
            tabBarPosition: 'bottom',
            swipeEnabled: false,
            animationEnabled: false,
            tabBarVisible: true,
            lazy: true,
            tabBarOptions: {
                iconStyle: {
                    width: 28,
                    height: 28,
                    marginTop: -2,
                },
                indicatorStyle: {height: 0},
                showLabel: true,
                showIcon: true,
                activeTintColor: '#3296f6',
                inactiveTintColor: '#333333',
                style: {
                    height: 50,
                    backgroundColor: '#fafafa',
                    borderTopColor: '#f2f2f2',
                    borderTopWidth: 1,
                    paddingTop: 0,
                    paddingBottom: 0,
                },
                labelStyle: {
                    fontSize: 11, // 文字大小
                    margin: 0,
                },
            },
        };
        return config;
    }

}

export const RouterOptions = new _RouterOptions();

const style = StyleSheet.create({
    backView: {
        width: 50,
        height: 50,
        borderStyle: 'dashed',
        backgroundColor: '#980907',
        margin: 0,
        // borderColor:'transparent',
        borderWidth: 10,

        borderLeftWidth: 10,
        borderLeftColor: '#79F998'
    }
})
