export const useUserStore = defineStore("user", {
    state: () => {
        return {
            isMenuOverlay: false,
            isLoading: false,
            cart: [],
            checkout: [],
        };
    },
    persist: true,
});
