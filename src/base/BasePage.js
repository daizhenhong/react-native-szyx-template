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
import {ActivityIndicator, View} from 'react-native';

import {observer} from 'mobx-react';
import {BaseVModel} from './BaseVModel';

export class BasePage extends React.Component {

}

/**
 *
 * @param vModel
 * @param WrappedComponent
 * @returns {*}
 * @constructor
 */
export const HocBaseComponent = (vModel, ...WrappedComponent) => {
    class HocBase extends React.Component {

        get childrenComponent() {
            if (WrappedComponent) {

                return WrappedComponent;
            }
            return null;
        }

        render() {
            return (
                <View>
                    {this.childrenComponent}
                    <LoadingComponent
                        vModel={vModel}
                    />
                </View>
            );
        }
    }

    return <HocBase/>;
};

export class BasePageComponent extends React.Component {

    propTypes: {
        vModel: BaseVModel
    };

    constructor(props) {
        super(props);
        if (!this.props.vModel) {
            console.warn('BasePageComponent没有传递vModel');
        } else if (!BaseVModel.prototype.isPrototypeOf(this.props.vModel)) {
            throw new Error('BasePageComponent 的vModel属性必须是BaseVModel的子类！！！');
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.props.children}
                <LoadingComponent
                    vModel={this.props.vModel}
                />
            </View>
        );
    }
}


@observer
class LoadingComponent extends React.Component {

    propTypes: {
        vModel: BaseVModel
    };

    constructor(props) {
        super(props);
        if (!this.props.vModel) {
            console.warn('LoadingComponent 没有传递vModel');
        } else if (!BaseVModel.prototype.isPrototypeOf(this.props.vModel)) {
            throw new Error('LoadingComponent 的vModel属性必须是BaseVModel的子类！！！');
        }
    }

    get vModel() {
        return this.props.vModel;
    }

    get showLoading() {
        return this.vModel && this.vModel.loading;
    }

    render() {
        return (

            <ActivityIndicator
                style={{position: 'absolute', alignSelf: 'center', top: 100}}
                color="#3296f6"
                size="large"
                animating={this.showLoading}
            />
        );
    }
}
