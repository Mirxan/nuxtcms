import ApiService from './api.service'
import { TokenService } from './storage.service'

const PostService = {
	// cms 
	postList(){
		return ApiService.get(process.env.API_URL+'/api/cms/post');
	}
};

export {PostService};
