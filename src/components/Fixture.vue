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
                <input type="number" class="form-control text-center col-md-2 col-sm-2" id="scoreA" placeholder="0" min="0">:
                <input type="number" class="form-control text-center col-md-2 col-sm-2" id="scoreB" placeholder="0" min="0">
                <button type="button" class="btn btn-outline-info">Parier</button>
              </div>
            </form>
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
                moment.locale('ch');
                return moment(String(value)).format('DD/MM/YYYY HH:mm');
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
