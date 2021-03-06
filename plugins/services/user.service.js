import ApiService from './api.service'
import { TokenService } from './storage.service'

class AuthenticationError extends Error{
	constructor (errorCode,message){
		super(message)
		this.name = this.constructor.name
		this.errorCode = errorCode
	}
}
const UserService = {
	login: async function (userData){
		const requestData = {
			method: 'post',
			url: process.env.API_URL+'api/login',
			data: {
				email: userData.email,
				password: userData.password
			}
		};
		try {
			const response = await ApiService.customRequest(requestData);
			TokenService.saveToken(response.data.token);
			ApiService.setHeader();
			ApiService.mount401Interceptor();
			return response;
		} catch (error) {
			throw new AuthenticationError(error.data.status, error.data.message);
		}
	},
	/**
	 * REGISTER the user and store the access token to TokenService.
	 *
	 * @returns access_token
	 * @throws AuthenticationError
	 **/
	register: async function (userData){
		const requestData = {
			url: process.env.API_URL+'api/register',
			data: userData
		};
		try {
			const response = await ApiService.post(requestData.url,requestData.data);
			TokenService.saveToken(response.data.token);
			ApiService.setHeader();
			ApiService.mount401Interceptor();
			return response;
		} catch (error) {
			throw new AuthenticationError(error.data.status, error.data.message);
		}
	},
	/**
	 * Logout the current user by removing the token from storage.
	 *
	 * Will also remove `Authorization Bearer <token>` header from future requests.
	 **/
	logout(){
		// Remove the token and remove Authorization header from Api Service as well
		ApiService.post(process.env.API_URL+'api/logout');
		TokenService.removeToken();
		ApiService.removeHeader();
		// // NOTE: Again, we'll cover the 401 Interceptor a bit later.
		ApiService.unmount401Interceptor()
	},
	userInfo(){
		return ApiService.get(process.env.API_URL+'api/cms/user');
	}

};

export { UserService,AuthenticationError };
