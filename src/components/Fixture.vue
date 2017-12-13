<template>
  <div class="card match">
    <div class="card-body ">
      <div class="row">
        <div class="col-md-4 align-self-center">
            <p class="text-center">{{value.homeTeamName}} VS {{value.awayTeamName}}</p>
        </div>
        <div class="col-md-4 align-self-center">
            <p class="text-center">{{ value.date | dateFormat }}</p>
        </div>
        <div v-if="value.status != 'SCHEDULED' && value.status != 'TIMED'" class="col-md-4">
          <div>
                <p>Résultat : {{value.result.goalsHomeTeam}} - {{value.result.goalsAwayTeam}}</p>
                <p>Paris : 1 - 1</p>
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
        };
    },
    props: ['value', 'index', 'userId'],
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
                homeTeamScoreBetted: scoreHome,
                awayTeamScoreBetted: scoreAway,
                validate: false
            });
        },
        getMatchId: function (value) {
            let link = value._links.self.href;

            return link.slice(link.lastIndexOf('/') + 1, link.length);
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
</style>
