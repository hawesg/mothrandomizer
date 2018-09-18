new Vue({
  el: '#app',
  data: function data() {return {
      firstTime: true,
      isActive:false,
      dialog: false,
      participants: [
      {
        id: 1,
        name: 'Garrett Hawes',
        picked: false,
        image: "http://garretthawes.com/moth/i/garrett.jpg" },

      {
        id: 2,
        name: 'Hannes Rusterholz',
        picked: false,
        image: "http://garretthawes.com/moth/i/hannes.jpg" },

      {
        id: 3,
        name: 'Jon Deirmenjian',
        picked: false,
        image: "http://garretthawes.com/moth/i/jon.jpg" },

      {
        id: 4,
        name: 'Natasha Patel',
        picked: false,
        image: "http://garretthawes.com/moth/i/natasha.jpg" },

      {
        id: 5,
        name: 'Ricky Lobel',
        picked: false,
        image: "http://garretthawes.com/moth/i/ricky.jpg" },

      {
        id: 6,
        name: 'Ranjith Kankanala',
        picked: false,
        image: "http://garretthawes.com/moth/i/ranjith.jpg" },

      {
        id: 7,
        name: 'Zayed Buali',
        picked: false,
        image: "http://garretthawes.com/moth/i/male.jpg" },

      {
        id: 8,
        name: 'Jeremy Ross',
        picked: false,
        image: "http://garretthawes.com/moth/i/jeremy.jpg" },

      {
        id: 9,
        name: 'Jacqueline Jelloian',
        picked: false,
        image: "http://garretthawes.com/moth/i/jacqueline.jpg" },

      {
        id: 10,
        name: 'Pandu Setiawan',
        picked: false,
        image: "http://garretthawes.com/moth/i/male.jpg" },

      {
        id: 11,
        name: 'Alex Chikovani',
        picked: false,
        image: "http://garretthawes.com/moth/i/alex.jpg" },

      {
        id: 12,
        name: 'Peter Dickinson',
        picked: false,
        image: "http://garretthawes.com/moth/i/peter.jpg" },

      {
        id: 13,
        name: 'Saloni Vyas',
        picked: false,
        image: "http://garretthawes.com/moth/i/female.jpg" },

      {
        id: 14,
        name: 'Melanie Kane',
        image: "http://garretthawes.com/moth/i/melanie.jpg" },

      {
        id: 15,
        name: 'Ken Yeh',
        picked: false,
        image: "http://garretthawes.com/moth/i/ken.jpg" },

      {
        id: 16,
        name: 'Hendrino Usnal',
        picked: false,
        image: "http://garretthawes.com/moth/i/hendrino.jpg" }
        ],
      pool: [],
      picked: [],
      roll: {name: 'Loading...', image: "http://garretthawes.com/moth/i/roll.gif"},
      current: {}
  };
  },


  created: function created() {
    // `this` points to the vm instance
    this.$data.pool = _.cloneDeep(this.$data.participants);
    this.$data.picked = [];
  },
  methods: {
    pick: function pick() {
      if(this.$data.firstTime) {
          this.$data.firstTime = false;
          this.$vuetify.goTo("#picker", {
              duration: 800,
              offset: 0,
              easing: 'easeInOutCubic'
          });
      }
      this.$data.current = this.$data.roll;
      var y = _.sample(this.$data.pool);
      _.remove(this.$data.pool, function (n) {
        return n.id == y.id;
      });
      this.$data.isActive=true;
      setTimeout(() => {
        this.$data.current = y;
        this.$data.picked = _.concat(y, this.$data.picked);
        this.$data.isActive=false;
      }, 2000);
    },
    clear: function clear() {
      this.$data.pool = _.cloneDeep(this.$data.participants);
      this.$data.picked = [];
      this.$data.current = [];
    } } });
