<template>
<div>
  <div class="container-fluid mbh0  ">
    <div class="row bg-dark w-100 p-2 m-2 ">
      <div class="col-md-4">
        <h3>Welcome in our  App</h3>
      </div>
      <div class="col-md-3"></div>

      <div class="col-md-4"><img class="basel" :src="getImgUrl('logo.jpg')" alt="logo" /></div>

    </div>

    <div class="row mbh1 w-100 bg-dark p-2 m-2 ">
      <div class="col-md-6 ">
        <h3> <form class="" action="index.html" method="post" >
          <input class="text-center" type="text" name="" v-model="nameName" placeholder="Enter You name ">
        </form>
           </h3>
      </div>
      <div class="col-md-6 bg-dark"><h3> Mr/Ms : {{nameName}}  </h3></div>
    </div>

    <div class="row text-center mbh2 bg-dark w-100 p-2 m-2 ">
      <div class="col-md-4">
        <h3>Full your energy in from 10 ?</h3>
      </div>

      <div class="col-md-4">
        <button @click="counter ++">
          <div class="btn btn-success">+</div>
        </button>
        <button @click="counter --">
          <div class="btn btn-danger">-</div>
        </button>
      </div>
      <div class="col-md-4">
        <h3>Your Energy is {{counter}}</h3>
      </div>
    </div>

    <div class="row mbh4 bg-dark w-100 p-2 m-2 ">
      <div class="col-md-6"><h3>Do you want to know the date of  today ?</h3> <button @click="showNewDate">
      <div class="btn btn-success">click here</div>
      </button> </div>
      <div class="col-md-6">
        <h3>{{date}}</h3>
      </div>
    </div>

    <div class="row text-center divif  bg-dark w-100 p-2 m-2">
      <div class="col-md-4"><h3>How old are you ?</h3>
        <input type="text" v-model="age" placeholder="put your age ">
      </div>

      <div class="col-md-4">
        <h2 v-if="age < 15 ">you are under 15 years  </h2>
        <h2 v-else-if="age < 25  "> you are under 25 </h2>
        <h2 v-else-if="age < 35"> you are under 35 </h2>
        <h2 v-else> your Age is not between 10 till 35  </h2>
      </div>
      <div class="col-md-4">
        <h3> {{calc()}}</h3>
      </div>
    </div>


    <div class="row text-center mbh3 border border-dark w-100 p-2 m-2 bg-dark ">
      <div class="col-md-3 ">
        <h3>Which level you want ?</h3>
      </div>
      <div class="col-md-3 ">
        <button class="btn btn-success" @click="changeVideo('btn1')">Button 1</button>


      </div>
      <div class="col-md-3 ">
        <button class="btn btn-success" @click="changeVideo('btn2')">Button 2</button>

      </div>
      <div class="col-md-3 ">
        <button class="btn btn-success" @click="changeVideo('btn3')">Button 3</button>

      </div>
    </div>
    <div class="row w-100 p-2 m-2 mbhtest">
      <div class="col-md-12">
        <div class="container">

        </div>

        <video width="450" controls :src="video"></video>


      </div>


    <div class="mbh6 row text-center w-100 p-2 m-2 bg-dark" >
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <childChild />
      </div>
      <div class="col-md-4"> <ul class="list-group">
        <li
            class="list-group-item"
            v-for=" page in pagePage.pages"
            v-bind:key="page.id"

        >
        This page made by: {{ page.name }}
        </li>
      </ul></div>
    </div>

  </div>

</div>
</div>
  <div class="test">

  </div>

</template>

<script>
import mixins from "../mixins/mixins";
import pagePage from "@/data/pagePage";
import childChild from "@/components/childChild";
export default {
  name: "firstPage.vue",
  // eslint-disable-next-line vue/no-unused-components
  components: { childChild },
  data: function() {
    return {
      video: "",

      video1: '@/video/LOB_huiswerk.mp4',
      imgAlt: 'the img is not here ',
      nameName:'',
      counter:5,
      date: 'just click to know the date!',
      age:'',
      btn1:'/video/Justin_Bieber.mp4',
      btn2:'/video/Medium.mp4',
      btn3:'/video/Hard.mp4',
      skills: ['html','css','javascript'],
      pagePage,
    };

  }, methods: {
    showNewDate: function () {
      this.date = Date();
    },
    calc: function () {
      return " In days is = " + this.age * 365;
    },
   // getImgUrl(img) {
   //    return require("../assets/" +img);
   // },

    changeVideo(btn){
      if(btn === "btn1") {
        this.video = this.btn1;
      }
      else if(btn === 'btn2'){
        this.video = this.btn2;
      }
      else{
        this.video = this.btn3;
      }
    }
  },
  mixins: [mixins],
}
</script>

<style scoped>

.mbh0{
font-family: "Berlin Sans FB Demi";
  color: greenyellow;


  height: 120px;
}

.mbh1{

  height: 100px;
  color: greenyellow;

}
.mbh2{

color: greenyellow;
  height: 150px;
}
.mbh3{

  height: 100px;
  color: greenyellow;
}
.mbh4{
color: greenyellow;
  height: 150px;


}
.divif{
  height: 160px;
  color: greenyellow;
}

.basel{
  width: 100px;
  height: 50px ;
  float: right;
}

.mbh5{
  height: 200px ;
}
.mbh6{

}
.mbhtest{
  height: 300px;
}
.test{
  background-color: greenyellow;
  color: white;
}
</style>