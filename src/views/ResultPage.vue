<template>
    <div class="container-fluid container-principal">
        <div>
            <h1 v-if="resultadoCalculado" class="titulo">Resultado da predição</h1>
        </div>
        <div v-if="!resultadoCalculado" class="container container-loading">
            <p class="texto-loading">Aguardando resultado</p>
            <div class="spinner-grow text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else>
            <div class="container container-botoes">
                <div>
                    <button @click="goToFormPage()" class="btn btn-success font botoes">Repetir</button>
                    <button @click="goToInitialPage()" class="btn btn-danger font botoes">Sair</button>
                </div>
                

                <div class="row">
                    <div class="col-md-4">
                        <div>
                            <p class="font font-color-green">{{resultado}}%</p>
                        </div>
                    </div>
                    <div class="col-md-8 distancia">
                        <p class="font paragrafo">O resultado apresentado significa que o cenário montado com os seus dados foi analisado e conclui-se que em <span style="color:#109b3a;">{{resultado}}%</span> o AVC aconteceu.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

import DataService from '../services/dataService'

export default {
    
    created (){
        this.getResult()
    },

    data(){
        return {
            entrada: this.$route.query.saidaForm,
            resultado: "",
            resultadoCalculado: false
        }
    },
    
    methods: {
        getResult() {
            DataService.getProb(this.entrada)
                .then((res)  => {
                    this.resultado = res.data.probabilidade * 100
                    this.resultadoCalculado = true
                })
                .catch(err => {
                    console.log(err)
                })
        },

        goToFormPage(){
            this.$router.replace({name: 'formulario'})
        },
        goToInitialPage(){
            this.$router.replace({name: 'inicio'})
        }
    }
}

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@300&display=swap');
   
   .font{
        font-family: 'League Spartan', sans-serif;
    }

    .font-color-green{
        font-size: 160px;
        color:#109b3a;
        font-weight: bold;
    }

    .font-color-red{
        font-size: 160px;
        color: red;
    }

    .paragrafo{
        font-size: 30px;
        font-weight: bold;

    }
    .distancia{
        margin-top: 50px;
        /*criar um media query pro mobile ficar mais junto*/ 
    }

    .botoes{
        margin: 15px;
    }

    .container-principal{
        margin: 50px;
    }

    .container-loading{
        text-align: center;
        margin-top: 100px;
    }

    .container-botoes{
        text-align: center;
    }

    .titulo{
        font-family: 'League Spartan', sans-serif;
        font-size: 60px;
        color: #109b3a;
        text-align: center; 
        font-weight: bold;
    }

    .texto-loading{
        font-size: 40px;
        font-family: 'League Spartan', sans-serif;
        text-align: center; 
        font-weight: bold;
    }
</style>