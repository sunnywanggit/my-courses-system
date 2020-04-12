<template>
    <div class="layout-header">
        <el-row>
            <!--            头部导航左侧部分-->
            <el-col :xs="10" :sm="12" :md="14" :lg="16" :xl="18">
                <div class="system-info">
                    <span class="title">课程管理系统</span>
                </div>
            </el-col>

            <!--            头部导航右侧部分-->
            <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
                <el-dropdown class="system-user" @command="userCommand">
                    <span class="userinfo-inner">
                        <img :src="require('@/assets/'+getUser.key+'.jpg')" alt>
                        {{getUser.username}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="usercenter">个人中心</el-dropdown-item>
                        <el-dropdown-item divided command="logout">注销登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {State, Getter, Mutation, Action} from "vuex-class";

    @Component({
        components: {}
    })
    export default class LayoutHeader extends Vue {
        @Getter('user') getUser:any;

        userCommand(command:string):void{
            // console.log(command);
            //前往个人中心页面
            if(command==="usercenter"){
                this.$router.push('/user')
            }

            //点击注销，前往登录页面
            if(command==='logout'){
                localStorage.removeItem('tsToken')
                this.$router.push('/login')
            }
        }

        created(): void {
            // console.log(this.getUser);
        }
    }
</script>
<style lang="scss" scoped>
    .layout-header {
        background: #495060;
        line-height: 64px;
        height: 64px;
    }

    .system-info {
        text-align: left;

        .title {
            margin-left: 20px;
            font-size: 18px;
            font-weight: bold;
            color:#fff;
            line-height: 64px;
        }
    }
    .system-user {
        text-align: right;
        float: right;
        padding-right: 16px;
        .userinfo-inner {
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            img {
                width: 40px;
                height: 40px;
                border-radius: 20px;
                margin: 10px 0px 10px 10px;
                float: right;
            }
        }
    }
</style>














