<template>
<h1>This is a Form</h1>
<form>
    <label>User Name</label>
    <input type="text" placeholder="Enter Username" v-model="dataCollector.email">
    <br><br>
    <label>Password</label>
    <input type="Password" placeholder="Enter Password" v-model="dataCollector.password">
    <br><br>
    <button v-on:click="login" type="button">Login</button>
</form>
<div>
  <!-- {{dataCollector.email}} -->
  <br><br>
  <h3>Form Data</h3>
  {{dataCollector}}
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            dataCollector: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            console.warn("Login Data", this.dataCollector)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1 {
    margin: 40px 0 0;
    color: blue;
}
</style>
