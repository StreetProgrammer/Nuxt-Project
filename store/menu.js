
export const state = () => ({
    isMenuOpen: false
  })

  export const getters = {
    getIsMenuOpen(state) {
        return state.isMenuOpen 
    }
  }
  
  export const mutations = {
    setMenuStatus(state){
        state.isMenuOpen = !state.isMenuOpen
    },
  }

  export const actions = {
    toggle(context) {
      context.commit('setMenuStatus')
    },
  }