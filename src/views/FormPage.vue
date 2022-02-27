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
                            <input type="number" class="form-control" id="idade" placeholder="ex: 27">
                        </div>
                        <div class="col-md-4">
                            <label for="altura">Altura:</label>
                            <input type="number" class="form-control" id="altura" placeholder="ex: 1,77">
                        </div>
                        <div class="col-md-4">
                            <label for="peso">Peso:</label>
                            <input type="number" class="form-control" id="peso" placeholder="ex: 78">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="glicemia">Nível glicêmico:</label>
                            <input type="number" class="form-control" id="glicemia" placeholder="ex: 123,6">
                        </div>
                        <div class="col-md-6">
                            <label for="tabagismo">Sobre histórico de tabagismo:</label>
                            <select class="form-control" id="tabagismo">
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
                                <input class="form-check-input" type="radio" name="hipertensao" id="hiper1" value="True">
                                <label class="form-check-label" for="hiper1">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="hipertensao" id="hiper2" value="False">
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
                                <input class="form-check-input" type="radio" name="card" id="card1" value="True">
                                <label class="form-check-label" for="card1">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="card" id="card2" value="False">
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
                                <input class="form-check-input" type="radio" name="gender" id="gender1" value="0">
                                <label class="form-check-label" for="gender1">Feminino</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="gender2" value="1">
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
                    <button class="btn btn-success btn-lg">Enviar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        
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