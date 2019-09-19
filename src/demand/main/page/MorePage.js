/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/9/16 6:23 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React from 'react';
import {Text, View} from 'react-native';
import {BasePage} from '../../../base/BasePage';
import {inject,observer} from 'mobx-react'


// inject和observer的顺序要注意，一定是observer在后，否则回出现inject中的数据修改后，页面不渲染
@inject('userStore')
@observer
export class MorePage extends BasePage {

    render() {
        return (
            <View>
                <Text>more</Text>
                <Text>{`通过reject来获取变更，值${this.props.userStore.count}`}</Text>
            </View>
        );
    }
}
