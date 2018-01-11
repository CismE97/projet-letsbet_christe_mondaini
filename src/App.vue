<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
:root {
    --primary-color:#EAF205;
    --secondary-color:#E91E63;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #340040;
  margin-top: 60px;
}
.btn.btn-outline-info, .btn.btn-outline-info:hover,.btn.btn-outline-info:focus {
  color:var(--secondary-color);
  border-color: var(--secondary-color);
}
.btn-outline-info:not([disabled]):not(.disabled):active{
  background-color: var(--secondary-color);
  color:white;
  border-color: var(--secondary-color);
}

html{
  font-size: 1em;
}
</style>
