<template>
    <div class="home">
        AccountData
    </div>
</template>

<script lang="ts">
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {Component,Vue} from 'vue-property-decorator'

    @Component({
        components: {}
    })
    export default class AccountData extends Vue{
    }
</script>
