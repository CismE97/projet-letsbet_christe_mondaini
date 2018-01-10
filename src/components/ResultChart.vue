<script>
  // Import the base chart
  import {Doughnut, mixins} from 'vue-chartjs';
  const {reactiveProp} = mixins;

  // Extend it
export default {
      extends: Doughnut,
      name: 'ResultChart',
      mixins: [reactiveProp],
      props: ['nbResultsFounded', 'nbMatchBetted'],
      mounted() {
          let options = {
              legend: {
                  position: 'bottom'
              }
          };
          // Overwriting base render method with actual data and options
          this.renderChart(this.chartData, options);
      }
  };
</script>