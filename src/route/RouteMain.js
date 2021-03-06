/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/9/16 6:25 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {MainTab} from '../demand/main/page/MainTab';
import {ExamplePage} from '../demand/example/page/ExamplePage';


export const RouteMain = createStackNavigator({
    Home: {
        screen: MainTab,
        navigationOptions: (navigation) => {
            return {
                header: null,
            };
        },
    },
    ExamplePage:{
        screen:ExamplePage
    }

});

