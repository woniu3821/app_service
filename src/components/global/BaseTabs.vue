<template>
    <div class="base-tabs">
        <div class="tabs">
            <div
                v-for="(tab,index) in tabs"
                :key="index"
                :class="['tab-item',active===index?'active':'']"
                @click="tabChange(index)"
            >{{tab.label}}</div>
        </div>
        <div class="mb-10">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { } from "@api/service";
import { findComponentsDownward } from "@utils/assist"
export default {
    components: {},
    name: "BaseTabs",
    props: {
        value:{
            type:Number,
            default:0
        }
    },
    data () {
        return {
            tabList: [],
            active:0
        };
    },
    computed: {
        tabs () {
            const arr = [];
            for (let { label } of this.tabList) {
                arr.push({
                    label
                })
            }
            return arr;
        }
    },
    methods: {
        tabChange(index){
            this.active=index;
            this.$emit('input',index);
        }
    },
    mounted () {
        this.active=this.value;
        this.tabList = findComponentsDownward(this, 'BaseTab')
    }
}
</script>
<style lang="stylus" scoped>
.base-tabs {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid $grey-v1;
    border-radius: 4px;
    .tabs {
        display: flex;
        border-bottom: 1px solid $grey-v1;
        font-size: 16px;
        height: 41px;
        line-height: 31px;
        background: #F5F7FA;
        .tab-item {
            border-radius: 4px 4px 0 0;
            cursor: pointer;
            font-size: 14px;
            height: 41px;
            line-height: 41px;
            padding: 0 10px;
            text-align: center;
            line-height: 40px;
            transition: background 0.3s;
            border-right: 1px solid $grey-v1;
        }
        .tab-item:hover {
            background: $grey-v1;
        }
        .tab-item:last-child {
            border-right: none;
        }
        .tab-item.active {
            color: $primary-color;
            background: #fff;
            border-right: 1px solid $grey-v1;
        }
        .tab-item.active:hover {
            background: $grey-v1;
        }
    }
}
</style>