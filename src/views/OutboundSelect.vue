<template>
  <div class="outbound-select">
    <div class="wrapper">
      <div class="left mr-15">
        <BasePanes v-model="tabs">
          <BasePane label="私有云应用">
            <div class="ps-10">123123</div>
          </BasePane>
          <BasePane label="公有云应用">
            <div>2222222222</div>
          </BasePane>
        </BasePanes>
      </div>
      <div class="right">
        <p class="title ptb-5 plr-10">已选应用 16</p>
        <ul class="content">
          <li v-for="(item, index) in selectList" :key="index">
            <p class="head">评教结果管理评教结果管理</p>
            <p class="info-icon cursor">
              <Icon size="18" color="#2296F3" type="md-information-circle" />
            </p>
            <p class="version">2.3.5_TR3</p>
            <p class="close cursor">
              <Icon size="18" color="#CDCED4" type="md-close" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {} from "@api/service";
export default {
  components: {},
  name: "OutboundSelect",
  props: {},
  data() {
    return {
      tabs: 0,
      sort: -1,
      sortList: [],
      selectList: [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7]
    };
  },
  computed: {},
  methods: {
    tabChange(tab) {
      this.tabs = tab;
    },
    queryList() {}
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.outbound-select {
  .wrapper {
    display: flex;
    justify-content: space-between;
    height: 485px;
    .left {
      width: 600px;
      display: flex;
    }
    .right {
      display: flex;
      flex-direction: column;
      border: 1px solid $grey-v1;
      border-radius: 4px;
      flex: 1;
      .title {
        font-size: 16px;
        height: 41px;
        line-height: 31px;
        background: #F5F7FA;
      }
      .content {
        flex-grow: 1;
        margin: 8px;
        overflow-y: auto;
        li {
          display: flex;
          height: 32px;
          border-bottom: 1px solid $grey-v1;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          font-size: 13px;
          .head {
            width: 100px;
            ellipsis();
          }
          .version {
            width: 100px;
            color: #CDCED4;
            ellipsis();
          }
        }
      }
    }
  }
  .plat_type {
    fon-size: 14px;
    display: flex;
    align-items: center;
  }
}
</style>
