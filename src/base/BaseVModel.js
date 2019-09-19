/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/9/18 3:16 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import {BaseModel} from "./BaseModel";

export class BaseVModel {

    model;

    constructor(model) {
        if (!model) {
            throw new Error('BaseVModel必须有model！！！')
        }
        if(!BaseModel.prototype.isPrototypeOf(model)){
            throw new Error('model必须继承自BaseModel！！！')
        }
        this.model = model
    }

    get pageLimit(): number {
        return this.model.pageLimit
    }


    /**
     * 初始化配置
     * @param showAnyMore
     * @param pageLimit
     */
    intPageConfig(params) {
        this.model.initPageConfig(params)
    }

    get loading() {
        return this.model.loading
    }

    startLoading() {
        this.model.startLoading()
    }

    stopLoading() {
        this.model.stopLoading()
    }

    get dataList() {
        return this.model.dataList
    }

    initList(list, uniqueIdKey = 'uniqueId') {
        if (!(list instanceof Array)) {
            throw new Error('BaseVModel initList的列表必须是Array')
        }
        this.model.initList(list, uniqueIdKey)
    }

    get anyMore() {
        return this.model.anyMore
    }

    get length() {
        return this.model.length
    }


    spliceData(start, deleteCount, data) {
        this.model.spliceData(start, deleteCount, data)
    }


    /**
     * 从数据底部插入数据
     * @param data
     */
    pushData(data) {
        this.model.pushData(data)
    }


    /**
     * 从数据底部插入数组
     * @param data
     */
    pushList(data) {
        this.model.pushList(data)
    }


    /**
     * 从数组顶部插入数据
     * @param data
     */
    shiftData(data) {
        this.model.shiftData(data)
    }

    /**
     * 从数组顶部插入数组
     * @param data
     */
    shiftList(data) {
        this.model.shiftList(data)
    }

    /**
     * 删除待签列表数据
     * @param uniqueId  待签数据唯一标识
     * @param index     位置
     */
    removeItemById(uniqueId, index) {
        console.log('removeItemById,', uniqueId)
        this.model.removeItemById(uniqueId, index)
    }

    removeItemByLocation(location) {
        // this.model.removeItemByLocation(location)
        this.model.removeItemByLocation(location)
    }

    /**
     * 移除待签名列表
     * @param uniqueIds
     */
    removeListByIds(uniqueIds) {
        this.model.removeListByIds(uniqueIds)
    }


    getIndexById(uniqueId) {
        return this.model.getIndexById(uniqueId)
    }

}
