<template>
    <div class="container">
        <div class="toDo">
            <div class="toDo-block">
                <h1>To Do</h1>
                <p class="index">{{ 1 }}</p>
            </div>
            <hr />
        </div>
        <div class="task" v-for="num in id" :key="num + Math.random">
            <div class="task-name">
                <input class="checkbox" type="checkbox" />
                <p>{ name }</p>
            </div>
            <button class="remove">Remove</button>
        </div>
        <div class="done">
            <div class="done-block">
                <h1>Done</h1>
                <p class="index">{{ 0 }}</p>
            </div>
            <hr />
        </div>
        <div class="task" v-for="num in id" :key="num + Math.random">
            <div class="task-name">
                <input class="checkbox" type="checkbox" checked />
                <p>{ name }</p>
            </div>
            <button class="remove">Remove</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            id: 1,
        };
    },
    methods: {
        getName() {},
    },
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
.container {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    height: 100%;
    .task {
        @extend %toDoStyle;
        flex-direction: row;
        margin: 0;
        .task-name {
            width: 45%;
            display: flex;
            gap: 10px;
            .checkbox {
                width: 20px;
                cursor: pointer;
            }
        }
        .remove {
            width: 70px;
            height: 30px;
            background-color: #2b2b2b;
            color: #fff;
            border: none;
            border-radius: 2px;
            transition: all 0.2s ease;
            cursor: pointer;
        }
        .remove:hover {
            background-color: #454545;
        }
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
