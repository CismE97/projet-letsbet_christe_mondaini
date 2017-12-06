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
        <div class="col-md-12">
            <h2>Matchs diponibles</h2>
            <div class="card match">
                <form class="form-inline">
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-md-4 align-self-center">
                                <p class="text-left">Equipe 1 VS Equipe 2</p>
                            </div>
                            <div class="col-md-4 align-self-center text-left">
                                <p class="text-left">dd.mm.yyyy - hh:mm</p>
                            </div>
                            <div class="col-md-4 text-right">
                                <input type="number" class="form-control text-center" id="scoreA" placeholder="0">:
                                <input type="number" class="form-control text-center" id="scoreB" placeholder="0">  
                                <button type="button" class="btn btn-outline-info">Parier</button>
                            </div>
                        </div>
                    </div>
                </form>
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
    .header{
        margin-bottom: 5%;
        border-bottom: 1px solid #000;
    }
    form{
        margin:0;
    }
    .matchs p {
        margin: 0;
    }
    .matchs input {
        width: 50px;
    }

</style>
