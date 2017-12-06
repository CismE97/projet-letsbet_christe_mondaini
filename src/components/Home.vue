<template>
    <div class="container">
        <div class="row header">
            <div class="col-md-2 col-4"><img src="https://robohash.org/1?size=150x150" alt="photo de profil" class="img-fluid"></div>
                <div class="col-md-6 col-8 text-left">
                    <h2>User Name</h2>
                    <p>Points restants : 2000 <br> Points en attente : 200</p>
                </div>
                <div class="col-md-4 col-sm-12 text-right">
                    <p><a class="btn btn-outline-info" href="#">Mon compte</a></p>
                    <p>Nombre résultats exacts : 10</p>
                </div>
        </div>
        <div class="stats">
            <div class="row text-left">
                <div class="col-md-8">
                    <h2>Classement</h2>
                </div>
                <div class="col-md-4">
                    <h2>Mes stats</h2>
                </div>
            </div>

            <div class="row text-left">
                <div class="col-md-8">
                    
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


                </div>
                <div class="col-md-4">
                    <canvas id="chart"></canvas>
                </div>
            </div>
        </div>

        <div class="row matchs">
            <div class="col">
                <h2>Matchs diponibles</h2>
                <div class="card">
                    <div class="card-body">
                        <p><span class="team">FC ... VS FC ...</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    th, td{
        padding: 10px;
    }

    .classement-me{
        background-color: #81C784;
    }

    .header{
        margin-bottom: 5%;
        border-bottom: 1px solid #000;
    }

</style>
