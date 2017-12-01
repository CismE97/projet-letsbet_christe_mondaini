<template>
    <div class="container">
        <div class="row header">
            <div class="col">
                <div class="row text-left">
                    <div class="col-2"><img src="http://lorempixel.com/100/100/" alt="photo de profil"></div>
                    <div class="col-8">
                        <h2>User Name</h2>
                        <p>Points restants : 2000</p>
                        <p>Points en attente : 200</p>
                    </div>
                    <div class="col-2">
                        <p>Mon compte</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row stats">
             <div class="col">
                <div class="row text-left">
                    <div class="col-8">
                        <h2>Classement</h2>
                    </div>
                    <div class="col-4">
                        <h2>Mes statistiques</h2>
                    </div>
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
        return {
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
