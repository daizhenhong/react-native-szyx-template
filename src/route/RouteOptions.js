import React from 'react';
import {Image} from 'react-native';

/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/9/17 10:49 AM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/

class _RouteOptions {

    initTabBottomComponent({tabBarLabel, focused, activeIcon, normalIcon}) {
        return {
            tabBarLabel,
            tabBarIcon:
                <TabBarComponent
                    text={tabBarLabel}
                    focused={focused}
                    normalIcon={normalIcon}
                    activeIcon={activeIcon}
                />,
        };
    }
}


class TabBarComponent extends React.Component {

    propTypes: {
        focused: Boolean,
        activeIcon: Number,
        normalIcon: Number
    };

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.focused !== nextProps.focused;
    }

    get tabIcon() {
        return this.props.focused ? this.props.activeIcon : this.props.normalIcon;
    }

    render() {
        return (
            <Image
                source={this.tabIcon}
                style={{
                    width: 25,
                    height: 25,
                }}
            />
        );
    }
}

export const RouteManage = new _RouteOptions();
