<template>
    <div class="layout">
        <LayoutHeader></LayoutHeader>
        <Content>
            <Sidebar slot="left"></Sidebar>
            <router-view slot="content"></router-view>
        </Content>
    </div>
</template>

<script lang="ts">
    import {Component,Vue} from 'vue-property-decorator'
    import LayoutHeader from './LayoutHeader.vue'
    import Content from "@/views/Layout/Content.vue";
    import Sidebar from "@/views/Layout/Sidebar.vue";

    @Component({
        components: {LayoutHeader,Content,Sidebar}
    })
    export default class Index extends Vue{
    }
</script>
