<template>
    <form @submit.prevent="submitForm">
      <navbar :titulo="this.titulo"></navbar>  


        <div class="container custom" style="">
            
            <div class="container">
                <br>
                <div class="row">
                    <div class="form-group">
                        <div class="row">   
                            <div class="col-md-4">
                                <label class="label" for="idade">Idade:</label>
                                <input type="number" class="form-control" id="idade" placeholder="ex: 27" v-model="idade">
                                <span v-if="!$v.idade.required && $v.idade.$dirty" class="text-danger">Campo "idade" obrigatório.</span>
                                <br>
                                <span v-if="!$v.idade.$maxValue && $v.idade.$dirty" class="text-danger">Insira um valor entre 0 e 110</span>
                            </div>
                            <div class="col-md-4">
                                <label class="label" for="altura">Altura:</label>
                                <input step="any" type="number" class="form-control" id="altura" placeholder="ex: 1,77" v-model="altura">
                                <span v-if="!$v.altura.required && $v.altura.$dirty" class="text-danger">Campo "altura" obrigatório.</span>
                            </div>
                            <div class="col-md-4">
                                <label class="label" for="peso">Peso:</label>
                                <input step="any" type="number" class="form-control" id="peso" placeholder="ex: 78" v-model="peso">
                                <span v-if="!$v.peso.required && $v.peso.$dirty" class="text-danger">Campo "peso" obrigatório.</span>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label" for="glicemia">Sobre nível glicêmico:</label>
                                <select class="form-control" id="glicemia" v-model="nivelGlicemico">
                                    <option>Sou considerado(a) hipoglicêmico(a) (glicemia abaixo do normal)</option>
                                    <option>Minha glicemia é considerada normal</option>
                                    <option>Minha glicemia é considerada alterada</option>
                                    <option>Sou considerado(a) diabético(a)</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="label" for="tabagismo">Sobre histórico de tabagismo:</label>
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
        </div>
        <div class="container">
            <div class="row">
                        <div class="col-md-12">
                            <label class="label" for="hiper">Histórico de hipertensão: </label>
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
                            <label class="label" for="card">Histórico de doença cardíaca: </label>
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
                            <label class="label" for="gender">Gênero: </label>
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
                <div class="">
                    <button  type="submit" class="btn btn-success botoes">Enviar</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>

import { isIMCabaixoIdeal, histTabagismo, isHipoNormal, isJovemAdulto } from '../util/dataValidation'
import Swal from 'sweetalert2'
import {required, maxValue} from "vuelidate/lib/validators";
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        Navbar,
    },

    created(){
        this.descricao()
    },

    data () {
        return {
            idade: "",
            altura: "",
            peso: "",
            nivelGlicemico: "Minha glicemia é considerada normal",
            tabagismo: "Fumo",
            selecionadoHipertensao: "0",
            selecionadoDoencaCard: "0",
            selecionadoGeneroMasc: "0",
            saidaForm: "",
            titulo: 'Questionário de avaliação' 
        }
    },
    
    validations: {
        idade: {
            required,
            maxValue: maxValue(110)
        },
        altura: {
            required,
        },

        peso: {
            required,
        },

        nivelGlicemico: {
            required,
        },

        tabagismo:{
            required,
        },

        selecionadoHipertensao: {
            required,
        },

        selecionadoDoencaCard: {
            required,
        },

        selecionadoGeneroMasc: {
            required,
        }
    },
    
    methods: {

        descricao(){
            Swal.fire({
                title: '<h1 class="titulo" style="text-align: center; margin-bottom: 50px;">Sobre a predição</h1>',
                html:
                   ' <div">' +
                        '<div class="container">' +
                            '<p class="font">A predição será realizada considerando um histórico com mais de 5 mil registros (que pode ser acessado <a target=”_blank” href="https://www.kaggle.com/datasets/fedesoriano/stroke-prediction-dataset" style="color: #109b3a">aqui</a>) que consideram diversos dados.' +
                            ' <p class="font">Esses dados servirão para construir um cenário de evidências, que será comparado com o registro de dados e essa comparação será a predição de um possível caso de AVC.</p>' +
                            '<p class="font"> Vale ponderar que a predição não se trata de um diagnóstico médico e sim de uma análise que pode ou não servir como alerta para de fato procurar ajuda especializada.</p>' +
                            ' <p class="font">Insira os dados requisitados a seguir e em seguida clique/pressione no botão denomidado "Enviar".</p>' +
                        '</div>' +
                    '</div>',
                showCloseButton: false,
                showCancelButton: false,
                focusConfirm: false,
                allowOutsideClick: false
                
            })
        },

        form(){
            let saida = ""
            // Se for masculino estará como 1, senão 0
            saida += this.selecionadoGeneroMasc
            // Se houver historico de doença cardíaca adicionado 1, senão 0
            saida += this.selecionadoDoencaCard
            // Se a pessoa fuma ou ja fumou 1, senão 0
            saida += histTabagismo(this.tabagismo)
            // Se a pessoa esta abaixo do peso ou no peso ideal 1, senão 0
            saida += isIMCabaixoIdeal(this.altura, this.peso)
            // Se a pessoa está hipoglicemica ou com glicemia normal 1, senão 0
            saida += isHipoNormal(this.nivelGlicemico)
            // Se for jovem ou adulto 1, senão 0
            saida += isJovemAdulto(this.idade)
            // Se houver historico de hipertensão adicionado 1, senão 0
            saida += this.selecionadoHipertensao
            // console.log(saida)
            return saida
        },

        goToResultPage(){
            this.saidaForm = this.form()
            this.$router.replace({name: 'resultado', query: {saidaForm : this.saidaForm}})
        },

        submitForm(){
            this.$v.$touch()

            if (!this.$v.$invalid){
                //console.log('a')
                this.goToResultPage()
            }
        }
    },
}
</script>




<style>
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@300&display=swap');

    
    .titulo-nav{
        font-family: 'League Spartan', sans-serif;
        font-size: 60px;
        color: #109b3a;
        text-align: center; 
        font-weight: bold;
    }

    .custom-jumbotron{
        text-align: justify;
        /* margin-top: 100px;  */
        background-color: white;
    }
    .botoes{
        margin: 15px;
    }

    .font{
        font-family: 'League Spartan', sans-serif;
        font-weight: bold;
    }

    .label{
        font-size: 25px;
        color: #109b3a;
        font-family: 'League Spartan', sans-serif;
        font-weight: bold;
    }

    .form-control:focus{
        border-color: rgba(126, 239, 104, 0.8);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6);
        outline: 0 none;
    }
   
   @media(max-width: 767px){
        .label{
            font-size: 25px;
            color: #109b3a;
            font-family: 'League Spartan', sans-serif;
            font-weight: bold;
            margin-top: 10px;
            margin-bottom: 10px;
        }
   }

    .error {
        text-transform: uppercase;
        font-size: 12px;
        color: red;
        position: absolute;
    }

</style>