import { MutationTree } from 'vuex'

export const state = () => ({
  loading: true,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  stopLoading(state) {
    state.loading = false
  },
}
