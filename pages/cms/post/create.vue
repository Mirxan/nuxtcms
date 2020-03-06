<template>
	<div class="content-wrapper">
	    <CardTitle title="Post Create"/>
	    <section class="content">
	        <div class="container-fluid">
	          <div class="card">
	              <div class="card-header">
	              	<nuxt-link to="/cms/post" class="btn btn-outline-info">
	              		<i class="fas fa-chevron-left"></i>
		              	back
	              	</nuxt-link>
	              	<button type="submit" class="btn btn-primary">
	              		<i class="fas fa-save"></i>
	              		Create
	              	</button>
	              </div>
	                <!-- /.card-header -->
	              <div class="card-body">
                      	<div class="card card-primary">
			              	<form>
				              	<div class="row">
				              		<div class="col-md-9">
						                <div class="card-body">
						                  <div class="form-group">
						                    <label for="name">Name</label>
						                    <input type="text" class="form-control" id="name" placeholder="name">
						                  </div>
						                  <div class="form-group">
						                    <label for="slug">Slug</label>
						                    <input type="text" class="form-control" id="slug" placeholder="slug">
						                  </div>
						                  <div class="form-group">
						                    <label for="category">Category</label>
						                    <select name="category" id="category" class="form-control">
						                    	<option value="1">option</option>
						                    </select>
						                  </div>
						                  <div class="form-group">
						                    <label for="meta_title">Meta title</label>
						                    <input type="text" class="form-control" id="meta_title" placeholder="meta title">
						                  </div>
						                  <div class="form-group">
						                    <label for="meta_description">Meta description</label>
						                    <textarea name="meta_description" class="form-control" id="meta_description" placeholder="meta description"></textarea>
						                  </div>
						                  <div class="form-group">
						                  		<label for="text">Text</label>
						                  		<textarea class="form-control" placeholder="Text.." id="text" cols="10"></textarea>
						                  </div>
						                </div>
				              		</div>
				              		<div class="col-md-3">
				              			<div class="form-group">
						                    <label for="date">Date</label>
				                        	<input type="date" class="form-control" id="date">
					                  	</div>
				              			<div class="form-group">
						                    <label for="photo">Photo</label>
				                        	<input type="file" class="form-control" id="photo">
					                  	</div>
				              		</div>
				              	</div>
				                <div class="card-footer"></div>
			              	</form>
			            </div>
	              </div>
	          </div>
	        </div>
	    </section>
  </div>
</template>
<script>
	export default{	
		layout:'admin',
		components: {

   		}
	}
</script>