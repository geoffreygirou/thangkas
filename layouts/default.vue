<script setup lang="ts">
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

let isCartHover = ref(false);
</script>
<template>
    <div id="MainLayout" class="w-full fixed z-50">
        <TopMenu />
        <div id="MainHeader" class="flex items-center w-full bg-white">
            <div
                class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto"
            >
                <NuxtLink to="/" class="min-w-[170px]">
                    <img width="170" src="/THANGKAExpress-logo.png" />
                </NuxtLink>

                <SearchBar />

                <NuxtLink to="/shoppingcart" class="flex items-center">
                    <button
                        class="relative md:block hidden"
                        @mouseenter="isCartHover = true"
                        @mouseleave="isCartHover = false"
                    >
                        <span
                            class="absolute flex items-center justify-center -right-[3px] top-0 bg-[#FF4646] h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full"
                        >
                            {{ userStore.cart.length }}
                        </span>
                        <div class="min-w-[40px]">
                            <Icon
                                name="ph:shopping-cart-simple-light"
                                size="33"
                                :color="isCartHover ? '#FF4646' : ''"
                            />
                        </div>
                    </button>
                </NuxtLink>

                <button
                    @click="userStore.isMenuOverlay = true"
                    class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200"
                >
                    <Icon name="radix-icons:hamburger-menu" size="33" />
                </button>
            </div>
        </div>
    </div>

    <Loading v-if="userStore.isLoading === true" />

    <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
    <slot />

    <Footer v-if="userStore.isLoading === false" />
</template>
