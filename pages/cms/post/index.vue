<template>
	<div class="content-wrapper">
	    <CardTitle title="Post List"/>
	    <section class="content">
	        <div class="container-fluid">
          		<div class="card">
              		<div class="card-header">
		              	<nuxt-link to="/cms/post/create" class="btn btn-outline-info">
		              		<i class="fas fa-plus"></i>
			              	add new
		              	</nuxt-link>
              		</div>
	                <!-- /.card-header -->
              		<div class="card-body">
              			<table id="example2" class="table table-bordered table-hover">
			                <thead>
			                <tr>
			                  <th>Rendering engine</th>
			                  <th>Browser</th>
			                  <th>Platform(s)</th>
			                  <th>Engine version</th>
			                  <th>CSS grade</th>
			                </tr>
			                </thead>
			                <tbody>
				                <tr>
			                  		<td>Gecko</td>
			                  		<td>Firefox 1.5</td>
			                  		<td>Win 98+ / OSX.2+</td>
			                  		<td>1.8</td>
			                  		<td>A</td>
				                </tr>
			                </tbody>
			              </table>
              		</div>
	          	</div>
	        </div>
	    </section>
  	</div>
</template>
<script>
	import { TokenService } from './../../../plugins/services/storage.service'
	import {mapActions,mapGetters} from 'vuex'
	export default{
		layout:'admin',
		data(){
			return{
				posts:[]
			}
		},
		methods:{
			...mapActions('post',['getPostsAction']),
		},
		computed:{
			...mapGetters('post',['getPosts']),
		},
		async mounted(){
			await this.getPostsAction()
		}
	}
</script>