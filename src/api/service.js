/* eslint-disable */
/**
 * 本文件由工具自动生成，请勿随意改动！！！
 * @name CMP Devops API
 * @description The API definition for the Devops Console of Cloud Manage Platform.
 * @tutorial public/wec-devops-superapp.yaml
 */
import api from '@api/api'
import http from '@utils/ajax'
import { awaitWrap } from "@utils";

/**
 * 根据租户名称、类型查询学校列表
 * @param { Object } params 请求参数
 * @param { String } params['searchKey'] 搜索关键字
 * @param { Integer } params['schoolType'] 学校类型。0：全部；1：新私有云平台；2：校端云平台
 * @param { Integer } params['pageNumber'] 分页页码
 * @param { Integer } params['pageSize'] 分页大小
 */
export const  querySchool =async (params) => {
    // send request
    return awaitWrap(http.post(api.school_queryschool, params))
}

/**
 * 根据dubbo接口获取所有学校，初始化下拉学校列表
 * @param { Object } params 请求参数
 * @param { String } params['searchKey'] 
 */
export const  initAllSchool =async (params) => {
    // send request
    return awaitWrap(http.get(api.school_initallschool, params))
}

/**
 * 保存学校配置信息，包括新增和修改
 * @param { Object } params 请求参数
 * @param { String } params['schoolCode'] 学校代码
 * @param { Integer } params['schoolType'] 学校类型。1：新私有云平台；2：校端云平台
 * @param { String } params['schoolName'] 学校名称
 */
export const  saveSchool =async (params) => {
    // send request
    return awaitWrap(http.post(api.school_saveschool, params))
}

/**
 * 查询学校基础信息
 * @param { Object } params 请求参数
 * @param { String } params['schoolCode'] 
 */
export const  selectSchool =async (params) => {
    // send request
    return awaitWrap(http.get(api.school_selectschool, params))
}

/**
 * 读取私有云可推送的应用
 * @param { Object } params 请求参数
 * @param { String } params['searchKey'] 搜索关键字
 * @param { String } params['categoryId'] 应用分类id
 * @param { String } params['schoolCode'] 学校代码
 * @param { Integer } params['pageNumber'] 分页页码
 * @param { Integer } params['pageSize'] 分页大小
 */
export const  readPrivateAppForPush =async (params) => {
    // send request
    return awaitWrap(http.post(api.pushapp_readprivateappforpush, params))
}

/**
 * 初始化私有云应用类别列表
 * @param { Array } params 请求参数
 */
export const  initPrivateCategory =async (params) => {
    // send request
    return awaitWrap(http.get(api.pushapp_initprivatecategory, params))
}

/**
 * 读取公有云可推送的应用
 * @param { Object } params 请求参数
 * @param { String } params['searchKey'] 搜索关键字
 * @param { String } params['schoolCode'] 学校代码
 * @param { Integer } params['pageNumber'] 分页页码
 * @param { Integer } params['pageSize'] 分页大小
 */
export const  readPublicAppForPush =async (params) => {
    // send request
    return awaitWrap(http.post(api.pushapp_readpublicappforpush, params))
}

/**
 * 确认出库到学校
 * @param { Object } params 请求参数
 * @param { String } params['schoolCode'] 学校代码
 * @param { Array } params['privateAppList'] 
 * @param { Array } params['publicAppList'] 
 */
export const  pushSchoolApp =async (params) => {
    // send request
    return awaitWrap(http.post(api.pushapp_pushschoolapp, params))
}

/**
 * 查询已接入的私有云应用
 * @param { Object } params 请求参数
 * @param { String } params['schoolCode'] 学校id
 * @param { String } params['categoryId'] 应用分类id
 * @param { String } params['searchKey'] 搜索关键字，可模糊查询应用id和名称
 * @param { Integer } params['isPurchaseWeb'] 是否出库pc服务。0:否；1：是
 * @param { Integer } params['isPurchaseMobile'] 是否出库移动服务。0:否；1：是
 * @param { Integer } params['parchaseStatus'] 接入状态(0：未接入；1：已接入；2：全部)
 * @param { Integer } params['pageNumber'] 分页页码
 * @param { Integer } params['pageSize'] 分页大小
 */
export const  queryPrivateApp =async (params) => {
    // send request
    return awaitWrap(http.post(api.school_queryprivateapp, params))
}

/**
 * 查询已接入的公有云应用
 * @param { Object } params 请求参数
 * @param { String } params['schoolCode'] 学校id
 * @param { String } params['searchKey'] 搜索关键字，可模糊查询应用id和名称
 * @param { Integer } params['pageNumber'] 分页页码
 * @param { Integer } params['pageSize'] 分页大小
 */
export const  queryPublicApp =async (params) => {
    // send request
    return awaitWrap(http.post(api.school_querypublicapp, params))
}

/**
 * 检查私有云应用所需的api是否存在
 * @param { Object } params 请求参数
 * @param { Array } params['privateApps'] 
 */
export const  checkAppApi =async (params) => {
    // send request
    return awaitWrap(http.post(api.pushapp_checkappapi, params))
}

/**
 * 查询学校已推送的应用信息
 * @param { Object } params 请求参数
 * @param { Array } params['schoolCodes'] 要查询的学校代码列表
 */
export const  getSchoolPushedApps =async (params) => {
    // send request
    return awaitWrap(http.post(api.restful_getschoolpushedapps, params))
}

/**
 * 设置学校应用接入状态
 * @param { Object } params 请求参数
 * @param { String } params['schoolCode'] 学校代码
 * @param { String } params['superappId'] 应用id
 */
export const  setAppPurchaseStatus =async (params) => {
    // send request
    return awaitWrap(http.post(api.restful_setapppurchasestatus, params))
}

