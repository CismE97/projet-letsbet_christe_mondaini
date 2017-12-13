<template>
    <div class="container">
        <div class="row header">
            <div class="col-md-2 col-4"><img v-bind:src="userPictureURL" alt="photo de profil" class="img-fluid"></div>
                <div class="col-md-6 col-8 text-left">
                    <h2>{{userLogged.nbPoints}}</h2>
                    <p>Points restants : {{nbPoints}} <br> Points en attente : 200</p>
                </div>
                <div class="col-md-4 col-sm-12 text-right">
                    <p><a class="btn btn-outline-info" href="#">Mon compte</a> <a class="btn btn-outline-info" href="#" v-on:click='logOut'>Se déconnecter</a></p>
                    <p>Nombre résultats exacts : {{userLogged}}</p>
                </div>
        </div>
        <div class="stats">
            <div class="row text-left">
                <div class="col-md-8 col-12">
                    <h2>Classement</h2>
                    <table class="table classement">
                        <tr>
                            <th>N°</th>
                            <th>Joueur</th>
                            <th>Points</th>
                        </tr>
                        <tr >
                            <td>5</td>
                            <td>Pseudo</td>
                            <td>4000</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Pseudo</td>
                            <td>3000</td>
                        </tr>
                        <tr class="classement-me">
                            <td>7</td>
                            <td>Me</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Pseudo</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Pseudo</td>
                            <td>500</td>
                        </tr>
                    </table>
                    <p class="text-right"><a class="btn btn-outline-info" href="#">Afficher tout</a></p>

                </div>
                <div class="col-md-4 col-12">
                    <h2>Mes stats</h2>
                    <canvas id="chart"></canvas>
                </div>
            </div>
        </div>
        <div class="row matchs">
            <div class="col-md-12">
                <h2>Matchs diponibles</h2>
                <div class="matchDayFilter">
                    <select class="form-control form-control-lg" v-model="journeySelected" @change="loadData">
                        <option v-bind:value="p" v-bind:key="i" v-for="(p,i) in numberJourney">Journée {{p}}</option>
                    </select>
                </div>
                <transition-group tag="div" name="list" class="fixtures">
                    <my-fixture v-bind:value="p" v-bind:index="i" v-bind:key="i" v-for="(p, i) in fixtures"></my-fixture>
                </transition-group> 
            </div>
        </div>
    </div>
</template>
<script>
import Fixture from './Fixture';
import axios from 'axios';
import firebase from '../firebase';
export default {
    name: 'Home',
    data() {
        return {
            userId: null,
            userName: '',
            userPictureURL: '',
            nbPoints: 0,
            nbResultsFounded: 0,

            userLogged: '',

            fixtures: [],
            numberJourney: 38,
            journeySelected: 1
        };
    },
    methods: {
        loadData: function () {
            axios.get('https://thingproxy.freeboard.io/fetch/https://api.football-data.org/v1/competitions/445/fixtures', {
                headers: {
                    'X-Auth-Token': 'd2c960e664ad4668bb0236ca7442bf12'
                },
                params: {
                    matchday: this.journeySelected
                }
            })
            .then((response) => {
                this.fixtures = response.data.fixtures;
            })
            .catch((error) => {
                this.erreur = error;
            });
        },
        logOut: function () {
            firebase.auth().signOut().then(function () {
                this.$router.push('/login');
            });
        },
        getUserData: function () {
           // var ref = firebase.database().ref('users/' + this.userId);
        }
    },
    created() { // or mounted
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.userId = user.uid;
                this.userName = user.displayName;
                this.userPictureURL = user.photoURL;
                this.loadData();
                this.getUserData();
            } else {
                this.$router.push('/login');
            }
        });
    },
    components: {
        'my-fixture': Fixture
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        margin-bottom: 5%;
        border-bottom: 1px solid #000;
    }
    th, td{
        padding: 10px;
    }
    .classement-me{
        background-color: #81C784;
    }
    .matchDayFilter{
        margin-bottom: 20px;
    }
</style>
