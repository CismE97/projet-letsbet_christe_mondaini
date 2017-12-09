<template>
<div class="container">
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Erreur : </strong> Vérifier les informations suivantes : 
</div>
<div class="row justify-content-center">
  <div class="col-md-8 col-lg-6">
  <div class="card">
    <div class="card-header bg-primary">
      <h4 class="card-title">Inscription</h4>
    </div>
    <div class="card-body">
      <form>
        <div class="form-group">
          <input type="text" class="form-control" id="lname" aria-describedby="lname" placeholder="Nom">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="fname" aria-describedby="fname" placeholder="Prénom">
        </div>
         <div class="form-group">
          <input type="text" class="form-control" id="username" aria-describedby="username" placeholder="Pseudonyme">
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse E-mail">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirmer le mot de passe">
        </div>
        <button type="submit" class="btn btn-outline-info">S'inscrire</button>
        <router-link :to="{ name: 'Login'}" class="btn btn-info">J'ai déjà un compte</router-link>
      </form>
  </div>
  </div>
</div>
</div>
</div>
</template>

<script>
// import firebase from '../firebase';
export default {
    name: 'SignUp',
    data() {
        return {
            msg: 'Bonjour'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-group{
    margin-bottom: 30px;
  }
</style>
