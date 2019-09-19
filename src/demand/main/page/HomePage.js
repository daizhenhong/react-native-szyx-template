/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/9/16 5:46 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React from 'react';
import { View, Text } from 'react-native';
import {observer} from 'mobx-react'
import {RootStore} from '../../../store/RootStore';


@observer
export class HomePage extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Scree111n</Text>
                <Text>{`Number = ${RootStore.userStore.count}`}</Text>

            </View>
        );
    }
}

