const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined
const TOKEN_KEY = 'token'
export default ({ app }, inject) => {
	// inject('saveToken', (token) => {
	// 	if(process.client){
	// 		Cookie.set(TOKEN_KEY,token);
	// 	}
	// })
	// inject('getToken', () => {
	// 	if(process.client){
	// 		return Cookie.get(TOKEN_KEY);
	// 	}
	// })
	// inject('removeToken', () => {
	// 	if(process.client){
	// 		Cookie.remove(TOKEN_KEY);
	// 	}
	// })
}
