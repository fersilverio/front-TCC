<template>
    <div class="container" style="margin-top: 150px; ">
        <div class="row">
            <div class="col-sm">
            </div>
            <div class="col-sm" style="margin-left: 40px;">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="col-sm">
            </div>
        </div>
        <br>
        <br>
        <div class="row" style="margin-left: 160px;">
            <div class="col-sm">
            </div>
            <div class="col-sm">
                <button class="btn btn-success" @click="goToForm()">INICIAR</button>
            </div>
            <div class="col-sm">
            </div>
        </div>

        <div class="row" style="margin-left: 20px; margin-top: 280px;">
            <div class="col-sm">
            </div>
            <div class="" style="font-size: 15px;">
                <p>por <a target="_blank" href="https://github.com/fersilverio" style="color: #109b3a; font-weight: bold;">Fernando Silvério</a></p>
            </div>
            <div class="col-sm">
            </div>
        </div>
    </div>
</template>


<script>

export default{
    methods: {
        goToForm(){
            this.$router.replace({name: 'formulario'})
        },
    }
}


</script>

<style>
    
</style>