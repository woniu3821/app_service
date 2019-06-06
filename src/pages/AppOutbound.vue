<template>
    <div class="app-outbound">
        <NavBar :model="[$route]" />
        <div class="outbound_search mt-10">
            <Input
                search
                placeholder="请输入租户名称"
                style="width:458px;"
                @on-search="queryList"
            />
        </div>
        <div class="add mt-25">
            <Button
                type="primary"
                size="large"
                @click.native="showCreate"
            >&nbsp;&nbsp;&nbsp;新建&nbsp;&nbsp;&nbsp;</Button>
        </div>
        <div class="table mt-10 mb-15">
            <Table
                stripe
                border
                :columns="columns1"
                :data="data1"
            ></Table>
            <Row>
                <Page
                    class="mt-15"
                    :total="totalSize"
                    :current="pageNumber"
                    show-elevator
                    @on-change="pageNumChange"
                    @on-page-size-change="pageSizeChange"
                />
            </Row>
        </div>

        <BaseModal
            v-model="showAddModal"
            title="新建"
            @on-cancel="cancelCreate"
            @on-ok="create"
            ok-text="新建"
        >

            <Form
                ref="formCreate"
                label-position="left"
                :label-width="80"
                :model="formCreate"
                :rules="formCreateValidate"
                class="plr-25"
            >
                <FormItem
                    label="学校名称"
                    prop="name"
                >
                    <Select
                        v-model="formCreate.name"
                        filterable
                        remote
                        :remote-method="searchSchool"
                        :loading="searchLoading"
                        placeholder="请选择..."
                    >
                        <Option
                            v-for="(option, index) in schoolList"
                            :value="option.value"
                            :key="index"
                        >
                            {{ option.label }}
                        </Option>
                    </Select>
                </FormItem>
                <FormItem
                    label="学校代码"
                    prop="code"
                >
                    <Input
                        v-model="formCreate.code"
                        placeholder="选择学校后显示"
                    ></Input>
                </FormItem>
                <FormItem
                    label="平台类型"
                    prop="type"
                >
                    <RadioGroup v-model="formCreate.type">
                        <Radio label="0">
                            <span>校端云平台</span>
                        </Radio>
                        <Radio label="1">
                            <span>新私有云平台</span>
                        </Radio>
                    </RadioGroup>
                </FormItem>
            </Form>
        </BaseModal>

        <BaseModal
            v-model="showTypeModal"
            title="修改平台类型"
            @on-cancel="cancelType"
            @on-ok="saveType"
            ok-text="保存"
        >
            <div class="plat_type">
                <label class="mr-10">平台类型</label>
                <RadioGroup v-model="type">
                    <Radio label="0">
                        <span>校端云平台</span>
                    </Radio>
                    <Radio label="1">
                        <span>新私有云平台</span>
                    </Radio>
                </RadioGroup>
            </div>
        </BaseModal>

        <BaseModal
            v-model="outBoundModal"
            title="应用出库"
            @on-cancel="cancelOutBound"
            @on-ok="saveOutBound"
            ok-text="保存"
            width="963px"
        >
            <OutboundSelect />
        </BaseModal>
    </div>
</template>
<script>
import { } from "@api/service";
import OutboundSelect from '@views/OutboundSelect.vue';

export default {
    meta: { name: "应用出库" },
    components: {
        OutboundSelect
    },
    name: "AppOutbound",
    props: {},
    data () {
        return {
            searchLoading: false,
            schoolList: [],
            totalSize: 0,
            pageNumber: 1,
            showAddModal: false,
            showTypeModal: false,
            outBoundModal: false,
            type: "0",
            formCreate: {
                name: "",
                code: "",
                type: "0"
            },
            columns1: [
                {
                    title: "学校名称",
                    key: "name"
                },
                {
                    title: "学校代码",
                    key: "age"
                },
                {
                    title: "学校平台类型",
                    key: "address",
                    filters: [
                        {
                            label: "新私有云平台",
                            value: 1
                        },
                        {
                            label: "校端云平台",
                            value: 2
                        }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                        const { age } = row;
                        if (value == 1) {
                            return age <= 20;
                        } else {
                            return age > 20;
                        }
                    }
                },
                {
                    title: "平台开通时间",
                    key: "address"
                },
                {
                    title: "已接入应用数",
                    key: "address",
                    align: "right"
                },
                {
                    title: "操作",
                    key: "address",
                    align: "center",
                    render: (h, row) => {
                        return (
                            <div>
                                <span class="split" onClick={() => this.showOutbound()} >应用出库</span>
                                <span class="split">详情</span>
                                <span class="split" onClick={() => this.showType()}>
                                    修改平台类型
                </span>
                            </div>
                        );
                    }
                }
            ],
            data1: [
                {
                    name: "John Brown",
                    age: 18,
                    address: "New York No. 1 Lake Park",
                    date: "2016-10-03"
                },
                {
                    name: "Jim Green",
                    age: 24,
                    address: "London No. 1 Lake Park",
                    date: "2016-10-01"
                },
                {
                    name: "Joe Black",
                    age: 30,
                    address: "Sydney No. 1 Lake Park",
                    date: "2016-10-02"
                },
                {
                    name: "Jon Snow",
                    age: 26,
                    address: "Ottawa No. 2 Lake Park",
                    date: "2016-10-04"
                }
            ]
        };
    },
    computed: {
        formCreateValidate () {
            return {
                name: { required: true, message: 'The name cannot be empty', trigger: 'change' },
                code: { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            }
        }
    },
    methods: {
        queryList (data) {
            console.log(data);
        },
        searchSchool () { },
        pageNumChange () { },
        pageSizeChange () { },
        showCreate () {
            this.showAddModal = true;
        },
        cancelCreate () {
            this.$refs.formCreate.resetFields();
            this.showAddModal = false;
        },
        create () {
            this.$refs.formCreate.validate((val) => {
                if (val) {
                    this.showAddModal = false;
                }
            })

        },
        showType () {
            this.showTypeModal = true;
        },
        cancelType () {
            this.showTypeModal = false;
        },
        saveType () {
            this.showTypeModal = false;
        },
        //应用出库
        showOutbound () {
            this.outBoundModal = true;
        },
        cancelOutBound () {
            this.outBoundModal = false;
        },
        saveOutBound () {

        }

    },
    mounted () { }
};
</script>
<style lang="stylus" scoped>
.plat_type {
    fon-size: 14px;
    display: flex;
    align-items: center;
    height: 50px;
}
.app-outbound {
    >>>.split {
        cursor: pointer;
        color: $primary-color;
    }
}
</style>
