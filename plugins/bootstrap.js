import Vue from 'vue'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'
if (process.BROWSER_BUILD){
	require("bootstrap");
	require('admin-lte');
}
if(process.client){
	// SET THE BASE_URL OF THE API
	ApiService.init(process.env.API_URL);
	ApiService.mount401Interceptor();
	// IF TOKEN EXISTS SET HEADER
	if (TokenService.getToken()) {
		ApiService.setHeader();
		ApiService.mount401Interceptor();
	}
}