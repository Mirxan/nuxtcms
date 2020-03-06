export default ({route,redirect,store}) => {
	if (store.state.token){
		if (route.name == 'login') {
			return redirect('/cms/dashboard');
		}
	}
}
