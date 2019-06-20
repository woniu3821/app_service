<template>
    <div class="base-select">
        <div class="input">
            <Input
                v-model="checkAllGroupText"
                @on-focus="focus"
                @on-blur="blur"
                icon="md-arrow-dropdown"
                placeholder="请选择"
                readonly
            ></Input>
        </div>
        <transition name="slide">
            <div class="slide" v-show="showSlide">
                <div class="check_item">
                    <Checkbox
                        :indeterminate="indeterminate"
                        :value="checkAll"
                        @click.prevent.native="handleCheckAll"
                    >
                        <label>全选</label>
                    </Checkbox>
                </div>
                <div>
                    <CheckboxGroup :value="value" @on-change="checkAllGroupChange">
                        <div v-for="(item, index) in list" :key="index" class="check_item">
                            <Checkbox :label="item.serviceId" :disabled="item.hasPurchased === 1">
                                {{ item | filterName }}
                            </Checkbox>
                        </div>
                    </CheckboxGroup>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import {} from "@api/service";

function getServiceName(item) {
    if (item) {
        let { isWebService, isMobileService, serviceName } = item;
        let text = "";
        if (isWebService) {
            text = "（PC）";
        }
        if (isMobileService) {
            text = "（移动）";
        }
        if (isWebService && isMobileService) {
            text = "（PC/移动）";
        }
        return (serviceName += text);
    }
    return "";
}

export default {
    components: {},
    name: "BaseSelect",
    props: {
        list: {
            type: Array,
            default: () => []
        },
        value: {
            type: Array,
            default: () => []
        }
    },
    filters: {
        filterName(item) {
            return getServiceName(item);
        }
    },
    data() {
        return {
            showSlide: false,
            select: "",
            checkAll: false,
            indeterminate: false,
            oldVlaue: []
        };
    },
    computed: {
        checkAllGroupText() {
            return this.value
                .map(id => {
                    for (const item of this.list) {
                        if (item.serviceId === id) {
                            return getServiceName(item);
                        }
                    }
                })
                .join(",");
        }
    },
    methods: {
        checkAllGroupChange(data) {
            if (data.length === this.list.length) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (data.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            } else {
                this.indeterminate = false;
                this.checkAll = false;
            }
            this.$emit("on-change", data);
            this.$emit("input", data);
        },
        handleCheckAll() {
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if (this.checkAll) {
                const data = this.list.map(it => it.serviceId);
                this.$emit("input", data);
                this.$emit("on-change", data);
            } else {
                const data = this.list
                    .filter(item => item.hasPurchased === 1)
                    .map(it => it.serviceId);
                this.$emit("input", data);
                this.$emit("on-change", data);
            }
        },
        focus() {
            this.showSlide = true;
        },
        blur() {
            this.showSlide = false;
        }
    },
    mounted() {
        // window.addEventListener('onscroll', () => {
        //     this.blur()
        // })
    }
};
</script>
<style lang="stylus" scoped>
.base-select {
    width: 100%;
    .input {
        position: relative;
    }
    .slide {
        background: #fff;
        width: 224px;
        position: fixed;
        margin-top: 5px;
        z-index: 1000;
        box-shadow: $shadow-v1;
        border-radius: 3px;
        padding: 5px 0;
        max-height: 250px;
        overflow-y: auto;
        .check_item {
            cursor: pointer;
            >>>.ivu-checkbox-wrapper {
                margin-right: 0;
            }
            >>>.ivu-checkbox-group-item, >>>.ivu-checkbox-default {
                padding: 6px 10px;
                display: block;
                transition: 0.3s;
                box-sizing: border-box;
                ellipsis();
            }
            >>>.ivu-checkbox-group-item:hover, >>>.ivu-checkbox-default:hover {
                background: #F0FAFF;
            }
        }
    }
}
</style>
