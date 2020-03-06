import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import {UserService} from "../plugins/services/user.service"
import { TokenService } from '../plugins/services/storage.service'
const Cookie = process.client ? require('js-cookie') : undefined
const cookieparser = process.server ? require('cookieparser') : undefined
// modules
import {post} from "./post.module"

Vue.use(Vuex)

const store = () => new Vuex.Store(
	{
		plugins:[
		],
		modules:{
			post
		},
		state:{
			rules:[],
			user:[],
			token:null,
			authenticationErrorCode: false,
			authenticationError: '',
			registerError: '',
		},
		getters:{
			getUser(state){
				return state.user
			},
			authenticationErrorCode(state){
				return state.authenticationErrorCode
			},
			authenticationError(state){
				return state.authenticationError
			},
			registerError(state){
				return state.registerError
			},
		},
		mutations:{
			logoutSuccess(state){
				state.token = '';
				// state.rules = [];
			},
			loginSuccess(state,user){
				state.token = user.token;
				state.authenticationErrorCode = false
				state.user = user.user;
				// state.rules = user.result.permissions;
			},
			loginError(state,user){
				state.authenticationErrorCode = user.data.error
				state.authenticationError = user.data.message
			},
			setUser(state,user){
				state.user = user
			},
			setToken(state,token){
				state.token = token
			}
		},
		actions:{
			async nuxtServerInit({commit,dispatch},{req}){
		        if (req.headers.cookie){
	          		const parsed = cookieparser.parse(req.headers.cookie);
	          		await commit('setToken',parsed.access_token);
		        }
		  	},
			async login({ commit }, userData){
				const user = await UserService.login(userData);
				if (user.data.error === true){
					await commit('loginError', user);
				}else{
					await commit('loginSuccess', user.data);
					// let routeHistory = router.history.current.query.redirect
					// this.$router.push(routeHistory && routeHistory != '/' ? routeHistory : '/')
				}
			},
			// register
			async register({ commit }, payload){
				const user = await UserService.register(payload);
				if(user.data.error){
					await commit('registerError', user.data);
				}else{
					await commit('loginSuccess', user.data);
				}
			}, 
			logout({ commit }){
				UserService.logout();
				commit('logoutSuccess');
				// this.$router.push('/login');
				location.replace('/login');
			},
			async actionUser({ commit }){
				try{
					const user = await UserService.userInfo();
					await commit('setUser', user.data.result);
				}catch(e){

				}
			}
		}
	}
)

export default store;
