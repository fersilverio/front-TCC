<template>
    <nav class="navbar navbar-light custom-bar">
      <div class="row">
        <div v-if="titulo == 'Questionário de avaliação'">
          <router-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left icon-custom" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </router-link>
        </div>

        <div v-if="titulo == 'Resultado'">
          <router-link to="/form">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left icon-custom" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </router-link>
        </div>
        
        
        
        <span class="titulo-navbar">{{titulo}}</span>

      </div>
      
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
      return {
      
      }
    },

    props: {
      titulo: String
    },

    methods:{
        
    }
}
</script>

<style>

  .custom-bar{
    background-color: #109b3a;
   
    
  }
  .navbar-brand{
    margin-left: 15px;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  .titulo-custom{
    font-size: 16pt;
  }

  .titulo-navbar{
    font-family: 'League Spartan', sans-serif;
    font-size: 25px;
    color: white;
    text-align: center; 
    font-weight: bold;
    margin-left: 10px;
  } 

  .icon-custom{
    margin-right: 10px;
    margin-left: 10px;
    color: white;
  }


</style>