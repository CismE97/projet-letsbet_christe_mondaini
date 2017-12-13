<template>
    <div>
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
</template>

<script>
export default {
    data() {
        return {
        };
    }
};
</script>

<style scoped>
    th, td{
        padding: 10px;
    }
    .classement-me{
        background-color: #81C784;
    }
</style>
