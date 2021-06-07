<template>
<h1>This is a Siple Login Form</h1>
<form>
    <label>User Name</label>
    <input type="text" placeholder="Enter Username" v-model="dataCollector.email">
    <br><br>
    <label>Password</label>
    <input type="Password" placeholder="Enter Password" v-model="dataCollector.password">
    <br><br>
    <label>Country</label>
    <select v-model="dataCollector.country">
        <option>India</option>
        <option>Japan</option>
        <option>USA</option>
    </select>
    <br><br>
    <h3>Technology</h3><br>
    <label>Python</label>
    <input type="checkbox" value="Python" v-model="dataCollector.tech">
    <br>
    <label>Vue Js</label>
    <input type="checkbox" value="Vue Js" v-model="dataCollector.tech">
    <br>
    <label>C++</label>
    <input type="checkbox" value="C++" v-model="dataCollector.tech">
    <br><br>
    <h3>Gender</h3>
    <label for=male>Male</label>
    <input type="radio" id="male" name="gender" value="Male" v-model="dataCollector.gender">
    <br>
    <label for="female">Female</label>
    <input type="radio" value="Female" id="female" name="gender" v-model="dataCollector.gender">
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
                password: "",
                country: "",
                tech: [],
                gender: "",
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
