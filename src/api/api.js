/* eslint-disable */
/**
 * 本文件由工具自动生成，请勿随意改动！！！
 * @name SMMP bd APIS
 * @description The API definition for the SMMP bd of Cloud Manage Platform.
 * @tutorial http://172.16.7.110/swagger-resources/platform/wec-smmp/yaml/wec-smmp-bd.yaml
 */
const DEV_MODE = process.env.NODE_ENV === 'development'

const API_BASE = DEV_MODE ? '/wec-smmp-bd' : ''

const _basePath = (url) => {
    return `${API_BASE}${url}`
}

export default {
    data_query: _basePath('/data/query'), // 查询数据中心的数据列表
    data_add: _basePath('/data/add'), // 新增基础数据
    data_update: _basePath('/data/update'), // 修改基础数据
    data_beforedelete: _basePath('/data/beforeDelete'), // 删除基础数据前的检查
    data_delete: _basePath('/data/delete'), // 删除基础数据
    data_getbyid: _basePath('/data/getById'), // 根据ID获取数据详情
    data_gettreedata: _basePath('/data/getTreeData'), // 获取树形结构的数据，分级加载
    data_queryimporthistory: _basePath('/data/queryImportHistory'), // 查询导入历史
    dict_listdicttype: _basePath('/dict/listDictType'), // 获取所有字典类型
    dict_getwhole: _basePath('/dict/getWhole'), // 获取某个字典的详情
    dict_switchglobedict: _basePath('/dict/switchGlobeDict'), // 开启或关闭某个全局字典
    dict_getbyid: _basePath('/dict/getById'), // 获取某个字典的详情
    dict_add: _basePath('/dict/add'), // 新增字典数据
    dict_update: _basePath('/dict/update'), // 修改字典数据
    dict_delete: _basePath('/dict/delete'), // 删除字典数据
    dict_befordelete: _basePath('/dict/beforDelete'), // 删除字典数据前检查
    config_beforesetdatatablemodifytype: _basePath('/config/beforeSetDataTableModifyType'), // 更新方式设置前检查
    config_setdatatablemodifytype: _basePath('/config/setDataTableModifyType'), // 更新数据更新方式设置
    config_querydatatablemodifytype: _basePath('/config/queryDataTableModifyType'), // 数据更新方式设置
    config_queryetlconfigtype: _basePath('/config/queryETLConfigType'), // 查询ETL数据维护设置
    config_setetlconfigtype: _basePath('/config/setETLConfigType'), // 查询ETL数据维护设置
    config_recoveryrecycledata: _basePath('/config/recoveryRecycleData'), // 恢复回收站中的数据
    config_getschoolstatus: _basePath('/config/getSchoolStatus'), // 获取当前租户的状态
    config_setschoolstatus: _basePath('/config/setSchoolStatus'), // 设置当前租户的状态
    config_getetltransportstatus: _basePath('/config/getEtlTransportStatus'), // 获取当前ETL传输开关状态
    config_setetltransportstatus: _basePath('/config/setEtlTransportStatus'), // 设置当前ETL传输开关状态
}
