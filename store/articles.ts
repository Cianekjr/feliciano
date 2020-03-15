import { Article } from '~/models/definitions'

export interface ArticlesState {
  articles: Article[],
  pages: Number
}

export const state = (): ArticlesState => ({
  articles: [],
  pages: null
})

export const actions = {
  async getArticles ({ commit }: any, { $axios, limit, offset } : any) {
    const response = await $axios?.get('/api/getArticles', {
      params: {
        limit,
        offset
      }
    })
    commit('setArticles', response?.data || {})
  }
}

export const mutations = {
  setArticles (state: ArticlesState, { articles, pages }: { articles: [], pages: Number}) {
    state.articles = articles
    state.pages = pages
  }
}

export const getters = {
  articles: (state: ArticlesState) => state.articles,
  pages: (state: ArticlesState) => state.pages
}
