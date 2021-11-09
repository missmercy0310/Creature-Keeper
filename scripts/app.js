/* === Sanity Check === */

console.log("Welcome to Creature Keeper");

/* === Variables === */

const $screens = $(".top-screen");
const $top = $(".top-fourth");
const $middle = $(".middle-half");
const $bottom = $(".bottom-fourth");
const $below = $(".bottom-screen");
const $collection = $(".collection");

/* === Game Object === */

const game = {
    /* === Obj Properties === */

    /* Stats */
    hunger: 0,
    boredom: 0,
    bloodlust: 0,

    /* Timer */
    time: 0,
    age: 1,

    /* Naming */
    letterIndex: 0,
    alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    letters: ['A', 'A', 'A', 'A', 'A'],
    name: '',

    /* Dom Elements */
    $arrow: $(".arrow"),
    $select: $(".select"),
    $power: $(".power"),

    /* Creatures */
    creatureIndex: 0,
    availableCreatures: [
        {
            species: "Mist Creature",
            nameTag: "<p>Mist Creature</p>",
            class: "mist",
            imgs: [`<img src="gifs/Mist Tamagotchi.gif">`, `<img src="gifs/Mist Tamagotchi Stage 2.gif">`, `<img src="gifs/Mist Tamagotchi Stage 3.gif">`],
            badge: '<i class="fas fa-cloud"></i>',
        },
        {
            species: "Slime Creature",
            nameTag: "<p>Slime Creature</p>",
            class: "slime",
            imgs: [`<img src="gifs/Slime Tamagotchi.gif">`, `<img src="gifs/Slime Tamagotchi Stage 2.gif">`, `<img src="gifs/Slime Tamagotchi Stage 3.gif">`],
            badge: '<i class="fas fa-disease"></i>',
        },
        {
            species: "Eyeball Creature",
            nameTag: "<p>Eyeball Creature</p>",
            class: "eyeball",
            imgs: [`<img src="gifs/Eyeball Tamagotchi.gif">`, `<img src="gifs/Eyeball Tamagotchi Stage 2.gif">`, `<img src="gifs/Eyeball Tamagotchi Stage 3.gif">`],
            badge: '<i class="fas fa-eye"></i>',
        },
        {
            species: "Worm Creature",
            nameTag: "<p>Worm Creature</p>",
            class: "worm",
            imgs: [`<img src="gifs/Worm Tamagotchi.gif">`, `<img src="gifs/Worm Tamagotchi Stage 2.gif">`, `<img src="gifs/Worm Tamagotchi Stage 3.gif">`],
            badge: '<i class="fas fa-wave-square"></i>',
        },
        {
            species: "Sentient Coconut",
            nameTag: "<p>Sentient Coconut</p>",
            class: "coconut",
            imgs: [`<img src="images/Sentient Coconut Tamagotchi.png">`, `<img src="images/Sentient Coconut Tamagotchi Stage 2.png">`, `<img src="images/Sentient Coconut Tamagotchi Stage 3.png">`],
            badge: '<i class="fas fa-bowling-ball"></i>',
        },
    ],
    selectedCreature: [],
    completedCreatures: [],

    /* Dom Inputs */
    $interactSetup: `<p class="feed">feed</p><p class="play-with">play with</p><p class="satiate">satiate</p>`,
    $startupMessage: `<h2>Welcome!</h2><p>please press <i class="fas fa-angle-double-right"></i></p>`,
    $introMessage: `<p>You have been tasked with caring for a baby creature of your choice. Have fun with that!</p><p>press <i class="fas fa-angle-double-right"></i></p>`,
    $deathMessage: `<i class="fas fa-skull death-icon"></i><p>You have displeased your creature.</p><p>You have died.</p>`,
    $extroMessage: `<i class="fas fa-smile-beam extro-icon"></i><h4>Congrats!</h4><p>Your creature will now venture into the world and grow to an untenable size! Thanks for playing Creature Keeper!</p>`,
    $superExtroMessage: `<i class="fas fa-smile-beam extro-icon"></i><h4>Congrats!</h4><p>You've unleashed all the creatures into the world! I hope you're proud of yourself!</p>`,

    /* === Methods === */

    /* Setup */

    gameStart () {
        clearInterval(this.timer);
        this.gameReset();
        $middle.append(this.$startupMessage).addClass("startup");
    },

    gameReset() {
        this.statReset();
        this.time = 0;
        this.age = 1;
        this.letterIndex = 0;
        this.letters = ['A','A','A','A','A'];
        this.name = '';
    },

    statReset() {
        this.hunger = 0;
        this.boredom = 0;
        this.bloodlust = 0;
    },

    setUpStage () {
        if (this.age >= 4 && $collection.hasClass("mist slime eyeball worm coconut")) {
            clearInterval(this.timer);
            this.gameReset();
            $top.empty();
            $middle.empty().removeClass(`stage-${this.age}`).append(this.$superExtroMessage).addClass("superExtro");
            $bottom.empty();
        } else if (this.age >= 4) {
            clearInterval(this.timer);
            this.gameReset();
            $top.empty();
            $middle.empty().removeClass(`stage-${this.age}`).append(this.$extroMessage).addClass("extro");
            $bottom.empty().append(`<p>press <i class="fas fa-check"></i></p>`);
        // NOTE use letterIndex methodology to create for loop for these
        } else if ($middle.hasClass("stage-0")) {
            for (let i = 0; i < this.availableCreatures.length; i++) {
                if ($middle.hasClass(this.availableCreatures[i].class)) {
                    $middle.empty().append(this.availableCreatures[i].imgs[0]);
                }
            };
            this.statReset();
            $top.empty().append(`<section class="basic-info"><p class="name">name: ${this.name}</p><p class="age">age: ${this.age}</p></section><section class="stats"><i class="fas fa-utensils"><progress class="hunger-bar" value="0" max="10"></progress><i class="fas fa-meh"></i><progress class="boredom-bar" value="0" max="10"></progress><i class="fas fa-skull"></i><progress class="bloodlust-bar" value="0" max="10"></progress></section>`);
            $middle.removeClass("stage-0").addClass(`stage-${this.age}`);
            $bottom.empty().append(this.$interactSetup);
            $(".feed").css("color", "red").addClass("selected");
            clearInterval(this.timer);
            this.startTimer();
        } else if ($middle.hasClass("stage-1")) {
            for (let i = 0; i < this.availableCreatures.length; i++) {
                if ($middle.hasClass(this.availableCreatures[i].class)) {
                    $middle.empty().append(this.availableCreatures[i].imgs[1]);
                }
            };
            this.statReset();
            $top.empty().append(`<section class="basic-info"><p class="name">name: ${this.name}</p><p class="age">age: ${this.age}</p></section><section class="stats"><i class="fas fa-utensils"><progress class="hunger-bar" value="0" max="10"></progress><i class="fas fa-meh"></i><progress class="boredom-bar" value="0" max="10"></progress><i class="fas fa-skull"></i><progress class="bloodlust-bar" value="0" max="10"></progress></section>`);
            $middle.removeClass("stage-1").addClass(`stage-${this.age}`);
            $bottom.empty().append(this.$interactSetup);
            $(".feed").css("color", "red").addClass("selected");
            clearInterval(this.timer);
            this.startTimer();
        } else if ($middle.hasClass("stage-2")) {
            for (let i = 0; i < this.availableCreatures.length; i++) {
                if ($middle.hasClass(this.availableCreatures[i].class)) {
                    $middle.empty().append(this.availableCreatures[i].imgs[2]);
                }
            };
            this.statReset();
            $top.empty().append(`<section class="basic-info"><p class="name">name: ${this.name}</p><p class="age">age: ${this.age}</p></section><section class="stats"><i class="fas fa-utensils"><progress class="hunger-bar" value="0" max="10"></progress><i class="fas fa-meh"></i><progress class="boredom-bar" value="0" max="10"></progress><i class="fas fa-skull"></i><progress class="bloodlust-bar" value="0" max="10"></progress></section>`);
            $middle.removeClass("stage-2").addClass(`stage-${this.age}`);
            $bottom.empty().append(this.$interactSetup);
            $(".feed").css("color", "red").addClass("selected");
            clearInterval(this.timer);
            this.startTimer();
        }
    },

    /* Buttons */

    arrowButton () {
        if ($middle.hasClass("startup")) {
            $middle.empty().removeClass("startup").append(this.$introMessage).addClass("intro");
        } else if ($middle.hasClass("intro")) {
            this.creatureSelect();
        } else if ($middle.hasClass("birth")) {
            // NOTE use letterIndex methodology to create for loop for these and add mist here rather than in previous step
            if ($middle.hasClass("mist")) {
                $middle.empty().removeClass("mist").append(`<img src="gifs/Slime Tamagotchi.gif">`).addClass("slime");
                $bottom.empty().append("<p>Slime Creature</p>");
            } else if ($middle.hasClass("slime")) {
                $middle.empty().removeClass("slime").append(`<img src="gifs/Eyeball Tamagotchi.gif">`).addClass("eyeball");
                $bottom.empty().append("<p>Eyeball Creature</p>");
            } else if ($middle.hasClass("eyeball")) {
                $middle.empty().removeClass("eyeball").append(`<img src="gifs/Worm Tamagotchi.gif">`).addClass("worm");
                $bottom.empty().append("<p>Worm Creature</p>");
            } else if ($middle.hasClass("worm")) {
                $middle.empty().removeClass("worm").append(`<img src="images/Sentient Coconut Tamagotchi.png">`).addClass("coconut");
                $bottom.empty().append("<p>Sentient Coconut</p>");
            } else if ($middle.hasClass("coconut")) {
                $middle.empty().removeClass("coconut").append(`<img src="gifs/Mist Tamagotchi.gif">`).addClass("mist");
                $bottom.empty().append("<p>Mist Creature</p>");
            };
        } else if ($middle.hasClass("stage-0")) {
            for (let i = 0; i < this.letters.length; i++) {
                if ($(`.letter-${i+1}`).hasClass("selected")) {
                    if (this.letterIndex >= 25) {
                        this.letterIndex = 0;
                        $(`.letter-${i+1}`).text(`${this.alphabet[this.letterIndex]}`);
                        this.letters[i] = this.alphabet[this.letterIndex];
                    } else {
                        this.letterIndex++;
                        $(`.letter-${i+1}`).text(`${this.alphabet[this.letterIndex]}`);
                        this.letters[i] = this.alphabet[this.letterIndex];
                    }
                }
            }
        } else if ($middle.hasClass(`stage-${this.age}`)) {
            if ($(".feed").hasClass("selected")) {
                $(".feed").removeClass("selected").css("color", "black");
                $(".play-with").css("color", "red").addClass("selected");
            } else if ($(".play-with").hasClass("selected")) {
                $(".play-with").removeClass("selected").css("color", "black");
                $(".satiate").css("color", "red").addClass("selected");
            } else if ($(".satiate").hasClass("selected")) {
                $(".satiate").removeClass("selected").css("color", "black");
                $(".feed").css("color", "red").addClass("selected");
            }
        }
    },

    selectButton () {
        if ($middle.hasClass("birth")) {
            this.stage0();
        } else if ($middle.hasClass("extro") || $middle.hasClass("death")) {
            this.creatureSelect();
        } else if ($middle.hasClass("stage-0")) {
            // NOTE use letterIndex methodology to create for loop for these and select letter-1 here rather than in previous step
            if ($(".letter-1").hasClass("selected")) {
                $(".letter-1").removeClass("selected").css("color", "black");
                this.name += this.letters[0];
                $(".letter-2").css("color", "red").addClass("selected");
                this.letterIndex = 0;
            } else if ($(".letter-2").hasClass("selected")) {
                $(".letter-2").removeClass("selected").css("color", "black");
                this.name += this.letters[1];
                $(".letter-3").css("color", "red").addClass("selected");
                this.letterIndex = 0;
            } else if ($(".letter-3").hasClass("selected")) {
                $(".letter-3").removeClass("selected").css("color", "black");
                this.name += this.letters[2];
                $(".letter-4").css("color", "red").addClass("selected");
                this.letterIndex = 0;
            } else if ($(".letter-4").hasClass("selected")) {
                $(".letter-4").removeClass("selected").css("color", "black");
                this.name += this.letters[3];
                $(".letter-5").css("color", "red").addClass("selected");
                this.letterIndex = 0;
            } else if ($(".letter-5").hasClass("selected")) {
                this.name += this.letters[4];
                this.setUpStage();
            }
        } else if ($(".feed").hasClass("selected") && this.hunger > 0) {
            this.hunger--;
            $(".hunger-bar").val(`${this.hunger}`);
        } else if ($(".play-with").hasClass("selected") && this.boredom > 0) {
            this.boredom--;
            $(".boredom-bar").val(`${this.boredom}`);
        } else if ($(".satiate").hasClass("selected") && this.bloodlust > 0) {
            this.bloodlust--;
            $(".bloodlust-bar").val(`${this.bloodlust}`);
        }
    },

    powerButton (event) {
        if ($(event.target).hasClass("pressed") === false) {
            console.log("Powering On...");
            $(event.target).addClass("pressed");
            $screens.css("background-color","lightgrey");
            for (let i = 0; i < this.availableCreatures.length; i++) {
                if ($collection.hasClass(this.availableCreatures[i].class)) {
                    $below.css("background-color","lightgrey");
                    $collection.append(this.availableCreatures[i].badge)
                }
            };
            this.gameStart();
        } else if ($(event.target).hasClass("pressed") && $collection.hasClass("mist slime eyeball worm coconut")) {
            console.log("Powering Off...");
            $(event.target).removeClass("pressed");
            this.powerOff();
            $collection.removeClass("mist slime eyeball worm coconut");
        } else {
            console.log("Powering Off...");
            $(event.target).removeClass("pressed");
            this.powerOff();
        }
    },

    powerOff() {
            clearInterval(this.timer);
            $screens.css("background-color","darkgray");
            $top.empty();
            $middle.empty();
            $bottom.empty();
            $below.css("background-color","darkgray");
            $collection.empty();
    },

    /* Game Progress Stages */

    stage0 () {
        $top.empty().append("<h4>Name your creature:</h4>");
        // NOTE a for loop to append each letter
        $middle.empty().removeClass("birth").append(`<div class="naming"><p class="letter-1">${this.letters[0]}</p><p class="letter-2">${this.letters[1]}</p><p class="letter-3">${this.letters[2]}</p><p class="letter-4">${this.letters[3]}</p><p class="letter-5">${this.letters[4]}</p></div>`).addClass("stage-0");
        $(".letter-1").css("color", "red").addClass("selected");
        $bottom.empty();
    },

    creatureSelect () {
        // NOTE put these into the next step
        if ($middle.hasClass("intro")) {
            $top.append("<h4>Choose your creature:</h4>");
            $middle.empty().removeClass("intro").append(`<img src="gifs/Mist Tamagotchi.gif">`).addClass("mist birth");
            $bottom.append("<p>Mist Creature</p>");
        } else if ($middle.hasClass("extro")) {
            $top.append("<h4>Choose your creature:</h4>");
            $middle.empty().removeClass("extro").append(`<img src="gifs/Mist Tamagotchi.gif">`).addClass("mist birth");
            $bottom.empty().append("<p>Mist Creature</p>");
        } else if ($middle.hasClass("death")) {
            $top.append("<h4>Choose your creature:</h4>");
            $middle.empty().removeClass("death").append(`<img src="gifs/Mist Tamagotchi.gif">`).addClass("mist birth");
            $bottom.empty().append("<p>Mist Creature</p>");
        }
    },

    morphMessage () {
        $top.empty();
        $middle.empty().append("<p>Your creature is growing!</p>");
        $bottom.empty();
    },

    finalMorphMessage () {
        $top.empty();
        $middle.empty().append("<p>Your creature has reached adulthood!</p>");
        $bottom.empty();
    },

    death() {
        clearInterval(this.timer);
        this.statReset();
        $top.empty();
        $middle.empty().removeClass(`stage-${this.age} mist slime eyeball worm coconut`).append(this.$deathMessage).addClass("death");
        $bottom.empty().append(`<p>press <i class="fas fa-check"></i></p>`);
        $below.css("background-color","darkgray");
        $collection.empty().removeClass("mist slime eyeball worm coconut");
    },

    complete() {
        for (let i = 0; i < this.availableCreatures.length; i++) {
            if ($middle.hasClass(this.availableCreatures[i].class) && $collection.hasClass(this.availableCreatures[i].class) === false) {
                $middle.removeClass(this.availableCreatures[i].class);
                $below.css("background-color","lightgrey");
                $collection.addClass(this.availableCreatures[i].class).append(this.availableCreatures[i].badge);
            }
        };
    },

    /* === Timer === */
    timer: null,

    startTimer() {
        this.timer = setInterval(this.increaseTime.bind(game), 1000);
    },

    increaseTime() {
        this.time++;
        console.log(this.time);
        if (this.hunger >= 10 || this.boredom >= 10 || this.bloodlust >= 10) {
            this.death();
        };
        if (this.time % 2 === 0) {
            // NOTE a function with params and a for loop
            if ($middle.hasClass("stage-1")) {
                this.hunger++;
                $(".hunger-bar").val(`${this.hunger}`);
                this.boredom+=0.75;
                $(".boredom-bar").val(`${this.boredom}`);
                this.bloodlust+=1.5;
                $(".bloodlust-bar").val(`${this.bloodlust}`);
            } else if ($middle.hasClass("stage-2")) {
                this.hunger+=1.5;
                $(".hunger-bar").val(`${this.hunger}`);
                this.boredom++;
                $(".boredom-bar").val(`${this.boredom}`);
                this.bloodlust+=2;
                $(".bloodlust-bar").val(`${this.bloodlust}`);
            } else if ($middle.hasClass("stage-3")) {
                this.hunger+=2;
                $(".hunger-bar").val(`${this.hunger}`);
                this.boredom+=1.5;
                $(".boredom-bar").val(`${this.boredom}`);
                this.bloodlust+=3;
                $(".bloodlust-bar").val(`${this.bloodlust}`);
            }
        };
        if ($middle.hasClass("stage-1") || $middle.hasClass("stage-2")) {
            if (this.time >= 30) {
                this.statReset();
                this.morphMessage();
            };
            if (this.time >= 33) {
                this.time = 0;
                this.age++;
                $(".age").text(`age: ${this.age}`);
                this.setUpStage();
            };
        } else if ($middle.hasClass("stage-3")) {
            if (this.time >= 30) {
                this.statReset();
                this.finalMorphMessage();
            };
            if (this.time >= 33) {
                this.time = 0;
                this.age++;
                $(".age").text(`age: ${this.age}`);
                this.complete();
                this.setUpStage();
            };
        };
    },
};

/* === Event Listeners === */

game.$power.click(game.powerButton.bind(game));
game.$select.click(game.selectButton.bind(game));
game.$arrow.click(game.arrowButton.bind(game));

/* === Key Binding === */

$(window).keypress(function(e) {
    if (e.key == "p") {
        game.$power.click();
    } else if (e.key == "j") {
        game.$select.click();
    } else if (e.key == "d") {
        game.$arrow.click();
    }
});