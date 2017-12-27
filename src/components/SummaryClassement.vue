<template>
    <div>
        <h2>Classement</h2>
        <table class="table classement">
            <tr>
                <th>N°</th>
                <th>Joueur</th>
                <th>Points</th>
            </tr>
            <tr  v-bind:value="userItem" v-bind:index="i" v-bind:key="i" v-for="(userItem, i) in sortUsersArray" :class="classementMe(userItem)">
                <td>{{userItem.position}}</td>
                <td>{{userItem.userName}}</td>
                <td>{{userItem.nbPoints}}</td>
            </tr>
        </table>
        <p class="text-right"><router-link class="btn btn-outline-info" :to="{name:'Classement'}" >Afficher tout</router-link></p>
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
                // On recherche sa position et on ajoute les places
                for (let i = 0; i < arraySorted.length; i++) {
                    if (arraySorted[i]['.key'] === this.userId) {
                        myIndex = i;
                    }
                    arraySorted[i]['position'] = i + 1;
                }

                if (myIndex < 5) {
                    arraySorted.splice(5, arraySorted.length);
                } else if (myIndex > arraySorted.length - 5) {
                    arraySorted.splice(0, arraySorted.length - 5);
                } else {
                    for (let i = 0; i < myIndex - 2; i++) {
                        arraySorted.splice(0, 1);
                    }
                    for (let i = myIndex + 2; i < arraySorted.length; i++) {
                        arraySorted.splice(i, 1);
                    }
                }

                return arraySorted;
            }
        }
    },
    methods: {
        classementMe: function (userItem) {
            if (userItem['.key'] === this.userId) {
                return 'classement-me';
            }
            return '';
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
        background-color: #DCE775;
    }
</style>
