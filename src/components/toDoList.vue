<template>
    <div class="container">
        <div class="header">
            <p class="header-logo">ToDo List</p>
            <input type="text" class="header-input" v-model="taskName" />
            <button class="header-btn" @click="getTask()">ADD A NEW TASK</button>
        </div>
        <div class="TODO">
            <to-do-tasks />
        </div>
    </div>
</template>

<script>
import ToDoTasks from './ToDoTasks.vue';
export default {
    components: { ToDoTasks },
    data() {
        return {
            taskName: '',
        };
    },
    methods: {
        getTask() {
            this.taskName
        },
    },
};
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    .header {
        margin: 0;
        width: 100%;
        height: 60px;
        background-color: #2b2b2b;
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        .header-logo {
            font-family: 'Courier New', Courier, monospace;
            font-size: 25px;
            font-weight: 200;
            cursor: default;
            display: flex;
            margin-right: 100px;
            color: #fff;
        }
        .header-input {
            width: 200px;
            height: 25px;
            border: none;
            border-radius: 1px;
            font-size: 15px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        .header-btn {
            width: 120px;
            height: 30px;
            border: none;
            font-size: 12px;
            cursor: pointer;
            border-radius: 1px;
            background-color: rgb(25, 186, 239);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.2s ease;
        }
        .header-btn:hover {
            background-color: rgb(95, 212, 251);
        }
    }
    .toDoBody {
        margin: 30px 0;

        width: 100%;
    }
}
</style>
