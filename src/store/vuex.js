import { v4 } from 'uuid';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [],
    },

    getters: {
        getTask(state) {
            // получаем tasks из state
            return state.tasks.filter((task) => {
                if (task.isChecked === false) {
                    return true;
                } else {
                    return false;
                }
            });
        },
        getDone(state) {
            return state.tasks.filter((task) => {
                if (task.isChecked === true) {
                    return true;
                } else {
                    return false;
                }
            });
        },
    },

    mutations: {
        // payload - то что отправили из ToDoList
        setTask(state, payload) {
            // v4 - либа для генерации рандомных id
            const task = {
                id: v4(),
                name: payload,
                isChecked: false,
            };
            state.tasks.push(task);
        },
        removeTasks(state, payload) {
            // в state.tasks записывается отфильтрованное условие
            // (если taskId (поочереди перебирает все task) == payload(id  на который нажали) возвращаем false иначе true)
            state.tasks = state.tasks.filter((task) => {
                if (task.id === payload) {
                    return false;
                } else {
                    return true;
                }
            });
        },
        // перенос в done и обратно
        transferTask(state, payload) {
            state.tasks = state.tasks.map((task) => {
                // если task id = на которое нажали
                if (task.id === payload) {
                    // в task меняем поле isChecked на НЕ isChecked
                    const newTask = {
                        id: task.id,
                        name: task.name,
                        isChecked: !task.isChecked,
                    };
                    return newTask;
                    // или
                    // return { ...task, isChecked: !task.isChecked };
                } else {
                    return task;
                }
            });
        },
    },
    actions: {},
    modules: {},
});
