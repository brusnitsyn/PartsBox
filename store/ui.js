export const state = () => ({
    menuCatalog: false
});

export const mutations = {
    switchMenuCatalog(state) {
        state.menuCatalog = !state.menuCatalog;
    }
};

export const actions = {
    switchMenuCatalog(vuexContext) {
        vuexContext.commit('switchMenuCatalog');
    }
};

export const getters = {
    menuCatalog(state) {
        return state.menuCatalog;
    }
};