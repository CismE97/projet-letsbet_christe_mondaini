<template>
  <div class="card match" v-bind:class="getHTMLClassMatchCard(value.result, user.matchs[getMatchId(value)])">
    <div class="card-body ">
      <div class="row">
        <div class="col-md-4 align-self-center">
            <p class="text-center">{{value.homeTeamName}} VS {{value.awayTeamName}}</p>
        </div>
        <div class="col-md-4 align-self-center">
            <p class="text-center">{{ value.date | dateFormat }}</p>
        </div>
        <div v-if="(value.status != 'SCHEDULED' && value.status != 'TIMED') || user.matchs[getMatchId(value)]" class="col-md-4">
          <div>
                <p v-if="value.status = 'FINISHED'">Résultat : {{value.result.goalsHomeTeam}} - {{value.result.goalsAwayTeam}}</p>
                <p v-if="user.matchs[getMatchId(value)]" >Mon Paris : {{user.matchs[getMatchId(value)].homeTeamScoreBetted}} - {{user.matchs[getMatchId(value)].awayTeamScoreBetted}}</p>
          </div>
          </div>
          <div v-else class="col-md-4 align-self-center">
            <form class="form-inline">
              <div>
                <input type="number" class="form-control text-center col-md-2 col-sm-2" id="scoreHome" v-model="scoreHome" placeholder="0" min="0">:
                <input type="number" class="form-control text-center col-md-2 col-sm-2" id="scoreAway" v-model="scoreAway" placeholder="0" min="0">
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
    props: ['value', 'index', 'userId', 'user'],
    filters: {
        dateFormat: function (value) {
            if (value) {
                moment.locale('ch');
                return moment(String(value)).format('DD/MM/YYYY HH:mm');
            }
        }
    },
    methods: {
        addUserBet: function (scoreHome, scoreAway, matchId) {
            firebase.database().ref('users/' + this.userId + '/matchs/' + matchId).set({
                homeTeamScoreBetted: parseInt(scoreHome),
                awayTeamScoreBetted: parseInt(scoreAway),
                status: 'notValidate'
            });
            firebase.database().ref('users/' + this.userId + '/matchs').update({
                nbMatchsBetted: parseInt(this.user.matchs.nbMatchsBetted) + 1
            });
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
    .matchs p {
        margin: 0;
    }
    .matchs input {
        width: 50px;
    }
    .exactBet{
        background-color: #DCE775;
    }
    .lostBet{
        background-color: #EF9A9A;
    }
</style>
