<template>
    <div class="hello">
          <img class="i1" src="../../Sryas Zoom Background Meeting room.jpg">
          <div class="logIn">
            <h1>Create your account</h1>
            <br>
            <el-form ref="form" :model="form">
              <el-col :span="12" style="padding:10px">
              <el-form-item>
                <p>First Name</p>
                <el-input id="name" v-model="form.firstName"></el-input>
              </el-form-item>
              </el-col>
              <el-col :span="12" style="padding:10px">
              <el-form-item>
                <p>Last Name</p>
                <el-input id="lastName" v-model="form.lastName"></el-input>
              </el-form-item>
              </el-col>
              <el-col :span="12" style="padding:10px">
              <el-form-item>
                <p>Email</p>
                <el-input id="email" type="email" v-model="form.email"></el-input>
              </el-form-item>
              </el-col>
              <el-col :span="12" style="padding:10px">
              <el-form-item>
                <p>Password</p>
                <el-input id="password" type="password" v-model="form.password" auto-complete="off"></el-input>
              </el-form-item>
              </el-col>
          </el-form><br>
          <el-button @click="onSubmit()" type="success" round>Sign Up</el-button><br>
            <p class="new">Or <span><RouterLink class="link" to="/">LogIn</RouterLink></span></p>
          </div>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
      name: "logIn",
      data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email:'',
          password:'', 
        },
       
      };
    },
      methods: {
          onSubmit() {
            this.$alert('Successfuly registrated', 'Thanks', {
          confirmButtonText: 'OK'})
              }
          
      },
      components: { RouterLink }
  }
  </script>
  

  <style scoped>
  *{
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  

  .hello{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding: 0px;
    justify-content: center;
    background-color: black;
    position: relative;
  }
  
  .i1{
    margin: 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
  }
  
  
  .logIn {
    position: absolute;
    background-color: rgba(18, 42, 49, 0.6); 
    color: white;
    width: 40vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    
  
  }
  

  
  .new{
    font-size: small;
  }
  


  .link{
    color:greenyellow;
  }


  </style>
  