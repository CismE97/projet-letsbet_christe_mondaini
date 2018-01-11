<template>
    <div class="page">
        <div class="container">
            <p class="text-left">
               <router-link class="btn btn-outline-info" :to="{name:'Home'}" >Retour</router-link>
            </p>
            <h2>Classement général</h2>
            <table class="table classement">
                <tr>
                    <th>N°</th>
                    <th>Joueur</th>
                    <th>Points</th>
                </tr>
                <tr  v-bind:value="userItem" v-bind:index="i" v-bind:key="i" v-for="(userItem, i) in sortUsersArray" :class="classementMe(userItem)">
                    <td>{{i+1}}</td>
                    <td>{{userItem.userName}}</td>
                    <td>{{userItem.nbPoints}}</td>
                </tr>
            </table>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import firebase from '../firebase';
import Footer from './footer';
export default {
    name: 'Home',
    data() {
        return {
            userId: '',
            usersArray: []
        };
    },
    computed: {
        sortUsersArray() {                                              // A voir si on peut récupérer un bout de la méthode de summaryClassement
            let arraySorted = this.usersArray.sort(function (a, b) {
                if (a.nbPoints < b.nbPoints) {
                    return -1;
                }
                if (a.nbPoints > b.nbPoints) {
                    return 1;
                }
                return 0;
            });
            return arraySorted.reverse();
        }
    },
    methods: {
        classementMe: function (userItem) {
            if (userItem['.key'] === this.userId) {
                return 'classement-me';
            }
            return '';
        }
    },
    firebase() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.userId = user.uid;
            } else {
                this.$router.push('/login');
            }
        });
        this.$bindAsArray('usersArray', firebase.database().ref('users/'));
    },
    components: {
        'my-footer': Footer
    }
};
</script>
<style scoped>
    th, td{
        padding: 10px;
        text-align: left;
        vertical-align: middle;
    }
    td img{
        max-height: 100px;
    }
    .classement-me{
        background-color:var(--primary-color);
    }
    .page{
        display: flex;
        min-height: 95vh;
        flex-direction: column;
    }
    .container{
        flex:1; 
    }
</style>
