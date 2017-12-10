<template>
  <div class="card match">
    <div class="card-body ">
      <div class="row">
        <div class="col-md-4 align-self-center">
            <p class="text-left">{{value.homeTeamName}} VS {{value.awayTeamName}}</p>
        </div>
        <div class="col-md-4 align-self-center text-left">
            <p class="text-left">{{ value.date | dateFormat }}</p>
        </div>
        
        <div class="col-md-4">
          <div v-if="value.status != 'SCHEDULED'" class="row">
            <div class="col-md-12 col-12">
                <p>{{value.result.goalsHomeTeam}} - {{value.result.goalsAwayTeam}}</p>
            </div>
          </div>
          <div v-else class="row">
            <form class="form-inline">
              <div class="col-md-8 col-12">
                <input type="number" class="text-center" id="scoreA" placeholder="0">:
                <input type="number" class="text-center" id="scoreB" placeholder="0">
              </div>
              <div class="col-md-4 col-12">
                  <button type="button" class="btn btn-outline-info">Parier</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
export default {
    data() {
        return {
        };
    },
    props: ['value', 'index'],
    filters: {
        dateFormat: function (value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY hh:mm a');
            }
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
