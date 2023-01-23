<template>
    <div class="tasks">
        <div class="task-name">
            <input @click="transfer" class="checkbox" type="checkbox" :checked="isChecked" />
            <p>{{ name }}</p>
        </div>
        <button class="remove" @click="remove">Remove</button>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        name: String,
        isChecked: Boolean,
    },
    data() {
        return {};
    },
    methods: {
        remove() {
            this.$store.commit('removeTasks', this.id);
        },
        transfer() {
            this.$store.commit('transferTask', this.id);
        },
    },
};
</script>

<style lang="scss">
.tasks {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

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
</style>
