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
                <transition-group tag="div" name="list" class="fixtures">
                    <my-fixture v-bind:value="p" v-bind:index="i" v-bind:key="i" v-for="(p, i) in fixtures"></my-fixture>
                </transition-group> 
            </div>
        </div>
    </div>
</template>
<script>
import Fixture from './Fixture';
export default {
    name: 'Home',
    data() {
        return {
            fixtures: [{
                id: 1,
                date: '22.12.2017 - 20:00',
                teamA: 'Fc Barclone',
                teamB: 'Real Madrid',
                pariedScore: null,
                result: null
            }, {
                id: 2,
                date: '22.12.2017 - 20:00',
                teamA: 'Fc Bâle',
                teamB: 'Lausanne Sport',
                pariedScore: '2 - 0',
                result: null
            }, {
                id: 3,
                date: '22.12.2017 - 20:00',
                teamA: 'Fc Bâle',
                teamB: 'Lausanne Sport',
                pariedScore: null,
                result: '2 - 0'
            }, {
                id: 4,
                date: '22.12.2017 - 20:00',
                teamA: 'Fc Barclone',
                teamB: 'Real Madrid',
                pariedScore: '0 - 1',
                result: '2 - 0'
            }, {
                id: 5,
                date: '22.12.2017 - 20:00',
                teamA: 'Fc Barclone',
                teamB: 'Real Madrid',
                pariedScore: '1 - 0',
                result: '2 - 0'
            }, {
                id: 6,
                date: '22.12.2017 - 20:00',
                teamA: 'Fc Barclone',
                teamB: 'Real Madrid',
                pariedScore: '2 - 0',
                result: '2 - 0'
            }]
        };
    },
    components: {
        'my-fixture': Fixture
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
