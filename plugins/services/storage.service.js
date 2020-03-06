const Cookie = process.client ? require('js-cookie') : undefined
const cookieparser = process.server ? require('cookieparser') : undefined
const TOKEN_KEY = 'access_token'
const TokenService = {
	getToken() {
		if(process.client){
			return Cookie.get(TOKEN_KEY);
		}
	},
	saveToken(token) {
		if(process.client){
			Cookie.set(TOKEN_KEY,token)
		}
	},
	removeToken() {
		if(process.client){
			Cookie.remove(TOKEN_KEY)
		}
	},
};

export {TokenService}
