<template>
    <div class="container--search">
        <input v-model="input" type="text" placeholder="Search..." class="container__input--search">
        <button @click="search" class="scontainer__button--search btn" type="submit" value="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            input: null,
        };
    },

    emits: ['search-input'],
    watch: {
        input(newValue) {
            if (newValue.length >= 3 || newValue.length === 0) {
                const self = this;
                self.$emit('search-input', { search: newValue, page: 1 });
            }
        }
    },


}
</script>

<style scoped lang="scss">
.container--search {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 8px;
}

.container__input--search {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    padding: 8px;
}

.container__button--search {
    background-color: #f5f5f5;
    border: none;
    width: fit-content;
    padding: 0px 10px;
    margin: 10px;
    cursor: pointer;
    border-radius: 25px;

    &:hover {
        background-color: RoyalBlue;
    }

}
</style>