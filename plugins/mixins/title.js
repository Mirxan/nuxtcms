import Vue from 'vue'
const Title = {
    install (Vue, Options){
        Vue.mixin({
            methods:{
                getTitle(title){
                	return title;
                }
            }
        })
    }
}

Vue.use(Title);