<template>
    <to-do-list />
</template>

<script>
import ToDoList from './components/ToDoList.vue';

export default {
    components: { ToDoList },
    name: 'App',
};
</script>

<style lang="scss">
html {
    height: 100%;
}

body {
    height: 100%;
    margin: 0;
}
</style>
