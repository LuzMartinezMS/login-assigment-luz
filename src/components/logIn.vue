<template>
  <div class="hello">
        <img class="i1" src="../../Sryas Zoom Background Meeting room.jpg">
        <div class="logIn">
          <h1>Welcome to Sryas!</h1>
          <p>Please enter your mail and password</p><br><br>
          <el-form ref="form" :model="form">
              <el-form-item>
                <p>Email</p>
                <el-input id="email" type="email" v-model="form.email"></el-input>
              </el-form-item>
            
              <el-form-item>
                <p>Password</p>
                <el-input id="password" type="password" v-model="form.password" auto-complete="off"></el-input>
              </el-form-item>
              
          </el-form><br>
          
          <el-button @click="openMainPage()" type="success" round>Sign In</el-button><br><br>

          <p class="new">New to Sryas? <span><RouterLink class="link" to="/register">Register</RouterLink></span></p>
        </div>
  

  </div>

</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "logIn",
    props: {
        msg: String
    },
    methods: {
        openMainPage() {
          if (this.form.email === this.myEmail && this.form.password===this.myPassword) {
                this.$router.push(`/about`);
              } else {
                this.$alert('Incorrect email or password. ', 'Error', {
          confirmButtonText: 'OK'})
              }
        }
    },
    components: { RouterLink },
    data(){
      return{
        form: {
          firstName: '',
          lastName: '',
          email:'',
          password:'', 
        },
        myEmail: 'luzmartinez@example.com',
        myPassword: '123456'
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;

}


.new{
  font-size: small;
}

.link{
  color: greenyellow;
}
</style>
