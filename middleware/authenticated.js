export default ({redirect,store}) => {
	if (!store.state.token) {
		return redirect('/login')
	}
}
