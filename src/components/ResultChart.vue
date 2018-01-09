<script>
  // Import the base chart
  import {Pie, mixins} from 'vue-chartjs';
  const {reactiveProp} = mixins;

  // Extend it
export default {
      extends: Pie,
      name: 'ResultChart',
      mixins: [reactiveProp],
      props: ['nbResultsFounded', 'nbMatchBetted'],
      mounted() {
          // Overwriting base render method with actual data and options
          this.renderChart(this.chartData, this.options);
      }
  };
</script>