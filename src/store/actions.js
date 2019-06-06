import ajax from "@utils/ajax";
import { awaitWrap } from "@utils";

export default {
  // 导出数据
  async exportData({ commit }, data) {
    return awaitWrap(ajax.post("/wec-smmp-bd/data/export-data", data));
  }
};
