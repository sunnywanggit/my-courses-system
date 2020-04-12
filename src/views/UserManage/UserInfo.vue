<template>
    <div class="home">
        UserInfo
    </div>
</template>

<script lang="ts">
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        components: {}
    })
    export default class UserInfo extends Vue {
    }
</script>
