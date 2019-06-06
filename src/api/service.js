/* eslint-disable */
/**
 * 本文件由工具自动生成，请勿随意改动！！！
 * @name SMMP bd APIS
 * @description The API definition for the SMMP bd of Cloud Manage Platform.
 * @tutorial http://172.16.7.110/swagger-resources/platform/wec-smmp/yaml/wec-smmp-bd.yaml
 */
import api from '@api/api'
import http from '@utils/ajax'
import { awaitWrap } from "@utils";

/**
 * 查询数据中心的数据列表
 * @param { Object } params 请求参数
 * @param { String } params['type'] 模型对象
 * @param { Integer } params['pageNumber'] 分页页码
 * @param { Integer } params['pageSize'] 分页大小
 * @param { String } params['criteria'] 传入的是一个JSON格式的字符串，使用Base64编码
 * @param { Boolean } params['recycle'] 是否查询回收站数据
 * @param { Array } params['includeAttributes'] 需要返回的字段
 */
export const  queryData =async (params) => {
    // send request
    return awaitWrap(http.post(api.data_query, params))
}

/**
 * 新增基础数据
 * @param { Object } params 请求参数
 * @param { String } params['type'] 模型对象
 * @param { String } params['attributes'] 属性的JSON串格式，需要Base64编码
 */
export const  addData =async (params) => {
    // send request
    return awaitWrap(http.post(api.data_add, params))
}

/**
 * 修改基础数据
 * @param { Object } params 请求参数
 * @param { String } params['type'] 模型对象
 * @param { Integer } params['id'] 需要修改数据的WID
 * @param { String } params['attributes'] 属性的JSON串格式
 */
export const  updateData =async (params) => {
    // send request
    return awaitWrap(http.post(api.data_update, params))
}

/**
 * 删除基础数据前的检查
 * @param { Object } params 请求参数
 * @param { String } params['type'] 模型对象
 * @param { Array } params['ids'] 
 * @param { String } params['criteria'] 传入的是一个JSON格式的字符串，使用Base64编码
 * @param { Boolean } params['recycle'] 是否删除回收站数据
 */
export const  deleteDataBefore =async (params) => {
    // send request
    return awaitWrap(http.post(api.data_beforedelete, params))
}

/**
 * 删除基础数据
 * @param { Object } params 请求参数
 * @param { String } params['type'] 模型对象
 * @param { Array } params['ids'] 
 * @param { String } params['criteria'] 传入的是一个JSON格式的字符串，使用Base64编码
 * @param { Boolean } params['recycle'] 是否删除回收站数据
 */
export const  deleteData =async (params) => {
    // send request
    return awaitWrap(http.post(api.data_delete, params))
}

/**
 * 根据ID获取数据详情
 * @param { Object } params 请求参数
 * @param { String } params['type'] 模型对象
 * @param { Integer } params['id'] 需要删除数据的WID
 */
export const  getDataById =async (params) => {
    // send request
    return awaitWrap(http.post(api.data_getbyid, params))
}

/**
 * 获取树形结构的数据，分级加载
 * @param { Object } params 请求参数
 * @param { String } params['objectName'] 模型名称
 * @param { Integer } params['pid'] 父节点ID，如果是第一级，则该字段为空
 */
export const  getTreeData =async (params) => {
    // send request
    return awaitWrap(http.post(api.data_gettreedata, params))
}

/**
 * 查询导入历史
 * @param { Object } params 请求参数
 * @param { String } params['type'] 模型对象
 * @param { Integer } params['pageNumber'] 分页页码
 * @param { Integer } params['pageSize'] 分页大小
 */
export const  queryImportHistory =async (params) => {
    // send request
    return awaitWrap(http.post(api.data_queryimporthistory, params))
}

/**
 * 获取所有字典类型
 * @param { Array } params 请求参数
 */
export const  listDictType =async (params) => {
    // send request
    return awaitWrap(http.get(api.dict_listdicttype, params))
}

/**
 * 获取某个字典的详情
 * @param { Object } params 请求参数
 * @param { String } params['dictName'] 字典名称
 * @param { Integer } params['pageNumber'] 分页页码
 * @param { Integer } params['pageSize'] 分页大小
 * @param { String } params['keyword'] 搜索关键字，只搜索名称和编号
 */
export const  getWhole =async (params) => {
    // send request
    return awaitWrap(http.post(api.dict_getwhole, params))
}

/**
 * 开启或关闭某个全局字典
 * @param { Object } params 请求参数
 * @param { String } params['dictName'] 字典名称
 * @param { Integer } params['id'] 字典对象的WID
 * @param { Boolean } params['status'] 需要调整后的状态 true 开启 false 关闭
 */
export const  switchGlobeDict =async (params) => {
    // send request
    return awaitWrap(http.post(api.dict_switchglobedict, params))
}

/**
 * 获取某个字典的详情
 * @param { Object } params 请求参数
 * @param { String } params['dictName'] 字典名称
 * @param { Integer } params['id'] 字典对象的WID
 */
export const  getDictById =async (params) => {
    // send request
    return awaitWrap(http.post(api.dict_getbyid, params))
}

/**
 * 新增字典数据
 * @param { Object } params 请求参数
 * @param { String } params['dictName'] 字段名称
 * @param {  } params['attributes'] 
 */
export const  addDict =async (params) => {
    // send request
    return awaitWrap(http.post(api.dict_add, params))
}

/**
 * 修改字典数据
 * @param { Object } params 请求参数
 * @param { String } params['dictName'] 字段名称
 * @param { Integer } params['id'] 字典的WID
 * @param {  } params['attributes'] 
 */
export const  updateDict =async (params) => {
    // send request
    return awaitWrap(http.post(api.dict_update, params))
}

/**
 * 删除字典数据
 * @param { Object } params 请求参数
 * @param { String } params['dictName'] 字段名称
 * @param { Integer } params['id'] 字典的WID
 */
export const  deleteDict =async (params) => {
    // send request
    return awaitWrap(http.post(api.dict_delete, params))
}

/**
 * 删除字典数据前检查
 * @param { Object } params 请求参数
 * @param { String } params['dictName'] 字段名称
 * @param { Integer } params['id'] 字典的WID
 */
export const  deleteDictBefore =async (params) => {
    // send request
    return awaitWrap(http.post(api.dict_befordelete, params))
}

/**
 * 更新方式设置前检查
 * @param { Array } params 请求参数
 * @param { Integer } params[]['tblWid'] 表格的wid，t_meta_table表
 * @param { String } params[]['objectName'] 模型名称
 * @param { String } params[]['displayName'] 显示名称
 * @param { Integer } params[]['modifyType'] 更新方式 1 ETL更新  2 应用更新
 * @param { Boolean } params[]['allowAppModify'] 当modifyType&#x3D;1时，是否同时允许应用更新
 */
export const  beforeSetDataTableModifyType =async (params) => {
    // send request
    return awaitWrap(http.post(api.config_beforesetdatatablemodifytype, params))
}

/**
 * 更新数据更新方式设置
 * @param { Array } params 请求参数
 * @param { Integer } params[]['tblWid'] 表格的wid，t_meta_table表
 * @param { String } params[]['objectName'] 模型名称
 * @param { String } params[]['displayName'] 显示名称
 * @param { Integer } params[]['modifyType'] 更新方式 1 ETL更新  2 应用更新
 * @param { Boolean } params[]['allowAppModify'] 当modifyType&#x3D;1时，是否同时允许应用更新
 */
export const  setDataTableModifyType =async (params) => {
    // send request
    return awaitWrap(http.post(api.config_setdatatablemodifytype, params))
}

/**
 * 数据更新方式设置
 * @param { Array } params 请求参数
 */
export const  queryDataTableModifyType =async (params) => {
    // send request
    return awaitWrap(http.get(api.config_querydatatablemodifytype, params))
}

/**
 * 查询ETL数据维护设置
 * @param { Array } params 请求参数
 */
export const  queryETLConfigType =async (params) => {
    // send request
    return awaitWrap(http.get(api.config_queryetlconfigtype, params))
}

/**
 * 查询ETL数据维护设置
 * @param { Array } params 请求参数
 * @param { String } params[]['objectName'] 模型名称
 * @param { String } params[]['displayName'] 显示名称
 * @param { Boolean } params[]['allowEtlTransport'] 允许ETL传输
 * @param { Boolean } params[]['allowEtlModify'] 允许更新
 * @param { Boolean } params[]['allowEtlPreDelete'] 允许预删除
 * @param { Boolean } params[]['disabledDelete'] 是否允许界面预删除 默认false（允许）
 * @param { Boolean } params[]['disabledModify'] 是否允许界面修改，默认false (允许)
 * @param { Boolean } params[]['disabledTransport'] 是否允许界面传输，默认false (允许)
 */
export const  setETLConfigType =async (params) => {
    // send request
    return awaitWrap(http.post(api.config_setetlconfigtype, params))
}

/**
 * 恢复回收站中的数据
 * @param { Object } params 请求参数
 * @param { String } params['type'] 模型对象
 * @param { Array } params['ids'] 
 */
export const  recoveryRecycleData =async (params) => {
    // send request
    return awaitWrap(http.post(api.config_recoveryrecycledata, params))
}

/**
 * 获取当前租户的状态
 * @param { Array } params 请求参数
 */
export const  getSchoolStatus =async (params) => {
    // send request
    return awaitWrap(http.get(api.config_getschoolstatus, params))
}

/**
 * 设置当前租户的状态
 * @param { Object } params 请求参数
 * @param { Integer } params['schoolId'] 租户ID
 * @param { String } params['schoolCode'] 租户编码
 * @param { Boolean } params['status'] 当前状态 true 开启，false 关闭
 */
export const  setSchoolStatus =async (params) => {
    // send request
    return awaitWrap(http.post(api.config_setschoolstatus, params))
}

/**
 * 获取当前ETL传输开关状态
 * @param { Array } params 请求参数
 */
export const  getEtlTransportStatus =async (params) => {
    // send request
    return awaitWrap(http.get(api.config_getetltransportstatus, params))
}

/**
 * 设置当前ETL传输开关状态
 * @param { Object } params 请求参数
 * @param { Integer } params['schoolId'] 租户ID
 * @param { Boolean } params['transportStatus'] 传输开关 true 开启 false 关闭
 */
export const  setEtlTransportStatus =async (params) => {
    // send request
    return awaitWrap(http.post(api.config_setetltransportstatus, params))
}

