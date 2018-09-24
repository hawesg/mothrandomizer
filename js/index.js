
var vu = new Vue({
    el: '#app',
    data: {
        fab: false,
        isActive:false,
        dialog: false,
        pickDelay: 2500,
        participants:[],
        section1: [
            {
                name: 'Garrett Hawes',
                image: "images/section1/garrett.jpg" },
            {
                name: 'Hannes Rusterholz',
                image: "images/section1/hannes.jpg" },

            {
                name: 'Jon Deirmenjian',
                image: "images/section1/jon.jpg" },

            {
                name: 'Natasha Patel',
                image: "images/section1/natasha.jpg" },

            {
                name: 'Ricky Lobel',
                image: "images/section1/ricky.jpg" },

            {
                name: 'Ranjith Kankanala',
                image: "images/section1/ranjith.jpg" },

            {
                name: 'Zayed Buali',
                image: "images/section1/zayed.jpg" },

            {
                name: 'Jeremy Ross',
                image: "images/section1/jeremy.jpg" },

            {
                name: 'Jacqueline Jelloian',
                image: "images/section1/jacqueline.jpg" },

            {
                name: 'Pandu Setiawan',
                image: "images/section1/pandu.jpg" },

            {
                name: 'Alex Chikovani',
                image: "images/section1/alex.jpg" },

            {
                name: 'Peter Dickinson',
                image: "images/section1/peter.jpg" },

            {
                name: 'Saloni Vyas',
                image: "images/section1/saloni.jpg" },

            {
                name: 'Melanie Kane',
                image: "images/section1/melanie.jpg" },

            {
                name: 'Ken Yeh',
                image: "images/section1/ken.jpg" },

            {
                name: 'Hendrino Usnal',
                image: "images/section1/hendrino.jpg" },
            {
                name: 'Ensieh Bahrami',
                image: "images/section1/ensieh.jpg" }
        ],
        section2: [
            {
                name: 'Angelica',
                image: "images/section2/angelica.jpg" },
            {
                name: 'Atorina',
                image: "images/section2/atorina.jpg" },
            {
                name: 'Brian',
                image: "images/section2/brian.jpg" },
            {
                name: 'Hang',
                image: "images/section2/hang.jpg" },
            {
                name: 'Hrag',
                image: "images/section2/hrag.jpg" },
            {
                name: 'Liz',
                image: "images/section2/liz.jpg" },
            {
                name: 'Maria',
                image: "images/section2/maria.jpg" },
            {
                name: 'McKenzie',
                image: "images/section2/mckenzie.jpg" },
            {
                name: 'Ricky',
                image: "images/section2/ricky.jpg" },
            {
                name: 'Tai',
                image: "images/section2/tai.jpg" },
            {
                name: 'Theresa Keh',
                image: "images/section2/theresa.jpg" },
            {
                name: 'Turki',
                image: "images/section2/turki.jpg" },
            {
                name: 'Vipul Vatsyayan',
                image: "images/section2/vipul.jpg" },
            {
                name: 'Aulton',
                image: "images/section2/aulton.jpg" },
            {
                name: 'Bahruz',
                image: "images/section2/bahruz.jpg" },
            {
                name: 'Carlos',
                image: "images/section2/carlos.jpg" },
            {
                name: 'Curtis',
                image: "images/section2/curtis.jpg" },
            {
                name: 'Derek',
                image: "images/section2/derek.jpg" },
            {
                name: 'Eric',
                image: "images/section2/eric.jpg" },
            {
                name: 'Adrineh',
                image: "images/section2/adrineh.jpg" },
            {
                name: 'Zach',
                image: "images/section2/zach.jpg" },
            {
                name: 'Jenna',
                image: "images/section2/jenna.jpg" }
        ],
        currentClass: [],
        classes: ["Section 1", "Section 2"],
        currentSection: "",
        pool: [],
        picked: [],
        roll: {name: '', image: "images/section1/roll.gif"},
        current: {
            image: "images/init2.jpg"
        }
    },
    watch: {
        currentSection: function (val) {
            this.participants = (val == "Section 1") ? this.section1 : this.section2;
            this.roll.image = (val == "Section 1") ? "images/section1/roll.gif" : "images/section2/roll.gif";
            this.pool = _.cloneDeep(this.participants);
            this.picked = [];
            this.current = {
                image: "images/init2.jpg"
            };
        }
    },
    computed: {
        pickedIsEmpty: function () {
            return _.size(this.picked)==0;
        },
        poolIsEmpty: function(){
            return _.size(this.participants)==_.size(this.picked);
        }
    },
    created: function () {
        var date = new Date();
        this.currentSection=(date.getHours()==23||(date.getHours()==13&&date.getMinutes()<20))?"Section 2":"Section 1";
    },
    methods: {
        pick: function () {
            if(_.size(this.pool)!=0){
                this.current = this.roll;
                var y = _.sample(this.pool);
                _.remove(this.pool, function (n) {
                    return n.name == y.name;
                });
                this.isActive=true;
                if(this.pickDelay!=0){
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
            else{
                // Add error message
            }
        },
        clear: function clear() {
            this.pool = _.cloneDeep(this.participants);
            this.picked = [];
            this.current = {
                name: "",
                image: "images/init2.jpg"
            };
        } } });
