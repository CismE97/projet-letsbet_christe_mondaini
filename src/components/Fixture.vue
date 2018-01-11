<template>
  <div class="card match" v-bind:class="getHTMLClassMatchCard(value.result, user.matchs[getMatchId(value)])">
    <div class="card-body ">
      <div class="row">
        <div class="col-lg-5 align-self-center teams">
            <p class="text-center"><img :id="value.homeTeamName" width="50" height="50"><strong> {{value.homeTeamName}} VS {{value.awayTeamName}} </strong><img :id="value.awayTeamName" width="50" height="50"></p>
        </div>
        <div class="col-lg-2 align-self-center date">
            <p class="text-center">{{ value.date | dateFormat }}</p>
        </div>
        <div v-if="(value.status != 'SCHEDULED' && value.status != 'TIMED') || user.matchs[getMatchId(value)]" class="col-lg-4">
          <div>
                <p v-if="value.status = 'FINISHED'">Résultat : {{value.result.goalsHomeTeam}} - {{value.result.goalsAwayTeam}}</p>
                <p v-if="user.matchs[getMatchId(value)]" >Mon Paris : {{user.matchs[getMatchId(value)].homeTeamScoreBetted}} - {{user.matchs[getMatchId(value)].awayTeamScoreBetted}}</p>
          </div>
          </div>
          <div v-else class="col-lg-4">
                <form class="form-inline align-items-center">
                    <div class="col-12">
                        <input type="number" class="form-control text-center" id="scoreHome" v-model="scoreHome" placeholder="0" min="0"> :
                        <input type="number" class="form-control text-center" id="scoreAway" v-model="scoreAway" placeholder="0" min="0">
                        <button v-on:click="addUserBet(scoreHome, scoreAway, getMatchId(value))" type="button" class="btn btn-outline-info">Parier</button>
                    </div>
                </form>  
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import firebase from '../firebase';
export default {
    data() {
        return {
            scoreHome: null,
            scoreAway: null
        };
    },
    props: ['value', 'index', 'userId', 'user', 'teamImage', 'errorBet'],
    filters: {
        dateFormat: function (value) {
            if (value) {
                moment.locale('ch');
                return moment(String(value)).format('DD/MM/YYYY HH:mm');
            }
        }
    },
    mounted() {
        this.setTeamImage(this.value.homeTeamName);
        this.setTeamImage(this.value.awayTeamName);
    },
    updated() {
        this.setTeamImage(this.value.homeTeamName);
        this.setTeamImage(this.value.awayTeamName);
    },
    methods: {
        setTeamImage: function (teamName) {
            let index = 0;
            while (index < 20) {
                if (this.teamImage[index].teamName === teamName) {
                    document.getElementById(teamName).src = this.teamImage[index].imageUrl;
                }
                index++;
            }
        },
        addUserBet: function (scoreHome, scoreAway, matchId) {
            console.log(this.errorBet);
            if (scoreHome >= 0 && scoreAway >= 0) {
                firebase.database().ref('users/' + this.userId + '/matchs/' + matchId).set({
                    homeTeamScoreBetted: parseInt(scoreHome),
                    awayTeamScoreBetted: parseInt(scoreAway),
                    status: 'notValidate'
                });
                firebase.database().ref('users/' + this.userId + '/matchs').update({
                    nbMatchsBetted: parseInt(this.user.matchs.nbMatchsBetted) + 1
                });
                this.$emit('update:errorBet', false);
            } else {
                console.log(this.errorBet);
                this.$emit('update:errorBet', true);
            }
            console.log(this.errorBet);
        },
        getMatchId: function (value) {
            let link = value._links.self.href;
            return link.slice(link.lastIndexOf('/') + 1, link.length);
        },
        getHTMLClassMatchCard: function (result, scoreBetted) {
            if (scoreBetted && result.goalsHomeTeam !== null && result.goalsAwayTeam !== null) {
                let substractResult = result.goalsHomeTeam - result.goalsAwayTeam;
                let substractBetted = scoreBetted.homeTeamScoreBetted - scoreBetted.awayTeamScoreBetted;
                if ((substractResult > 0 && substractBetted > 0) || (substractResult === 0 && substractBetted === 0) || (substractResult < 0 && substractBetted < 0)) {
                    return 'exactBet';
                }
                return 'lostBet';
            }
            return '';
        }
    }
};
</script>
<style>
    form{
        margin:0;
    }
    .match{
      margin-bottom: 20px;
    }
    .match .teams, .match .date{
        margin-bottom: 10px;
    }
    .matchs p {
        margin: 0;
    }
    .matchs input {
        display: inline-block;
        max-width: 50px;
    }
    .matchs .form-inline{
        text-align: center;
    }
    .exactBet{
        background-color: #DCE775;
    }
    .lostBet{
        background-color: #EF9A9A;
    }
</style>
