<template>
	<div class="admin">
		<div class="wrapper">
			<AdminNav/>
			<AdminSideBar/>
	      	<nuxt/>
		  	<footer class="main-footer">
			    <strong>Copyright &copy; 2020 <a href="/">MIRO CMS PRO</a>.</strong>
			    All rights reserved.
		  	</footer>
		</div>
	</div>
</template>
<script>
	import AdminNav from './../components/crm/navbar/nav' 
	import AdminSideBar from './../components/crm/sidebar/sidebar' 
	import CardTitle from './../components/crm/CardTitle' 
	import { TokenService } from './../plugins/services/storage.service'
	import {mapActions,mapGetters} from 'vuex'
	export default{
		middleware:'authenticated',
		components:{
			AdminNav,
			AdminSideBar,
			CardTitle
		},
		data(){
			return{

			}
		},
		methods:{
			...mapActions(['actionUser'])
		},
		head(){
		    return{
	      		bodyAttrs: {
	          		class: 'hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed'
	      		},
	      // 		link: [
		     //  		{rel: 'stylesheet', href: ''}
			    // ],
			    // script: [
		     //  		{ src: '/dist/js/demo.js'}
			    // ],
		    }
	  	},
	  	computed:{
			...mapGetters(['getUser'])
		},
		async mounted(){
			await this.$store.commit('setToken',TokenService.getToken());
			await this.actionUser()
		}
	}
</script>
