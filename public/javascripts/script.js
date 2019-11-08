var app = new Vue({
  el: '#app',
  data: {
    songs:[],
    selection0:"0",
    selection1:"0",
    selection2:"0",
    selection3:"0",
    selection4:"0",
    animal:{},
    showSongs:true,
  },
  created() {
    fetch("getSongs").then((data) => {
      return (data.json());
    }).then((songs) => {
      this.songs = songs;
    });
  },
  methods: {
    takeAgain(){
      this.showSongs=true;
    },
    fetchAnimal() {
      console.log("In Fetch animal");
      console.log(this.selection0);
      let total = this.selection0 + this.selection1 + this.selection2 + this.selection3 + this.selection4;
      let url = "getAnimal?q=" + total;
      console.log(url);
      fetch(url)
        .then((data) =>{
          return(data.json());
        })
          .then((animal)=>{
            this.animal = animal;
            this.showSongs=false;
          });
    },
  },
});
