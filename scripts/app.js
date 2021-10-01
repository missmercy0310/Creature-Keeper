console.log("Welcome to Creature Keeper");

const game = {
    hunger: 0,
    boredom: 0,
    bloodlust: 0,
    time: 0,
    age: 1,

    letterIndex: 0,
    alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    letter1: 'A',
    letter2: 'A',
    letter3: 'A',
    letter4: 'A',
    letter5: 'A',
    name: '',

    $arrow: $("#arrow"),
    $select: $("#select"),
    $power: $("#power"),

    $top: $("#top-fourth"),
    $middle: $("#middle-half"),
    $bottom: $("#bottom-fourth"),

    $collection: $("#collection"),

    $interactSetup: `<p class="feed">feed</p><p class="play-with">play with</p><p class="satiate">satiate</p>`,

    $startupMessage: `<h2>Welcome!</h2><p>please press <i class="fas fa-angle-double-right"></i></p>`,
    $introMessage: `<p>You have been tasked with caring for a baby creature of your choice. Have fun with that!</p><p>press <i class="fas fa-angle-double-right"></i></p>`,
    $deathMessage: `<i id="death" class="fas fa-skull"></i><p>You have displeased your creature.</p><p>You have died.</p>`,
    $extroMessage: `<i id="extro" class="fas fa-smile-beam"></i><h4>Congrats!</h4><p>Your creature will now venture into the world and grow to an untenable size! Thanks for playing Creature Keeper!</p>`,
    $superExtroMessage: `<i id="extro" class="fas fa-smile-beam"></i><h4>Congrats!</h4><p>You've unleashed all the creatures into the world! I hope you're proud of yourself!</p>`,

    powerButton (event) {
        if ($(event.target).hasClass("pressed") === false) {
            console.log("Powering On...");
            $(event.target).addClass("pressed");
            $("#screens").css("background-color","lightgrey");
            if (this.$collection.hasClass("mist")) {
                $("#below").css("background-color","lightgrey");
                this.$collection.append('<i class="fas fa-cloud"></i>');
            };
            if (this.$collection.hasClass("slime")) {
                $("#below").css("background-color","lightgrey");
                this.$collection.append('<i class="fas fa-disease"></i>');
            };
            if (this.$collection.hasClass("eyeball")) {
                $("#below").css("background-color","lightgrey");
                this.$collection.append('<i class="fas fa-eye"></i>');
            };
            if (this.$collection.hasClass("worm")) {
                $("#below").css("background-color","lightgrey");
                this.$collection.append('<i class="fas fa-wave-square"></i>');
            };
            if (this.$collection.hasClass("coconut")) {
                $("#below").css("background-color","lightgrey");
                this.$collection.append('<i class="fas fa-bowling-ball"></i>');
            };
            this.gameStart();
        } else if ($(event.target).hasClass("pressed") && (this.$collection.hasClass("mist")) && (this.$collection.hasClass("slime")) && (this.$collection.hasClass("eyeball")) && (this.$collection.hasClass("worm")) && (this.$collection.hasClass("coconut"))) {
            console.log("Powering Off...");
            $(event.target).removeClass("pressed");
            clearInterval(this.timer);
            $("#screens").css("background-color","darkgray");
            $("#below").css("background-color","darkgray");
            this.$top.empty();
            this.$middle.empty();
            this.$bottom.empty();
            this.$collection.empty().removeClass("mist slime eyeball worm coconut");
        } else {
            console.log("Powering Off...");
            $(event.target).removeClass("pressed");
            clearInterval(this.timer);
            $("#screens").css("background-color","darkgray");
            $("#below").css("background-color","darkgray");
            this.$top.empty();
            this.$middle.empty();
            this.$bottom.empty();
            this.$collection.empty();
        }
    },

    gameStart (event) {
        clearInterval(this.timer);
        this.hunger = 0;
        this.boredom = 0;
        this.bloodlust = 0;
        this.time = 0;
        this.age = 1;
        this.letterIndex = 0;
        this.letter1 = 'A';
        this.letter2 = 'A';
        this.letter3 = 'A';
        this.letter4 = 'A';
        this.letter5 = 'A';
        this.name = '';
        this.$middle.append(this.$startupMessage).addClass("startup");
    },

    naming () {
        this.$top.empty().append("<h4>Name your creature:</h4>");
        this.$bottom.empty();
        this.$middle.empty().removeClass("birth");
        this.$middle.append(`<div id="name"><p class="letter-1">${this.letter1}</p><p class="letter-2">${this.letter2}</p><p class="letter-3">${this.letter3}</p><p class="letter-4">${this.letter4}</p><p class="letter-5">${this.letter5}</p></div>`).addClass("naming");
        $(".letter-1").css("color", "red").addClass("selected");
    },

    setUpStage () {
        if (this.age >= 4 && this.$collection.hasClass("mist") && this.$collection.hasClass("slime") && this.$collection.hasClass("eyeball") && this.$collection.hasClass("worm") && this.$collection.hasClass("coconut")) {
            clearInterval(this.timer);
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
            this.time = 0;
            this.age = 1;
            this.letterIndex = 0;
            this.letter1 = 'A';
            this.letter2 = 'A';
            this.letter3 = 'A';
            this.letter4 = 'A';
            this.letter5 = 'A';
            this.name = '';
            this.$top.empty();
            this.$bottom.empty();
            this.$middle.empty().removeClass(`stage-${this.age}`).append(this.$superExtroMessage).addClass("superExtro");
        } else if (this.age >= 4) {
            clearInterval(this.timer);
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
            this.time = 0;
            this.age = 1;
            this.letterIndex = 0;
            this.letter1 = 'A';
            this.letter2 = 'A';
            this.letter3 = 'A';
            this.letter4 = 'A';
            this.letter5 = 'A';
            this.name = '';
            this.$top.empty();
            this.$bottom.empty().append(`<p>press <i class="fas fa-check"></i></p>`);
            this.$middle.empty().removeClass(`stage-${this.age}`).append(this.$extroMessage).addClass("extro");
        } else if (this.$middle.hasClass("naming")) {
            if (this.$middle.hasClass("mist")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Mist Tamagotchi.gif">`)
            } else if (this.$middle.hasClass("slime")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Slime Tamagotchi.gif">`)
            } else if (this.$middle.hasClass("eyeball")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Eyeball Tamagotchi.gif">`)
            } else if (this.$middle.hasClass("worm")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Worm Tamagotchi.gif">`)
            } else if (this.$middle.hasClass("coconut")) {
                this.$middle.empty();
                this.$middle.append(`<img src="images/Sentient Coconut Tamagotchi.png">`)
            };
            this.$middle.removeClass("naming").addClass(`stage-${this.age}`);
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
            this.$top.empty().append(`<section class="basic-info"><p class="name">name: ${this.name}</p><p class="age">age: ${this.age}</p></section><section class="stats"><i class="fas fa-utensils"><progress id="hunger-bar" value="0" max="10"></progress><i class="fas fa-meh"></i><progress id="boredom-bar" value="0" max="10"></progress><i class="fas fa-skull"></i><progress id="bloodlust-bar" value="0" max="10"></progress></section>`);
            this.$bottom.empty().append(this.$interactSetup);
            $(".feed").css("color", "red").addClass("selected");
            clearInterval(this.timer);
            this.startTimer();
        } else if (this.$middle.hasClass("stage-1")) {
            if (this.$middle.hasClass("mist")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Mist Tamagotchi Stage 2.gif">`)
            } else if (this.$middle.hasClass("slime")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Slime Tamagotchi Stage 2.gif">`)
            } else if (this.$middle.hasClass("eyeball")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Eyeball Tamagotchi Stage 2.gif">`)
            } else if (this.$middle.hasClass("worm")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Worm Tamagotchi Stage 2.gif">`)
            } else if (this.$middle.hasClass("coconut")) {
                this.$middle.empty();
                this.$middle.append(`<img src="images/Sentient Coconut Tamagotchi Stage 2.png">`)
            };
            this.$middle.removeClass("stage-1").addClass(`stage-${this.age}`);
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
            this.$top.empty().append(`<section class="basic-info"><p class="name">name: ${this.name}</p><p class="age">age: ${this.age}</p></section><section class="stats"><i class="fas fa-utensils"><progress id="hunger-bar" value="0" max="10"></progress><i class="fas fa-meh"></i><progress id="boredom-bar" value="0" max="10"></progress><i class="fas fa-skull"></i><progress id="bloodlust-bar" value="0" max="10"></progress></section>`);
            this.$bottom.empty().append(this.$interactSetup);
            $(".feed").css("color", "red").addClass("selected");
            clearInterval(this.timer);
            this.startTimer();
        } else if (this.$middle.hasClass("stage-2")) {
            if (this.$middle.hasClass("mist")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Mist Tamagotchi Stage 3.gif">`)
            } else if (this.$middle.hasClass("slime")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Slime Tamagotchi Stage 3.gif">`)
            } else if (this.$middle.hasClass("eyeball")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Eyeball Tamagotchi Stage 3.gif">`)
            } else if (this.$middle.hasClass("worm")) {
                this.$middle.empty();
                this.$middle.append(`<img src="gifs/Worm Tamagotchi Stage 3.gif">`)
            } else if (this.$middle.hasClass("coconut")) {
                this.$middle.empty();
                this.$middle.append(`<img src="images/Sentient Coconut Tamagotchi Stage 3.png">`)
            };
            this.$middle.removeClass("stage-2").addClass(`stage-${this.age}`);
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
            this.$top.empty().append(`<section class="basic-info"><p class="name">name: ${this.name}</p><p class="age">age: ${this.age}</p></section><section class="stats"><i class="fas fa-utensils"><progress id="hunger-bar" value="0" max="10"></progress><i class="fas fa-meh"></i><progress id="boredom-bar" value="0" max="10"></progress><i class="fas fa-skull"></i><progress id="bloodlust-bar" value="0" max="10"></progress></section>`);
            this.$bottom.empty().append(this.$interactSetup);
            $(".feed").css("color", "red").addClass("selected");
            clearInterval(this.timer);
            this.startTimer();
        }
    },

    morphMessage () {
        this.$top.empty();
        this.$bottom.empty();
        this.$middle.empty().append("<p>Your creature is growing!</p>");
    },

    selectButton (event) {
        if (this.$middle.hasClass("birth")) {
            this.naming();
        } else if (this.$middle.hasClass("extro")) {
            this.creatureSelect();
        } else if (this.$middle.hasClass("naming")) {
            if ($(".letter-1").hasClass("selected")) {
                $(".letter-1").removeClass("selected").css("color", "black");
                this.name += this.letter1;
                $(".letter-2").css("color", "red").addClass("selected");
                this.letterIndex = 0;
            } else if ($(".letter-2").hasClass("selected")) {
                $(".letter-2").removeClass("selected").css("color", "black");
                this.name += this.letter2;
                $(".letter-3").css("color", "red").addClass("selected");
                this.letterIndex = 0;
            } else if ($(".letter-3").hasClass("selected")) {
                $(".letter-3").removeClass("selected").css("color", "black");
                this.name += this.letter3;
                $(".letter-4").css("color", "red").addClass("selected");
                this.letterIndex = 0;
            } else if ($(".letter-4").hasClass("selected")) {
                $(".letter-4").removeClass("selected").css("color", "black");
                this.name += this.letter4;
                $(".letter-5").css("color", "red").addClass("selected");
                this.letterIndex = 0;
            } else if ($(".letter-5").hasClass("selected")) {
                this.name += this.letter5;
                this.setUpStage();
            }
        } else if ($(".feed").hasClass("selected") && this.hunger > 0) {
            this.hunger--;
            $("#hunger-bar").val(`${this.hunger}`);
        } else if ($(".play-with").hasClass("selected") && this.boredom > 0) {
            this.boredom--;
            $("#boredom-bar").val(`${this.boredom}`);
        } else if ($(".satiate").hasClass("selected") && this.bloodlust > 0) {
            this.bloodlust--;
            $("#bloodlust-bar").val(`${this.bloodlust}`);
        }
    },

    creatureSelect () {
        if (this.$middle.hasClass("intro")) {
            this.$middle.empty().removeClass("intro");
            this.$top.append("<h4>Choose your creature:</h4>");
            this.$middle.append(`<img src="gifs/Mist Tamagotchi.gif">`).addClass("mist birth");
            this.$bottom.append("<p>Mist Creature</p>");
        } else if (this.$middle.hasClass("extro")) {
            this.$middle.empty().removeClass("extro");
            this.$top.append("<h4>Choose your creature:</h4>");
            this.$middle.append(`<img src="gifs/Mist Tamagotchi.gif">`).addClass("mist birth");
            this.$bottom.empty().append("<p>Mist Creature</p>");
        }
    },

    arrowButton (event) {
        if (this.$middle.hasClass("startup")) {
            this.$middle.empty().removeClass("startup");
            this.$middle.append(this.$introMessage).addClass("intro");
        } else if (this.$middle.hasClass("intro")) {
            this.creatureSelect();
        } else if (this.$middle.hasClass("birth")) {
            if (this.$middle.hasClass("mist")) {
                this.$middle.empty().removeClass("mist");
                this.$middle.append(`<img src="gifs/Slime Tamagotchi.gif">`).addClass("slime");
                this.$bottom.empty().append("<p>Slime Creature</p>");
            } else if (this.$middle.hasClass("slime")) {
                this.$middle.empty().removeClass("slime");
                this.$middle.append(`<img src="gifs/Eyeball Tamagotchi.gif">`).addClass("eyeball");
                this.$bottom.empty().append("<p>Eyeball Creature</p>");
            } else if (this.$middle.hasClass("eyeball")) {
                this.$middle.empty().removeClass("eyeball");
                this.$middle.append(`<img src="gifs/Worm Tamagotchi.gif">`).addClass("worm");
                this.$bottom.empty().append("<p>Worm Creature</p>");
            } else if (this.$middle.hasClass("worm")) {
                this.$middle.empty().removeClass("worm");
                this.$middle.append(`<img src="images/Sentient Coconut Tamagotchi.png">`).addClass("coconut");
                this.$bottom.empty().append("<p>Sentient Coconut</p>");
            } else if (this.$middle.hasClass("coconut")) {
                this.$middle.empty().removeClass("coconut");
                this.$middle.append(`<img src="gifs/Mist Tamagotchi.gif">`).addClass("mist");
                this.$bottom.empty().append("<p>Mist Creature</p>");
            };
        } else if (this.$middle.hasClass("naming")) {
            if ($(".letter-1").hasClass("selected")) {
                if (this.letterIndex >= 25) {
                    this.letterIndex = 0;
                    $(".letter-1").text(`${this.alphabet[this.letterIndex]}`);
                    this.letter1 = this.alphabet[this.letterIndex];
                } else {
                    this.letterIndex++;
                    $(".letter-1").text(`${this.alphabet[this.letterIndex]}`);
                    this.letter1 = this.alphabet[this.letterIndex];
                }
            } else if ($(".letter-2").hasClass("selected")) {
                if (this.letterIndex >= 25) {
                    this.letterIndex = 0;
                    $(".letter-2").text(`${this.alphabet[this.letterIndex]}`);
                    this.letter2 = this.alphabet[this.letterIndex];
                } else {
                    this.letterIndex++;
                    $(".letter-2").text(`${this.alphabet[this.letterIndex]}`);
                    this.letter2 = this.alphabet[this.letterIndex];
                }
            } else if ($(".letter-3").hasClass("selected")) {
                if (this.letterIndex >= 25) {
                    this.letterIndex = 0;
                    $(".letter-3").text(`${this.alphabet[this.letterIndex]}`);
                    this.letter3 = this.alphabet[this.letterIndex];
                } else {
                    this.letterIndex++;
                    $(".letter-3").text(`${this.alphabet[this.letterIndex]}`);
                    this.letter3 = this.alphabet[this.letterIndex];
                }
            } else if ($(".letter-4").hasClass("selected")) {
                if (this.letterIndex >= 25) {
                    this.letterIndex = 0;
                    $(".letter-4").text(`${this.alphabet[this.letterIndex]}`);
                    this.letter4 = this.alphabet[this.letterIndex];
                } else {
                    this.letterIndex++;
                    $(".letter-4").text(`${this.alphabet[this.letterIndex]}`);
                    this.letter4 = this.alphabet[this.letterIndex];
                }
            } else if ($(".letter-5").hasClass("selected")) {
                if (this.letterIndex >= 25) {
                    this.letterIndex = 0;
                    $(".letter-5").text(`${this.alphabet[this.letterIndex]}`);
                    this.letter5 = this.alphabet[this.letterIndex];
                } else {
                    this.letterIndex++;
                    $(".letter-5").text(`${this.alphabet[this.letterIndex]}`);
                    this.letter5 = this.alphabet[this.letterIndex];
                }
            }
        } else if (this.$middle.hasClass(`stage-${this.age}`)) {
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

    timer: null,
    startTimer() {
        this.timer = setInterval(this.increaseTime.bind(game), 1000);
    },
    increaseTime() {
        this.time++;
        console.log(this.time);
        if (this.time % 2 === 0) {
            this.hunger++;
            $("#hunger-bar").val(`${this.hunger}`);
            this.boredom++;
            $("#boredom-bar").val(`${this.boredom}`);
            this.bloodlust++;
            $("#bloodlust-bar").val(`${this.bloodlust}`);
        };
        if (this.$middle.hasClass("stage-1") || this.$middle.hasClass("stage-2")) {
            if (this.time >= 30) {
                this.hunger = 0;
                this.boredom = 0;
                this.bloodlust = 0;
                this.morphMessage();
            };
            if (this.time >= 33) {
                this.time = 0;
                this.age++;
                $(".age").text(`age: ${this.age}`);
                this.setUpStage();
            };
        } else {
            if (this.time >= 30) {
                this.time = 0;
                this.age++;
                $(".age").text(`age: ${this.age}`);
                this.complete();
                this.setUpStage();
            };
        }
        if (this.hunger >= 10 || this.boredom >= 10 || this.bloodlust >= 10) {
            this.death();
        }
    },

    death() {
        clearInterval(this.timer);
        this.hunger = 0;
        this.boredom = 0;
        this.bloodlust = 0;
        this.$top.empty();
        this.$bottom.empty();
        this.$middle.empty().removeClass();
        this.$middle.append(this.$deathMessage).addClass("death");
    },

    complete() {
        if (this.$middle.hasClass("mist") && this.$collection.hasClass("mist") === false) {
            $("#below").css("background-color","lightgrey");
            this.$middle.removeClass("mist");
            this.$collection.addClass("mist").append('<i class="fas fa-cloud"></i>');
        };
        if (this.$middle.hasClass("slime") && this.$collection.hasClass("slime") === false) {
            $("#below").css("background-color","lightgrey");
            this.$middle.removeClass("slime");
            this.$collection.addClass("slime").append('<i class="fas fa-disease"></i>');
        };
        if (this.$middle.hasClass("eyeball") && this.$collection.hasClass("eyeball") === false) {
            $("#below").css("background-color","lightgrey");
            this.$middle.removeClass("eyeball");
            this.$collection.addClass("eyeball").append('<i class="fas fa-eye"></i>');
        };
        if (this.$middle.hasClass("worm") && this.$collection.hasClass("worm") === false) {
            $("#below").css("background-color","lightgrey");
            this.$middle.removeClass("worm");
            this.$collection.addClass("worm").append('<i class="fas fa-wave-square"></i>');
        };
        if (this.$middle.hasClass("coconut") && this.$collection.hasClass("coconut") === false) {
            $("#below").css("background-color","lightgrey");
            this.$middle.removeClass("coconut");
            this.$collection.addClass("coconut").append('<i class="fas fa-bowling-ball"></i>');
        };
    },
};

game.$power.click(game.powerButton.bind(game));
game.$select.click(game.selectButton.bind(game));
game.$arrow.click(game.arrowButton.bind(game));

$(window).keypress(function(e) {
    if (e.key == "p") {
        game.$power.click();
    } else if (e.key == "j") {
        game.$select.click();
    } else if (e.key == "d") {
        game.$arrow.click();
    }
})