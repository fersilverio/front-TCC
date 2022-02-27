<template>
    <div>
       
        <div class="container custom" style="">
            <h1>Questionário de avaliação</h1>
            <p>Insira nos campos abaixo os dados requisitados</p>
            <div class="row">
                <div class="form-group">
                    <div class="row">   
                        <div class="col-md-4">
                            <label for="idade">Idade:</label>
                            <input type="number" class="form-control" id="idade" placeholder="ex: 27" v-model="idade">
                        </div>
                        <div class="col-md-4">
                            <label for="altura">Altura:</label>
                            <input type="number" class="form-control" id="altura" placeholder="ex: 1,77" v-model="altura">
                        </div>
                        <div class="col-md-4">
                            <label for="peso">Peso:</label>
                            <input type="number" class="form-control" id="peso" placeholder="ex: 78" v-model="peso">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="glicemia">Nível glicêmico:</label>
                            <input type="number" class="form-control" id="glicemia" placeholder="ex: 123,6" v-model="nivelGlicemico">
                        </div>
                        <div class="col-md-6">
                            <label for="tabagismo">Sobre histórico de tabagismo:</label>
                            <select class="form-control" id="tabagismo" v-model="tabagismo">
                                <option>Fumo</option>
                                <option>Já fumei por um período</option>
                                <option>Nunca fumei</option>
                                <option>Sou um terceiro e não possuo tal informação</option>
                            </select>                    
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                        <div class="col-md-12">
                            <label for="hiper">Histórico de hipertensão: </label>
                            <br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="hipertensao" id="hiper1" value="1" v-model="selecionadoHipertensao">
                                <label class="form-check-label" for="hiper1">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="hipertensao" id="hiper2" value="0" v-model="selecionadoHipertensao">
                                <label class="form-check-label" for="hiper2">Não</label>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-12">
                            <label for="card">Histórico de doença cardíaca: </label>
                            <br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="card" id="card1" value="1" v-model="selecionadoDoencaCard">
                                <label class="form-check-label" for="card1">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="card" id="card2" value="0" v-model="selecionadoDoencaCard">
                                <label class="form-check-label" for="card2">Não</label>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-12">
                            <label for="gender">Gênero: </label>
                            <br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="gender1" value="0" v-model="selecionadoGeneroMasc">
                                <label class="form-check-label" for="gender1">Feminino</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="gender2" value="1" v-model="selecionadoGeneroMasc">
                                <label class="form-check-label" for="gender2">Masculino</label>
                            </div>
                        </div>
                    </div>
        </div>
        <br>
        <br>
        <div class="container custom">
            <div class="row">
                <div class="col-md-12 justify-content: center">
                    <button @click="teste()" class="btn btn-success btn-lg">Enviar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    /*
        TODO: Criar a estrutura de conexão com a API
        TODO: Criar a lógica para calcular o IMC
        TODO: Criar o método que concentrará os dois todos acima
    
    
    
    */ 
    data () {
        return {
            idade: "",
            altura: "",
            peso: "",
            nivelGlicemico: "",
            tabagismo: "",
            selecionadoHipertensao: "",
            selecionadoDoencaCard: "",
            selecionadoGeneroMasc: "" 
        }
    },
    
    
    methods: {
        teste(){
            console.log(this.idade)
            console.log(this.altura)
            console.log(this.peso)
            console.log(this.nivelGlicemico)
            console.log(this.tabagismo)
            console.log(this.selecionadoHipertensao)
            console.log(this.selecionadoDoencaCard)
            console.log(this.selecionadoGeneroMasc)
        }
    },
}
</script>




<style scoped>
    /* .custom{
        text-align: center;
        margin: auto;
        width: 50%;
    }  */
</style>