/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2018
 *
 * @类描述:
 * @版本:       V3.1.0
 * @作者        wuxing
 * @邮箱        wuxing@bjca.org.cn
 * @创建时间    2018/11/9 11:22 AM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import {NavigationActions, StackActions} from 'react-navigation';

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

export const NavigationService = new _NavigationService()

