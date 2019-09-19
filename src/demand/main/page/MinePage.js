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
import {UserStore} from '../../../store/UserStore';
import {RootStore} from '../../../store/RootStore';


export class MinePage extends BasePage {

    render() {
        return (
            <View>
                <Text>minePage1111</Text>
                <Text
                    onPress={()=>{
                        RootStore.userStore.click()
                    }}
                >add</Text>
                <Text
                    onPress={()=>{
                        this.props.navigation.navigate('ExamplePage')
                    }}
                >跳转到examplePage</Text>
            </View>
        );
    }
}
