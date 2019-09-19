/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/8/14 4:17 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/

import fetch from './FetchBase'

class _FetchUtil {
    netGet(url, params, customHeader){
        let headerRequest = {'Content-Type': 'application/json'}
        if (customHeader) {
            Object.assign(headerRequest, customHeader)
        }

        let netParams = {
            url: url,
            method: 'GET',
            params: params,
            header: headerRequest
        }
        return this.netRequest(netParams)
    }

    netPost(url, params, customHeader){
        let headerRequest = {'Content-Type': 'application/json'}
        if (customHeader) {
            Object.assign(headerRequest, customHeader)
        }
        let netParams = {
            url: url,
            method: 'POST',
            params: params,
            header: headerRequest
        }

        return this.netRequest(netParams)
    }

    netPostForm({url, params, customHeader}){
        let headerRequest = {'Content-Type': 'application/json'}
        if (customHeader) {
            Object.assign(headerRequest, customHeader)
        }
        let netParams = {
            url: url,
            method: 'POST',
            params: params,
            header: headerRequest
        }
        return this.netRequest(netParams)
    }

    netUpload({url, params,customHeader}) {
        let headerRequest = {'Content-Type': 'application/json'}
        if (customHeader) {
            Object.assign(headerRequest, customHeader)
        }
        let formData = new FormData()
        params.file.name = this.getFileNameByPath(params.file.uri)
        formData.append('file', params.file)

        let netParams = {
            url: url,
            method: 'POST',
            params: formData,
            header: headerRequest
        }
        return this.netRequest(netParams)
    }

    netRequest(netOptions) {
        let {url, method, header, params, timeOut} = netOptions
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: header,
                body: params,
                timeout: timeOut,
            })
                .then((response) => {
                    this.checkStatus(response)
                    return response.json()
                })
                .then((responseJson) => {
                    resolve(responseJson)
                })
                .catch((error) => {
                    console.warn(error)
                    let err = {
                        status: -1,
                        message: '网络请求失败'
                    }
                    if (error.response) {
                        err.status = error.response.status
                    }
                    resolve(err)
                })
        })
    }

    getFileNameByPath(path) {
        if (path) {
            let words = path.split('\/')
            if (words && words.length > 1) {
                return words[words.length - 1]
            }
        }
        return ''
    }

    /**
     * 检查网络请求的header头是否设置了Content-Type
     * @param netHeader
     * @param contentType
     */
    checkNetHeader(netHeader, contentType) {
        if (!netHeader) {
            netHeader = {'Content-Type': 'application/json'}
        }
        netHeader['Content-Type'] = contentType
        return netHeader
    }

    /**
     * 检查网络请求返回状态
     * @param response
     * @returns {*}
     */
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        }
        let error = new Error(response.statusText)
        Object.assign(error, {response})
        throw error
    }

}
