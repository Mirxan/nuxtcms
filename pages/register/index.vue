<template>
	<div class="register-box">
	  <div class="register-logo">
	    <a href="#"><b>MIRO CMS PRO</b></a>
	  </div>

	  <div class="card">
	    <div class="card-body register-card-body">

	      <form @submit.prevent="registerForm">
	        <div class="input-group mb-3">
	          <input type="text" class="form-control" placeholder="Full name" v-model="form.name">
	          <div class="input-group-append">
	            <div class="input-group-text">
	              <span class="fas fa-user"></span>
	            </div>
	          </div>
	        </div>
	        <div class="input-group mb-3">
	          <input type="email" class="form-control" placeholder="Email" v-model="form.email">
	          <div class="input-group-append">
	            <div class="input-group-text">
	              <span class="fas fa-envelope"></span>
	            </div>
	          </div>
	        </div>
	        <div class="input-group mb-3">
	          <input type="password" class="form-control" placeholder="Password" v-model="form.password">
	          <div class="input-group-append">
	            <div class="input-group-text">
	              <span class="fas fa-lock"></span>
	            </div>
	          </div>
	        </div>
	        <div class="row">
	          <div class="col-8"></div>
	          <!-- /.col -->
	          <div class="col-4">
	            <button type="submit" class="btn btn-primary btn-block">Register</button>
	          </div>
	          <!-- /.col -->
	        </div>
	      </form>
	    </div>
	    <!-- /.form-box -->
	  </div><!-- /.card -->
	</div>
</template>
<script>
	import {mapActions, mapGetters} from "vuex";
	export default{
		data(){
			return{
				form:{
					name:null,
					email:null,
					password:null
				}
			}
		},
		computed:{
			...mapGetters(['registerError'])
		},
		head(){
		    return {
	      		bodyAttrs:{
	          		class: 'hold-transition register-page'
	      		},
		    }
	  	},
		methods:{
			...mapActions(["register"]),
			async registerForm(){
				if (this.form.name != null && this.form.email != null && this.form.password != null) {
					await this.register(this.form)
					if (this.registerError) {
						alert('Something went wrong!')
					}else{
						this.$router.push("/cms/dashboard");
					}
				}
			}
		},
	}
</script>