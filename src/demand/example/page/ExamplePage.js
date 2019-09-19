/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/9/18 3:30 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import {BasePage, BasePageComponent} from '../../../base/BasePage';
import {ExampleVModel} from '../vModel/ExampleVModel';
import React from 'react';
import {Text} from 'react-native';


export class ExamplePage extends BasePage {

    constructor(props) {
        super(props);

        this.vModel = new ExampleVModel();
    }

    componentDidMount() {
        this.vModel.startLoading();
        setTimeout(() => {
            console.log(333, 'stop');
            this.vModel.stopLoading();
        }, 500);
    }

    render() {
        return (
            <BasePageComponent
                // vModel={this.vModel}
                vModel={this.vModel}
            >
            </BasePageComponent>
        );
        // return (
        //     <View>
        //         {HocBaseComponent(
        //             this.vModel,
        //             <Text key={'111'}>1111</Text>,
        //             <Text key={'222'}>2222</Text>,
        //         )}
        //     </View>
        // );
    }
}

