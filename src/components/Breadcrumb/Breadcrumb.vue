<template>
    <div class="breadcrumb">
        <ul class="list-reset flex text-white">
            <li
            v-for="(breadcrumb, idx) in breadcrumbList"
            :key="idx"
            @click="routeTo(idx)"
            :class="{'linked': !!breadcrumb.link}">

            {{ breadcrumb.name }} 

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Breadcrumb',
        data() {
            return {
                breadcrumbList: {},
            }
        },
        mounted () { this.updateList() },
        watch: { '$route' () { this.updateList() } },
        methods: {
        routeTo (pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
        },
        updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        list-style: none;
        padding: 0;
    }
    li {
        cursor: pointer;
        /* color: #42b983; */
    }
    li:last-child {
        cursor: default;
        pointer-events: none;
        opacity: 0.8;
    }
    li:not(:last-child):after {
        content: "/";
        margin: 10px;
        margin-right: 15px;
    }
</style>