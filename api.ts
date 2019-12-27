/*jshint -W069 */
/*request是已封装好的请求函数，不同的项目使用的请求工具和 header 参数都不一致，建议封装好后在这引用*/
import {
    request
} from './request';



export default class Api {

    /**
     * @name 12.1 合同相关接口* 
     */
    contractNoUsingPOST(
        payload: {}
    ): Promise < any > {
        let url = '/contract/contractNo';
        return request(url, 'GET', payload)
    }

}