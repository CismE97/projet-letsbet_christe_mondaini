<template>
    <div>
        <h2>Classement</h2>
            <table class="table classement">
                <tr>
                    <th>N°</th>
                    <th>Joueur</th>
                    <th>Points</th>
                </tr>
                <tr  v-bind:value="userItem" v-bind:index="i" v-bind:key="i" v-for="(userItem, i) in sortUsersArray">
                    <td>5</td>
                    <td>{{userItem.userName}}</td>
                    <td>{{userItem.nbPoints}}</td>
                </tr>
                <tr class="classement-me">
                    <td>7</td>
                    <td>Me</td>
                    <td>2000</td>
                </tr>
        </table>
        <p class="text-right"><a class="btn btn-outline-info" href="#">Afficher tout</a></p>
    </div>
</template>

<script>
import firebase from '../firebase';

export default {
    data() {
        return {
            usersArray: []
        };
    },
    props: ['userId'],
    computed: {
        sortUsersArray() {
            // On trie le tableau par score
            let arraySorted = this.usersArray.sort(function (a, b) {
                if (a.nbPoints < b.nbPoints) {
                    return -1;
                }
                if (a.nbPoints > b.nbPoints) {
                    return 1;
                }
                return 0;
            });
            arraySorted.reverse();

            if (arraySorted.length < 5) {
                return arraySorted;
            } else {
                var myIndex = -1;
                // On recherche sa position
                for (let i = 0; i < arraySorted.length; i++) {
                    if (arraySorted[i]['.key'] === this.userId) {
                        myIndex = i;
                    }
                }
                let arraySortedToReturn = [5];
                // Ajouter les précédents
                for (let i = myIndex; i > myIndex - 2 || i <= 0; i--) {
                    arraySortedToReturn[i] = arraySorted[myIndex - i];
                }
                arraySortedToReturn[3] = arraySorted[myIndex];
                // Ajouter les suivants
                for (let i = myIndex; i < myIndex + 2 || i <= arraySorted.length; i++) {
                    arraySortedToReturn[i] = arraySorted[myIndex - i];
                }
                return arraySortedToReturn;
            }
        }
    },
    created() {
        this.$bindAsArray('usersArray', firebase.database().ref('users/'));
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
