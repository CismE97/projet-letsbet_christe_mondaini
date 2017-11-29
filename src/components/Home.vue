<template>
<div class="container">
<div class="row justify-content-center">
  <div class="col-sm-8 col-md-6">
  <div class="card">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</div>
</div>

</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            msg: 'Bonjour'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
