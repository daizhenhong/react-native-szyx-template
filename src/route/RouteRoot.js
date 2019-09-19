/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/9/18 10:44 AM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {RouteInit} from './RouteInit';
import {RouteMain} from './RouteMain';
import {NavigationService} from './NavigationService';
import {Provider} from 'mobx-react';
import {RootStore} from '../store/RootStore';


const AppTopNav = createAppContainer(createSwitchNavigator({
        RouteInit: RouteInit,
        RouteMain: RouteMain,
    },
    {
        initialRouteName: 'RouteInit',
    },
));

export class App extends React.Component {

    render() {
        // Provider是mbox的一个高阶组件，正确解锁方式是：
        // 1.在Provider中将顶层store的属性注入
        // 2.在需要使用的Component中通过inject('store属性名')来进行关联，使用this.props[store属性名]进行使用
        return (
            <Provider
                {...RootStore}
            >
                <AppTopNav

                    ref={(navigatorRef) => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Provider>
        );
    }

}
