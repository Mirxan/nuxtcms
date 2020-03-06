import { PostService } from '../plugins/services/post.service'
import store from "./index"

const state = {
	posts: {},
};

const getters = {
	getPosts(state){
		return state.posts
	}
};

const actions = {
	async getPostsAction({commit}, payload){
		try {
			let posts = await PostService.postList(payload);
			await commit('setPosts', posts.data)
			return true
		} catch (error) {
			return false
		}
	}
};

const mutations = {
	setPosts(state, posts){
		state.posts = posts
	}
};

export const post = {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
