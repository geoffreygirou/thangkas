<script setup lang="ts">
let searchItem = ref("");
let isSearching = ref(false);
let items = ref(null);
const searchByName = useDebounce(async () => {
    isSearching.value = true;
    items.value = await useFetch(
        `/api/prisma/search-by-name/${searchItem.value}`
    );
    isSearching.value = false;
}, 100);

const clearSearch = () => {
    searchItem.value = "";
    items.value = "";
    isSearching.value = false;
};

watch(
    () => searchItem.value,
    async () => {
        if (!searchItem.value) {
            setTimeout(() => {
                items.value = "";
                isSearching.value = false;
                return;
            }, 500);
        }
        if (searchItem.value !== "") {
            searchByName();
        }
    }
);
</script>
<template>
    <div id="search-bar" class="max-w-[700px] w-full md:block hidden">
        <div class="relative">
            <div
                class="flex items-center border-2 border-[#FF4646] rounded-md w-full"
            >
                <input
                    class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                    placeholder="kitchen accessories"
                    type="text"
                    v-model="searchItem"
                />
                <Icon
                    v-if="isSearching"
                    name="eos-icons:loading"
                    size="25"
                    class="mr-2"
                />
                <button
                    class="flex items-center h-[100%] p-1.5 px-2 bg-[#FF4646]"
                >
                    <Icon
                        name="ph:magnifying-glass"
                        size="20"
                        color="#ffffff"
                    />
                </button>
            </div>

            <div class="absolute bg-white max-w-[700px] h-auto w-full">
                <div
                    v-if="items && items.data"
                    v-for="item in items.data"
                    class="p-1"
                >
                    <NuxtLink
                        @click.prevent="clearSearch()"
                        :to="`/item/${item.id}`"
                        class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                    >
                        <div class="flex items-center">
                            <img
                                class="rounded-md"
                                width="40"
                                :src="item.url"
                            />
                            <div class="truncate ml-2">
                                {{ item.title }}
                            </div>
                        </div>
                        <div class="truncate">${{ item.price / 100 }}</div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
