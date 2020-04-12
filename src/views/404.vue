<template>
    <div class="home">
       404
    </div>
</template>

<script lang="ts">
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {Component,Vue} from 'vue-property-decorator'

    @Component({
        components: {}
    })
    export default class Errors extends Vue{
    }
</script>
