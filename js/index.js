
var vu = new Vue({
    el: '#app',
    data: {
        fab: false,
        sheet: false,
        isActive:false,
        dialog: false,
        pickDelay: 2500,
        delayActive: true,
        participants:[],
        section1: [
            {
                name: 'Garrett Hawes',
                image: "images/sm/Section1/garrett.jpg" },
            {
                name: 'Hannes Rusterholz',
                image: "images/sm/Section1/hannes.jpg" },

            {
                name: 'Jon Deirmenjian',
                image: "images/sm/Section1/jon.jpg" },

            {
                name: 'Natasha Patel',
                image: "images/sm/Section1/natasha.jpg" },

            {
                name: 'Ricky Lobel',
                image: "images/sm/Section1/ricky.jpg" },

            {
                name: 'Ranjith Kankanala',
                image: "images/sm/Section1/ranjith.jpg" },

            {
                name: 'Zayed Buali',
                image: "images/sm/Section1/zayed.jpg" },

            {
                name: 'Jeremy Ross',
                image: "images/sm/Section1/jeremy.jpg" },

            {
                name: 'Jacqueline Jelloian',
                image: "images/sm/Section1/jacqueline.jpg" },

            {
                name: 'Pandu Setiawan',
                image: "images/sm/Section1/pandu.jpg" },

            {
                name: 'Alex Chikovani',
                image: "images/sm/Section1/alex.jpg" },

            {
                name: 'Peter Dickinson',
                image: "images/sm/Section1/peter.jpg" },

            {
                name: 'Saloni Vyas',
                image: "images/sm/Section1/saloni.jpg" },

            {
                name: 'Melanie Kane',
                image: "images/sm/Section1/melanie.jpg" },

            {
                name: 'Ken Yeh',
                image: "images/sm/Section1/ken.jpg" },

            {
                name: 'Hendrino Usnal',
                image: "images/sm/Section1/hendrino.jpg" },
            {
                name: 'Ensieh Bahrami',
                image: "images/sm/Section1/ensieh.jpg" }
        ],
        section2: [
            {
                name: 'Angelica',
                image: "images/sm/Section2/angelica.jpg" },
            {
                name: 'Atorina',
                image: "images/sm/Section2/atorina.jpg" },
            {
                name: 'Brian',
                image: "images/sm/Section2/brian.jpg" },
            {
                name: 'Hang',
                image: "images/sm/Section2/hang.jpg" },
            {
                name: 'Hrag',
                image: "images/sm/Section2/hrag.jpg" },
            {
                name: 'Liz',
                image: "images/sm/Section2/liz.jpg" },
            {
                name: 'Maria',
                image: "images/sm/Section2/maria.jpg" },
            {
                name: 'McKenzie',
                image: "images/sm/Section2/mckenzie.jpg" },
            {
                name: 'Ricky',
                image: "images/sm/Section2/ricky.jpg" },
            {
                name: 'Tai',
                image: "images/sm/Section2/tai.jpg" },
            {
                name: 'Theresa Keh',
                image: "images/sm/Section2/theresa.jpg" },
            {
                name: 'Turki',
                image: "images/sm/Section2/turki.jpg" },
            {
                name: 'Vipul Vatsyayan',
                image: "images/sm/Section2/vipul.jpg" },
            {
                name: 'Aulton',
                image: "images/sm/Section2/aulton.jpg" },
            {
                name: 'Bahruz',
                image: "images/sm/Section2/bahruz.jpg" },
            {
                name: 'Carlos',
                image: "images/sm/Section2/carlos.jpg" },
            {
                name: 'Curtis',
                image: "images/sm/Section2/curtis.jpg" },
            {
                name: 'Derek',
                image: "images/sm/Section2/derek.jpg" },
            {
                name: 'Eric',
                image: "images/sm/Section2/eric.jpg" },
            {
                name: 'Adrineh',
                image: "images/sm/Section2/adrineh.jpg" },
            {
                name: 'Zach',
                image: "images/sm/Section2/zach.jpg" },
            {
                name: 'Jenna',
                image: "images/sm/Section2/jenna.jpg" }
        ],
        currentClass: [],
        classes: ["Section 1", "Section 2"],
        sampleSize: "0",
        currentSection: "",
        sample:[],
        pool: [],
        picked: [],
        roll: {name: '', image: "images/sm/Section1/roll.gif"},
        current: {
            image: "images/sm/init.jpg"
        },
        dialog2: false,
        dialog3: false,
        snackbar: false,
        headerImages: [
            {
                value: "images/sm/headers/header-comic.jpg",
                name: "Comic"
            },
            {
                value: "images/sm/headers/vintage-animated.gif",
                name: "Comic Animated"
            },
            {
                value: "images/sm/headers/vintage-annimation1.gif",
                name: "Vintage Animated"
            },
            {
                value: "images/sm/headers/anaglyph.jpg",
                name: "Analygraph"
            },
            {
                value: "images/sm/headers/anaglyph2.jpg",
                name: "Analygraph 2"
            },
            {
                value: "images/sm/headers/moth-header-animated.gif",
                name: "Glitch Animated"
            },
            {
                value: "images/sm/headers/animated-glitch-2.gif",
                name: "Glitch Animated 2"
            },
            {
                value: "images/sm/headers/watercolor.jpg",
                name: "Water Color"
            }
        ],
        headerImage: "images/sm/headers/anaglyph.jpg",
        headerImageNumber: 3,
    },
    watch: {
        currentSection: function (val) {
            this.participants = (val == "Section 1") ? this.section1 : this.section2;
            this.roll.image = (val == "Section 1") ? "images/sm/Section1/roll.gif" : "images/sm/Section2/roll.gif";
            this.pool = _.cloneDeep(this.participants);
            this.picked = [];
            this.current = {
                image: "images/sm/init.jpg"
            };
            this.sampleSize = "0"
        },
        sampleSize: function (val) {
            var number = parseInt(val,10);
            this.sample = _.sampleSize(this.participants, number);
            setTimeout(() => {
                this.sample = _.shuffle(this.sample);
            }, 500);
        },
        dialog2: function (val){
            this.sampleSize = "0";
        },
        headerImageNumber: function (val){
            this.headerImageNumber=val%8;
            this.headerImage=this.headerImages[this.headerImageNumber].value;
        },
        poolIsEmpty: function (val){
            this.snackbar=val;
        }
    },
    computed: {
        pickedIsEmpty: function () {
            return _.size(this.picked)==0;
        },
        poolIsEmpty: function(){
            return _.size(this.participants)==_.size(this.picked);
        },
        sampleSelector: function(){
            var size = _.size(this.participants);
            return _.range(size).map(function (index) { return index+"" });
        }
    },
    created: function () {
        var date = new Date();
        this.currentSection=(date.getHours()==13||(date.getHours()==14&&date.getMinutes()<20))?"Section 2":"Section 1";
    },
    methods: {
        pick: function () {
            if(_.size(this.pool)!=0 && !this.isActive){
                this.current = this.roll;
                var y = _.sample(this.pool);
                _.remove(this.pool, function (n) {
                    return n.name == y.name;
                });
                this.isActive=true;
                if(this.pickDelay!=0 && this.delayActive){
                    setTimeout(() => {
                        this.current = y;
                        this.picked = _.concat(y, this.$data.picked);
                        this.isActive=false;
                    }, this.pickDelay);
                }
                else{
                    this.current = y;
                    this.picked = _.concat(y, this.$data.picked);
                    this.isActive=false;
                }
            }
        },
        clear: function clear() {
            this.pool = _.cloneDeep(this.participants);
            this.picked = [];
            this.current = {
                name: "",
                image: "images/sm/init.jpg"
            };
        },
        shuffle: function() {
            this.sample = _.shuffle(this.sample);
        }
    } });
