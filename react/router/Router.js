/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/8/14 5:19 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import {NavigationActions, StackActions} from 'react-navigation';


import React, {Component} from 'react';
import {Provider} from 'mobx-react'

import {createAppContainer,createStackNavigator, createSwitchNavigator} from 'react-navigation';
import {AppInit} from './RouterInit';
import {InitPage} from '../demand/init/InitPage';


// const AppTopNav = createAppContainer(createStackNavigator({
//     InitPage: {
//         screen: InitPage,
//         navigationOptions: () => {
//             return {header: null}
//         }
//     },
//
// }));

const AppTopNav = createAppContainer(createSwitchNavigator(
    {
        AppInit: AppInit,
        // AppMain: AppMain,
    },
    {
        initialRouteName: 'AppInit'
        // initialRouteName: 'AppMain'
    },
));

export class App extends Component {


    render() {

        return (

                <AppTopNav
                    ref={(navigatorRef) => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
        );
    }
}


class _NavigationService {

    _navigator

    setTopLevelNavigator(navigatorRef) {
        this._navigator = navigatorRef
    }

    navigate(routeName, params) {
        this._navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }


    reset(routeName) {
        let resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: routeName})
            ]
        })
        this._navigator.dispatch(resetAction);
    }

}

const NavigationService = new _NavigationService()
