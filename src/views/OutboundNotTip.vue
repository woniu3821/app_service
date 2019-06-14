<template>
    <div class="outbound-not-tip">
        <Tooltip placement="top" theme="light" max-width="400" always :disabled="disabled">
            <slot></slot>
            <div slot="content">
                <div class="card">
                    <p class="title">
                        <Icon type="md-close-circle" color="#ed4014" size="20" />
                        <span>无法出库</span>
                    </p>
                    <ul class="has__push-wrapper ">
                        <li v-for="(item, index) in apiList" :key="index">
                            <dl>
                                <dt class="mb-15">
                                    {{ item.appName }}应用
                                    缺少以下API，请联系智校云平台管理员注册接口后再出库
                                </dt>
                                <dd v-for="child in item.missApiList" :key="child.apiId">
                                    . {{ child.apiName }} {{ child.apiUrl }}
                                </dd>
                            </dl>
                        </li>
                    </ul>
                    <div class="btn mtb-10">
                        <Button type="primary" @click.native="close">我知道了</Button>
                    </div>
                </div>
            </div>
        </Tooltip>
    </div>
</template>
<script>
import {} from "@api/service";
import { mapState } from "vuex";
export default {
    components: {},
    name: "OutboundNotTip",
    props: {},
    data() {
        return {
            disabled: true
        };
    },
    computed: {
        ...mapState(["apiList"])
    },
    watch: {
        "apiList.length"(length) {
            this.disabled = length === 0;
        }
    },
    methods: {
        close() {
            this.$emit("on-click");
            this.$store.commit("changeTipStatus", 1);
        }
    }
};
</script>
<style lang="stylus" scoped>
>>>.ivu-card-head {
    border-bottom: none;
}
.outbound-not-tip {
    display: inline-block;
}
.card {
    width: 360px;
    border-radius: 5px;
    padding: 10px;
    .title {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
    }
}
.has__push-wrapper {
    max-height: 300px;
    overflow: auto;
    li {
        dl {
            margin-bottom: 10px;
            dd {
                color: #ff9900;
                font-size: 12px;
            }
        }
    }
}
.btn {
    text-align: right;
}
</style>
