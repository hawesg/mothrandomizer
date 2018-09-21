
new Vue({
  el: '#app',
  data: {
      firstTime: true,
      isActive:false,
      dialog: false,
      pickDelay: 2500,
      participants:[],
      fullTime: [
    {
        id: 1,
        name: 'Garrett Hawes',
        picked: false,
        image: "images/garrett.jpg" },
    {
        id: 2,
        name: 'Hannes Rusterholz',
        picked: false,
        image: "images/hannes.jpg" },

    {
        id: 3,
        name: 'Jon Deirmenjian',
        picked: false,
        image: "images/jon.jpg" },

    {
        id: 4,
        name: 'Natasha Patel',
        picked: false,
        image: "images/natasha.jpg" },

    {
        id: 5,
        name: 'Ricky Lobel',
        picked: false,
        image: "images/ricky.jpg" },

    {
        id: 6,
        name: 'Ranjith Kankanala',
        picked: false,
        image: "images/ranjith.jpg" },

    {
        id: 7,
        name: 'Zayed Buali',
        picked: false,
        image: "images/zayed.jpg" },

    {
        id: 8,
        name: 'Jeremy Ross',
        picked: false,
        image: "images/jeremy.jpg" },

    {
        id: 9,
        name: 'Jacqueline Jelloian',
        picked: false,
        image: "images/jacqueline.jpg" },

    {
        id: 10,
        name: 'Pandu Setiawan',
        picked: false,
        image: "images/pandu.jpg" },

    {
        id: 11,
        name: 'Alex Chikovani',
        picked: false,
        image: "images/alex.jpg" },

    {
        id: 12,
        name: 'Peter Dickinson',
        picked: false,
        image: "images/peter.jpg" },

    {
        id: 13,
        name: 'Saloni Vyas',
        picked: false,
        image: "images/saloni.jpg" },

    {
        id: 14,
        name: 'Melanie Kane',
        image: "images/melanie.jpg" },

    {
        id: 15,
        name: 'Ken Yeh',
        picked: false,
        image: "images/ken.jpg" },

    {
        id: 16,
        name: 'Hendrino Usnal',
        picked: false,
        image: "images/hendrino.jpg" },
        {id: 17,
         name: 'Ensieh Bahrami',
         picked: false,
         image: "images/ensieh.jpg" }
],
      currentClass: 0,
      classes: ["Full Time", "Professional"],
      e1: "Full Time",
      pool: [],
      picked: [],
      roll: {name: '', image: "images/roll.gif"},
      current: {
          image: "images/init.jpg"
      }
  },
   computed: {
        listIsEmpty: function () {
            return _.size(this.picked)==0;
        }
    },
  created: function () {
    //this.participants = _.cloneDeep(fullTime);
    this.participants = _.cloneDeep(this.fullTime);
    this.pool = _.cloneDeep(this.participants);
    this.$data.picked = [];
  },
  methods: {
    pick: function () {
      if(this.firstTime) {
          this.firstTime = false;
          this.$vuetify.goTo("#picker", {
              duration: 800,
              offset: 0,
              easing: 'easeInOutCubic'
          });
      }
      this.current = this.roll;
      var y = _.sample(this.pool);
      _.remove(this.pool, function (n) {
        return n.id == y.id;
      });
      this.isActive=true;
      setTimeout(() => {
        this.current = y;
        this.picked = _.concat(y, this.$data.picked);
        this.isActive=false;
      }, this.pickDelay);
    },
    clear: function clear() {
      this.pool = _.cloneDeep(this.participants);
      this.picked = [];
      this.current = {
          image: "images/init.jpg"
      };
    } } });
