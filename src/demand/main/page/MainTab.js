/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/9/16 6:31 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {HomePage} from './HomePage';
import {MinePage} from './MinePage';
import {MorePage} from './MorePage';
import {RouteManage} from '../../../route/RouteOptions';


const HomePageNav = createStackNavigator({
    Home: {
        screen: HomePage,
    },
}, {
    defaultNavigationOptions: {
        header: null,
    },
});
const MineNav = createStackNavigator({
    Mine: {
        screen: MinePage,
    },
}, {
    defaultNavigationOptions: {
        header: null,
    },
});
const MoreNav = createStackNavigator({
    More: {
        screen: MorePage,
    },
}, {
    defaultNavigationOptions: {
        header: null,
    },
});


export const MainTab = createBottomTabNavigator({

    HomePage: {
        screen: HomePageNav,
        navigationOptions: ({navigation}) => {
            return RouteManage.initTabBottomComponent({
                tabBarLabel: '首页',
                focused: navigation.isFocused(),
                normalIcon: require('../../../resource/image/tab_index.png'),
                activeIcon: require('../../../resource/image/tab_index_select.png'),
            });
        },
    },
    Mine: {
        screen: MineNav,
        navigationOptions: ({navigation}) => {
            return RouteManage.initTabBottomComponent({
                tabBarLabel: '我的',
                focused: navigation.isFocused(),
                normalIcon: require('../../../resource/image/tab_mine.png'),
                activeIcon: require('../../../resource/image/tab_mine_select.png'),
            });
        },
    },
    More: {
        screen: MoreNav,

        navigationOptions: ({navigation}) => {
            return RouteManage.initTabBottomComponent({
                tabBarLabel: '更多',
                focused: navigation.isFocused(),
                normalIcon: require('../../../resource/image/tab_more.png'),
                activeIcon: require('../../../resource/image/tab_more_select.png'),
            });
        },
    },


}, {
    // initialRouteName: 'More',  //react-navigation4.X 的版本这个属性有bug，当设置后，被选中的tab的为其后一个tab，而不是当前选择的
    initialRouteName: 'HomePage',  //react-navigation4.X 的版本这个属性有bug，当设置后，被选中的tab的为其后一个tab，而不是当前选择的

    defaultNavigationOptions: {},

    tabBarOptions: {
        activeTintColor: '#1888F1',
        inactiveTintColor: '#cccccc',
        style: {
            backgroundColor: '#FFFFFF',
        },

        iconStyle: {
            width: 28,
            height: 28,
            marginTop: -2,
        },
        indicatorStyle: {height: 0},
        showLabel: true,
        showIcon: true,
    },

});


