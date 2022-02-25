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
        <div class="row" style="margin-left: 140px;">
            <div class="col-sm">
            </div>
            <div class="col-sm">
                <button class="btn btn-success" @click="goToDescription()">INICIAR</button>
            </div>
            <div class="col-sm">
            </div>
        </div>
    </div>
</template>


<script>

export default{
    methods: {
        goToDescription(){
            this.$router.replace({name: 'descricao'})
        }
    }
}


</script>



<style scoped>
    
</style>