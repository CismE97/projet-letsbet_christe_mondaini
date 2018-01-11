<template>
    <div>
        <div class="container">
            <div v-bind:class="{'error' : errorBetDetected }" class="alert alert-danger row" role="alert">
                <div class="col-10 alert-text">Veuillez vérifier votre pari !</div>
                <div class="col-2"><button href="#" v-on:click="errorBetDetected = false" class="btn btn-light">X</button></div>
            </div>
            <div class="row header">
                <div class="col-md-2 col-4"><img v-bind:src="userPictureURL" alt="photo de profil" class="img-fluid"></div>
                <div class="col-md-6 col-8 text-left">
                    <h2>{{userName}}</h2>
                    <p>Points restants : {{userLogged.nbPoints}}<br>Nombre résultats exacts : {{userLogged.nbResultsFounded}}</p>
                </div>
                <div class="col-md-4 col-sm-12 header-btns text-right">
                    <p>
                        <a class="btn btn-outline-info" href="#" v-on:click='logOut'>Se déconnecter</a>
                        <a class="btn btn-outline-info" href="#" v-on:click='resultsValidation'>Valider résultats</a>
                    </p>
                    
                </div>
            </div>
            <div class="stats">
                <div class="row text-left">
                    <div class="col-md-8 col-12">
                        <h2 class="title">Classement</h2>
                        <my-SummaryClassement v-bind:userId="userId"></my-SummaryClassement>
                    </div>
                    <div class="col-md-4 col-12">
                        <h2 class="title">Mes stats</h2>
                        <line-chart :chart-data="datacollection"></line-chart>
                    </div>
                </div>
            </div>
            <div class="matchs">
                <div class="row">
                    <div class="col-md-12 text-left">
                        <h2 class="title text-center">Matchs diponibles</h2>
                    </div>
                </div>
                <div class="row matchDayFilter">
                    <div class="col-4">
                        <button value="button" class="btn btn-outline-info btn-lg" v-on:click='previousMatchday'>Précédent</button>
                    </div>
                    <div class="col-4">
                        <select class="form-control form-control-lg" v-model="journeySelected" @change="loadData">
                            <option v-bind:value="p" v-bind:key="i" v-for="(p,i) in numberJourney">Journée {{p}}</option>
                        </select>
                    </div>
                    <div class="col-4">
                        <button value="button" class="btn btn-outline-info btn-lg" v-on:click='nextMatchday'>Suivant</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <transition-group tag="div" name="list" class="fixtures row">
                            <my-fixture  v-bind:errorBet.sync="errorBetDetected" v-bind:user="userLogged" v-bind:userId="userId" v-bind:value="p" v-bind:index="i" v-bind:key="i" v-bind:teamImage="teamImage" v-for="(p, i) in fixtures"></my-fixture>
                        </transition-group>
                    </div>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import Fixture from './Fixture';
import SummaryClassement from './SummaryClassement';
import ResultChart from './ResultChart';
import axios from 'axios';
import firebase from '../firebase';
import Footer from './footer';

export default {
    name: 'Home',
    data() {
        return {
            userId: null,
            userName: '',
            userPictureURL: '',
            nbPoints: 0,
            nbResultsFounded: 0,
            nbMatchBetted: 0,

            userLogged: {matchs: { nbMatchsBetted: 0 }},

            fixtures: [],
            errorBetDetected: false,
            numberJourney: 38,
            journeySelected: null,
            usersArray: [],

            teamImage: []
        };
    },
    computed: {
        datacollection() {
            if (!this.userLogged.matchs) {
                this.userLogged = {matchs: { nbMatchsBetted: 0 }};
            }
            return {
                labels: ['Résultats exacts'],
                datasets: [
                    {
                        // backgroundColor: ['#66BB6A', '#DCE775'],
                        backgroundColor: ['#EAF205', '#F2055C'],
                        data: [this.userLogged.nbResultsFounded, this.userLogged.matchs.nbMatchsBetted - this.userLogged.nbResultsFounded]
                    }
                ]
            };
        }
    },
    methods: {
        loadTeamImage: function () {
            axios.get('https://thingproxy.freeboard.io/fetch/http://api.football-data.org/v1/competitions/445/teams', {
                headers: {
                    'X-Auth-Token': 'd2c960e664ad4668bb0236ca7442bf12'
                }
            })
            .then((response) => {
                response.data.teams.forEach(element => {
                    let t = {
                        'teamName': element.name,
                        'imageUrl': element.crestUrl
                    };

                    this.teamImage.push(t);
                });
            })
            .catch((error) => {
                this.erreur = error;
            });
        },
        nextMatchday: function () {
            if (this.journeySelected < 38) {
                this.journeySelected++;
                this.loadData();
            }
        },
        previousMatchday: function () {
            if (this.journeySelected > 1) {
                this.journeySelected--;
                this.loadData();
            }
        },
        currentJourney: function () {
            axios.get('https://thingproxy.freeboard.io/fetch/http://api.football-data.org/v1/competitions/445', {
                headers: {
                    'X-Auth-Token': 'd2c960e664ad4668bb0236ca7442bf12'
                }
            })
            .then((response) => {
                this.journeySelected = response.data.currentMatchday;
                this.loadData();
            })
            .catch((error) => {
                this.erreur = error;
            });
        },
        resultsValidation: function () {
            // ----Récupération des matchs notValidated + mise dans un tableau -----
            this.$bindAsArray('usersArray', firebase.database().ref('users/'));
            let matchsNotValidate = [];
            this.usersArray.forEach(user => {
                let userMatchsToValidate = {
                    userId: user['.key'],
                    nbPoints: user.nbPoints,
                    nbResultsFounded: user.nbResultsFounded,
                    matchs: {}
                };
                let needToValidate = false;
                for (let index in user.matchs) {
                    if (user.matchs[index].status === 'notValidate') {
                        const match = {
                            awayTeamScoreBetted: user.matchs[index].awayTeamScoreBetted,
                            homeTeamScoreBetted: user.matchs[index].homeTeamScoreBetted,
                            matchId: index
                        };
                        userMatchsToValidate.matchs[index] = match;
                        needToValidate = true;
                    }
                }
                if (needToValidate) {
                    matchsNotValidate.push(userMatchsToValidate);
                }
            });
            // ----- Vérification des score des matchs et attribution des points -----
            matchsNotValidate.forEach(user => {
                let userId = user.userId;
                for (let index in user.matchs) {
                    let matchId = user.matchs[index].matchId;
                    let matchToCheck = null;
                    axios.get('https://thingproxy.freeboard.io/fetch/http://api.football-data.org/v1/fixtures/' + matchId, {
                        headers: {
                            'X-Auth-Token': 'd2c960e664ad4668bb0236ca7442bf12'
                        }
                    })
                    .then((response) => {
                        matchToCheck = response.data.fixture;
                        if (matchToCheck.status === 'FINISHED') {
                            let pointsToAdd = 0;
                            let nbExactResult = 0;
                            if ((matchToCheck.result.goalsHomeTeam === user.matchs[index].homeTeamScoreBetted) && (matchToCheck.result.goalsAwayTeam === user.matchs[index].awayTeamScoreBetted)) {
                                pointsToAdd = 100;
                                nbExactResult += 1;
                            } else {
                                let substractBD = user.matchs[index].homeTeamScoreBetted - user.matchs[index].awayTeamScoreBetted;
                                let substractAPI = matchToCheck.result.goalsHomeTeam - matchToCheck.result.goalsAwayTeam;
                                if ((substractBD > 0 && substractAPI > 0) || (substractBD === 0 && substractAPI === 0) || (substractBD < 0 && substractAPI < 0)) {
                                    pointsToAdd = 30;
                                }
                            }
                            // Augmentation du nombre de points
                            if (pointsToAdd > 0) {
                                user.nbPoints += pointsToAdd;
                                user.nbResultsFounded += nbExactResult;
                                firebase.database().ref('users/' + userId).update({
                                    nbPoints: parseInt(user.nbPoints),
                                    nbResultsFounded: parseInt(user.nbResultsFounded)
                                });
                            }
                            firebase.database().ref('users/' + userId + '/matchs/' + matchId).update({
                                status: 'validated'
                            });
                        }
                    })
                    .catch((error) => {
                        this.erreur = error;
                    });
                }
            });
        },
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
        }
    },
    beforeCreate() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.userId = user.uid;                 // A mettre dans un objet
                this.userName = user.displayName;
                firebase.database().ref('users/' + this.userId).update({
                    userName: user.displayName
                });
                this.userPictureURL = user.photoURL;
                this.currentJourney();
                this.loadTeamImage();
                this.$bindAsObject('userLogged', firebase.database().ref('users/' + this.userId + '/'));
            } else {
                this.$router.push('/login');
            }
        });
    },
    components: {
        'my-fixture': Fixture,
        'my-SummaryClassement': SummaryClassement,
        'line-chart': ResultChart,
        'my-footer': Footer
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        padding-bottom: 20px;
        margin-bottom: 3%;
        border-bottom: 1px solid #000;
    }
    .header .header-btns .btn {
        min-width: 200px;
    }
    .header .buttons a{
        font-size: 0.8em;
    }
    .title{
        margin-bottom: 20px;
    }
    .matchDayFilter{
        margin-bottom: 20px;
    }
    .matchs{
        margin-top: 3%;
    }
    .alert{
        display: none;
        position: fixed;
        max-width: 500px;
        margin: 10px auto;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        text-align: left;
        vertical-align: middle;
    }
    .alert .alert-text{
        margin: auto;
    }
    .error{
        display: flex;
    }
    @media (max-width: 991px) {
        .header-btns{
            margin-top: 20px;
            text-align: center !important;
        } 
        .alert{
            width: 100%;
        }  
    }
</style>
