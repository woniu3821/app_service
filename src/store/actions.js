import ajax from "@utils/ajax";
import { GET_PRIVATE_CATEGORY } from "./types";
import { awaitWrap } from "@utils";

import { initPrivateCategory } from "@api/service";

import { Message } from "iview";

export default {
    // 导出数据
    async [GET_PRIVATE_CATEGORY]({ commit }, params) {
        const [err, data] = await initPrivateCategory(params);
        if (err) {
            const msg = err || "获取应用分类失败";
            Message.error(msg);
        }
        commit("setTypeList", data);
    }
};
