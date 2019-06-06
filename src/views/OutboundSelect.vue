<template>
    <div class="outbound-select">
        <div class="wrapper">
            <div class="left mr-15">
  <!--               <div class="title tabs">
                    <div
                        :class="['tab-item',tabs==0?'active':'']"
                        @click="tabChange(0)"
                    >私有云应用</div>
                    <div
                        @click="tabChange(1)"
                        :class="['tab-item',tabs==1?'active':'']"
                    >私有云应用</div>
                </div>
                <div class="tabs_wrapper ps-10">
                    <Row
                        type="flex"
                        justify="space-between"
                    >
                        <Input
                            search
                            placeholder="请输入应用名称/应用ID/开发者..."
                            style="width:260px;"
                            @on-search="queryList"
                        />
                        <div
                            v-if="tabs==0"
                            class="plat_type"
                        >
                            <label class="mr-10">应用分类</label>
                            <Select
                                v-model="sort"
                                placeholder="请选择"
                                style="width:110px"
                            >
                                <Option :value="-1">
                                    请选择
                                </Option>
                                <Option
                                    v-for="(option, index) in sortList"
                                    :value="option.value"
                                    :key="index"
                                >
                                    {{ option.label }}
                                </Option>
                            </Select>
                        </div>
                    </Row>

                    <div v-if="tabs==0">
                        0
                    </div>
                    <div v-if="tabs==1">
                        1
                    </div>

                </div> -->

                <BaseTabs v-model="tabs">
                    <BaseTab label="私有云应用">
                    111
                    </BaseTab>
                    <BaseTab label="公有云应用">
                    3222
                    </BaseTab>
                </BaseTabs>
            </div>
            <div class="right">
                <p class="title ptb-5 plr-10">已选应用 16</p>
                <ul class="content">
                    <li
                        v-for="(item,index) in selectList"
                        :key="index"
                    >
                        <p class="head">
                            评教结果管理评教结果管理
                        </p>
                        <p class="info-icon cursor">
                            <Icon
                                size="18"
                                color="#2296F3"
                                type="md-information-circle"
                            />
                        </p>
                        <p class="version">2.3.5_TR3</p>
                        <p class="close cursor">
                            <Icon
                                size="18"
                                color="#CDCED4"
                                type="md-close"
                            />
                        </p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
import { } from "@api/service";
export default {
    components: {},
    name: "OutboundSelect",
    props: {},
    data () {
        return {
            tabs: 0,
            sort: -1,
            sortList: [],
            selectList: [1, 2, 3, 4, 5, 6, 7]
        };
    },
    computed: {},
    methods: {
        tabChange (tab) {
            this.tabs = tab;
        },
        queryList () {

        }
    },
    mounted () { }

}
</script>
<style lang="stylus" scoped>
.outbound-select {
    .wrapper {
        display: flex;
        justify-content: space-between;
        height: 485px;
        .left{
            width:600px;
            }
        .right {
            display: flex;
            flex-direction: column;
            border: 1px solid $grey-v1;
            border-radius: 4px;
            .title {
                font-size: 16px;
                height: 41px;
                line-height: 31px;
                background: #F5F7FA;
            }
        }
        // .left {
        //     width: 600px;
        //     .tabs {
        //         display: flex;
        //         border-bottom: 1px solid $grey-v1;
        //         .tab-item {
        //             border-radius: 4px 4px 0 0;
        //             cursor: pointer;
        //             font-size: 14px;
        //             height: 41px;
        //             line-height: 41px;
        //             padding: 0 10px;
        //             text-align: center;
        //             line-height: 40px;
        //             transition: background 0.3s;
        //             border-right: 1px solid $grey-v1;
        //         }
        //         .tab-item:hover {
        //             background: $grey-v1;
        //         }
        //         .tab-item:last-child {
        //             border-right: none;
        //         }
        //         .tab-item.active {
        //             color: $primary-color;
        //             background: #fff;
        //             border-right: 1px solid $grey-v1;
        //         }
        //         .tab-item.active:hover {
        //             background: $grey-v1;
        //         }
        //     }
        // }
        .right {
            flex: 1;
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