<template>
    <div>
        <p>asodjaosdj</p>
        <button @click="goToForm()">avançar</button>
    </div>
</template>

<script>

export default{
    methods: {
        goToForm(){
            this.$router.replace({name: 'formulario'})
        }
    }
}
</script>
