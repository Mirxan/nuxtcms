<template>
  	<aside class="main-sidebar sidebar-dark-primary elevation-4">
	    <!-- Brand Logo -->
	    <a href="/" class="brand-link d-flex justify-content-center">
	      <span class="brand-text font-weight-light">MIRO CMS PRO NUXT</span>
	    </a>
	    <!-- Sidebar -->
	    <div class="sidebar">
	      <div class="user-panel mt-3 pb-3 mb-3 d-flex justify-content-center">
	        <div class="d-flex justify-content-center align-items-center text-white">
	        	<i class="fas fa-user-circle"></i>
	        </div>
	        <div class="info">
	          <span class="d-block text-light">Admin</span>
	        </div>
	      </div>
	      <!-- Sidebar Menu -->
	      <nav class="mt-2">
	        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
	          <li class="nav-item">
	          	<nuxt-link to="/cms/dashboard" class="nav-link">
	              <i class="nav-icon fas fa-tachometer-alt"></i>
	              <p>
	                Dashboard
	              </p>
	          	</nuxt-link>
	          </li>
	          <li class="nav-item">
	          	<nuxt-link to="/cms/post" class="nav-link">
	              <i class="nav-icon fas fa-box"></i>
	              <p>
	                Post
	              </p>
	          	</nuxt-link>
	          </li>
	        </ul>
	      </nav>

	    </div>
  	</aside>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>