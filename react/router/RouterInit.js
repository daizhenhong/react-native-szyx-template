/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/8/14 5:18 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {InitPage} from '../demand/init/InitPage';

export const AppInit = createAppContainer(createStackNavigator({
    InitPage: {
        screen: InitPage,
        navigationOptions: () => {
            // return {header: null}
            return {headerTitle: '启动页'}
        }
    },
    // LoginPage: {
    //     screen: LoginPage,
    //     navigationOptions: () => {
    //         return {headerTitle: '登录'}
    //     }
    // },

}, {
    initialRouteName: 'InitPage',

    // defaultNavigationOptions:RouterOptions.getNavOptions
}))
