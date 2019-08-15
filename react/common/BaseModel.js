/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/8/14 4:34 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import { action, observable } from "mobx";
export class BaseModel {

    _dataList=[]

    constructor() {
        this.anyMore = true; //当前列表在服务端是否还存在更多数据
        this.loading = false;
        this.pageConfig = {
            showAnyMore: false,
            pageLimit: 20 //数据每次获取的条数
        };
        this._dataList = []; //列表数据
    }
    checkParamNotUndefined(params) {
        let keys = Object.keys(params);
        keys.map((key) => {
            if (params[key] === undefined) {
                throw new Error(`${key} 参数不能为空！`);
            }
        });
    }
    /**
     * 初始化配置
     * @param showAnyMore
     * @param pageLimit
     */
    initPageConfig({ showAnyMore = false, pageLimit = 20 }) {
        this.pageConfig.showAnyMore = showAnyMore;
        this.pageConfig.pageLimit = pageLimit;
    }
    get pageLimit() {
        return this.pageConfig.pageLimit;
    }
    get uniqueId() {
        return this._uniqueIdKey ? this._uniqueIdKey : 'uniqueId';
    }
    set uniqueId(key) {
        this._uniqueIdKey = key;
    }
    startLoading() {
        this.loading = true;
    }
    stopLoading() {
        this.loading = false;
    }
    setAnyMore(value) {
        this.anyMore = value;
    }
    get dataList() {
        return this._dataList.slice();
    }
    /**
     * 在初始化列表时，将uniqueId的key赋值给model，后续操作数据时候依据此key
     * @param list
     * @param uniqueIdKey
     */
    initList(list, uniqueIdKey = 'uniqueId') {
        this.uniqueId = uniqueIdKey;
        if (list && list instanceof Array) {
            this._dataList = list;
            this.checkAntMore(list.length);
        }
    }
    checkAntMore(length) {
        if (this.pageConfig.showAnyMore) {
            this.anyMore = length >= this.pageConfig.pageLimit;
        }
    }
    addList(list) {
        if (list && list instanceof Array) {
            this._dataList = this.dataList.concat(list);
            this.checkAntMore(list.length);
        }
    }
    get length() {
        return this.dataList.length;
    }
    pushData(data) {
        this._dataList.splice(this.length, 0, data);
    }
    resetItem(data) {
        let location = this.getIndexByData(data);
        console.log('resetItem', data, location);
        if (location !== -1) {
            this._dataList.splice(location, 1, data);
        }
        else {
            console.warn('resetItem location = ' + location);
        }
    }
    shiftData(data) {
        this._dataList = [data].concat(this.dataList);
    }
    pushList(list) {
        if (list instanceof Array) {
            this._dataList = this.dataList.concat(list);
        }
        else {
            console.error('pushList: But list is not Array');
        }
    }
    getCurDateTimeAll() {
        let curTime = new Date();
        let month = curTime.getMonth() + 1;
        let monthShow = month < 10 ? '0' + month : month;
        let day = curTime.getDate();
        let hours = curTime.getHours();
        let minute = curTime.getMinutes();
        let seconds = curTime.getSeconds();
        return `${curTime.getFullYear()}-${monthShow}-${this.getTimeShow(day)} ${this.getTimeShow(hours)}:${this.getTimeShow(minute)}:${this.getTimeShow(seconds)}`;
    }
    getTimeShow(time) {
        let showTime = time < 10 ? '0' + time : time.toString();
        return showTime;
    }
    shiftList(list) {
        if (list instanceof Array) {
            this._dataList = list.concat(this.dataList);
        }
        else {
            console.error('shiftList: But list is not Array');
        }
    }
    /**
     * 在指定位置删除并插入数据
     * @param start
     * @param deleteCount
     * @param data
     */
    spliceData(start, deleteCount, data) {
        if (data) {
            this._dataList.splice(start, deleteCount, data);
        }
        else {
            this._dataList.splice(start, deleteCount);
        }
    }
    /**
     * 删除待签列表数据
     * @param uniqueId  待签数据唯一标识
     * @param index     位置
     */
    removeItemById(uniqueId, index) {
        console.log('removeItemById,111111', uniqueId);
        let location = -1;
        if (index && index > -1 && index < this.dataList.length && this.dataList[index][this.uniqueId] === uniqueId) {
            location = index;
        }
        else {
            location = this.getIndexById(uniqueId);
        }
        console.log('removeItemById,2222', location, this.dataList);
        if (location > -1) {
            this.removeItemByLocation(location);
        }
    }
    removeItemByLocation(location) {
        if (location > -1 && location < this.dataList.length) {
            this._dataList.splice(location, 1);
        }
    }
    /**
     * 移除待签名列表
     * @param uniqueIds
     */
    removeListByIds(uniqueIds) {
        if (!uniqueIds) {
            return;
        }
        for (let i = 0; i < uniqueIds.length; i++) {
            this.removeItemById(uniqueIds[i]);
        }
    }
    getIndexByData(data) {
        if (!data) {
            return -1;
        }
        let location = this.getIndexById(data[this.uniqueId]);
        return location;
    }
    getIndexById(uniqueId) {
        let dataList = this.dataList;
        let location = -1;
        if (uniqueId === undefined) {
            return -1;
        }
        for (let i = 0; i < dataList.length; i++) {
            if (dataList[i][this.uniqueId] === uniqueId) {
                location = i;
                break;
            }
        }
        return location;
    }
}
