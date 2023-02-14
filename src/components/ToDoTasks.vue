<template>
    <div class="main-container">
        <div class="toDo">
            <div class="toDo-block">
                <h1>To Do</h1>
                <p class="index">{{ getTask.length }}</p>
            </div>
            <hr />
        </div>
        <div class="task">
            <ToDoItem
                v-for="item in getTask"
                :key="item.id"
                :id="item.id"
                :name="item.name"
                :isChecked="item.isChecked"
            />
        </div>
        <div class="done">
            <div class="done-block">
                <h1>Done</h1>
                <p class="index">{{ getDone.length }}</p>
            </div>
            <hr />
        </div>
        <div class="task">
            <ToDoItem
                v-for="item in getDone"
                :key="item.id"
                :id="item.id"
                :name="item.name"
                :isChecked="item.isChecked"
            />
        </div>
    </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        ToDoItem,
    },
    computed: mapGetters(['getTask', 'getDone']),
};
</script>

<style scoped lang="scss">
%toDoStyle {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
%toDoBlock {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main-container {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    height: 100%;
    .task {
        @extend %toDoStyle;
        margin: 0;
    }
    .index {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        border-radius: 100%;
        border: 2px solid black;
        width: 10px;
        height: 10px;
        padding: 5px;
        font-size: 13px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .toDo {
        @extend %toDoStyle;
        .toDo-block {
            @extend %toDoBlock;
        }
    }
    .done {
        @extend %toDoStyle;
        .done-block {
            @extend %toDoBlock;
        }
    }
    h1 {
        margin: 0;
        font-size: 25px;
    }
    hr {
        width: 50%;

        border: none;
        border-top: 1px solid black;
    }
}
</style>
