<template>
    <div class="login">
        <h1>LetsBet</h1>
        <p>Veuillez choisir une méthode de connexion !</p>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>
<script>
import 'firebaseui/dist/firebaseui.css';
import 'firebaseui/dist/firebaseui.js';

import firebase from 'firebase';
import firebaseui from 'firebaseui';

export default {
    name: 'Login',
    mounted() {
        var redirectURL = '';
        if (process.env.NODE_ENV === 'production') {
            redirectURL = '/projet-letsbet_christe_mondaini/';
        } else {
            redirectURL = '/';
        }

        var uiConfig = {
            signInSuccessUrl: redirectURL,
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        };
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
  margin-bottom: 30px;
}
</style>
