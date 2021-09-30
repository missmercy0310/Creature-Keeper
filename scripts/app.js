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
    arrow: $("#arrow"),
    select: $("#select"),
    power: $("#power"),

    powerButton (event) {
        if ($(event.target).hasClass("pressed") === false) {
            console.log("Powering On...");
            $(event.target).addClass("pressed");
            $("#screens").css("background-color","lightgrey");
            this.gameStart();
        } else {
            console.log("Powering Off...");
            $(event.target).removeClass("pressed");
            $("#screens").css("background-color","darkgray");
            $("#top-fourth").empty();
            $("#middle-half").empty();
            $("#bottom-fourth").empty();
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
        $("#middle-half").append(`<h2>Welcome!</h2><p>please press <i class="fas fa-angle-double-right"></i></p>`).addClass("begin");
    },

    naming () {
        $("#top-fourth").empty().append("<h4>Name your creature:</h4>");
        $("#bottom-fourth").empty();
        $("#middle-half").empty().removeClass("birth");
        $("#middle-half").append(`<div id="name"><p class="letter-1">${this.letter1}</p><p class="letter-2">${this.letter2}</p><p class="letter-3">${this.letter3}</p><p class="letter-4">${this.letter4}</p><p class="letter-5">${this.letter5}</p></div>`).addClass("naming");
        $(".letter-1").css("color", "red").addClass("selected");
    },

    setUpStage () {
        if (this.age >= 4) {
            clearInterval(this.timer);
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
            $("#top-fourth").empty();
            $("#bottom-fourth").empty();
            $("#middle-half").empty().removeClass();
            $("#middle-half").append(`<h4>Congrats!</h4><p>You have successfully taken care of your baby creature, and it is now old enough to venture out into the world!</p><p>Thanks for playing Creature Keeper!</p>`).addClass("extro");
        } else if ($("#middle-half").hasClass("naming")) {
            if ($("#middle-half").hasClass("mist")) {
                $("#middle-half").empty();
                $("#middle-half").append(`<img src="gifs/Mist Tamagotchi.gif">`)
            } else if ($("#middle-half").hasClass("slime")) {
                $("#middle-half").empty();
                $("#middle-half").append(`<img src="gifs/Slime Tamagotchi.gif">`)
            } else if ($("#middle-half").hasClass("eyeball")) {
                $("#middle-half").empty();
                $("#middle-half").append(`<img src="gifs/Eyeball Tamagotchi.gif">`)
            };
            $("#middle-half").removeClass("naming").addClass(`stage-${this.age}`);
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
            $("#top-fourth").empty().append(`<section class="basic-info"><p class="name">name: ${this.name}</p><p class="age">age: ${this.age}</p></section><section class="stats"><i class="fas fa-utensils"><progress id="hunger-bar" value="0" max="10"></progress><i class="fas fa-meh"></i><progress id="boredom-bar" value="0" max="10"></progress><i class="fas fa-skull"></i><progress id="bloodlust-bar" value="0" max="10"></progress></section>`);
            $("#bottom-fourth").empty().append(`<p class="feed">feed</p><p class="play-with">play with</p><p class="satiate">satiate</p>`);
            $(".feed").css("color", "red").addClass("selected");
            clearInterval(this.timer);
            this.startTimer();
        } else if ($("#middle-half").hasClass("stage-1")) {
            if ($("#middle-half").hasClass("mist")) {
                $("#middle-half").empty();
                $("#middle-half").append(`<img src="gifs/Mist Tamagotchi Stage 2.gif">`)
            } else if ($("#middle-half").hasClass("slime")) {
                $("#middle-half").empty();
                $("#middle-half").append(`<img src="gifs/Slime Tamagotchi Stage 2.gif">`)
            } else if ($("#middle-half").hasClass("eyeball")) {
                $("#middle-half").empty();
                $("#middle-half").append(`<img src="gifs/Eyeball Tamagotchi Stage 2.gif">`)
            };
            $("#middle-half").removeClass("stage-1").addClass(`stage-${this.age}`);
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
            $("#top-fourth").empty().append(`<section class="basic-info"><p class="name">name: ${this.name}</p><p class="age">age: ${this.age}</p></section><section class="stats"><i class="fas fa-utensils"><progress id="hunger-bar" value="0" max="10"></progress><i class="fas fa-meh"></i><progress id="boredom-bar" value="0" max="10"></progress><i class="fas fa-skull"></i><progress id="bloodlust-bar" value="0" max="10"></progress></section>`);
            $("#bottom-fourth").empty().append(`<p class="feed">feed</p><p class="play-with">play with</p><p class="satiate">satiate</p>`);
            $(".feed").css("color", "red").addClass("selected");
            clearInterval(this.timer);
            this.startTimer();
        } else if ($("#middle-half").hasClass("stage-2")) {
            if ($("#middle-half").hasClass("mist")) {
                $("#middle-half").empty();
                $("#middle-half").append(`<img src="gifs/Mist Tamagotchi Stage 3.gif">`)
            } else if ($("#middle-half").hasClass("slime")) {
                $("#middle-half").empty();
                $("#middle-half").append(`<img src="gifs/Slime Tamagotchi Stage 3.gif">`)
            } else if ($("#middle-half").hasClass("eyeball")) {
                $("#middle-half").empty();
                $("#middle-half").append(`<img src="gifs/Eyeball Tamagotchi Stage 3.gif">`)
            };
            $("#middle-half").removeClass("stage-2").addClass(`stage-${this.age}`);
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
            $("#top-fourth").empty().append(`<section class="basic-info"><p class="name">name: ${this.name}</p><p class="age">age: ${this.age}</p></section><section class="stats"><i class="fas fa-utensils"><progress id="hunger-bar" value="0" max="10"></progress><i class="fas fa-meh"></i><progress id="boredom-bar" value="0" max="10"></progress><i class="fas fa-skull"></i><progress id="bloodlust-bar" value="0" max="10"></progress></section>`);
            $("#bottom-fourth").empty().append(`<p class="feed">feed</p><p class="play-with">play with</p><p class="satiate">satiate</p>`);
            $(".feed").css("color", "red").addClass("selected");
            clearInterval(this.timer);
            this.startTimer();
        }
    },

    selectButton (event) {
        if ($("#middle-half").hasClass("birth")) {
            this.naming();
        } else if ($("#middle-half").hasClass("naming")) {
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

    arrowButton (event) {
        if ($("#middle-half").hasClass("begin")) {
            $("#middle-half").empty().removeClass("begin");
            $("#middle-half").append(`<p>You have been tasked with caring for a baby creature of your choice. Be sure it doesn't get too cranky!</p><p>press <i class="fas fa-angle-double-right"></i></p>`).addClass("intro");
        } else if ($("#middle-half").hasClass("intro")) {
            $("#middle-half").empty().removeClass("intro");
            $("#top-fourth").append("<h4>Choose your creature:</h4>");
            $("#middle-half").append(`<img src="gifs/Mist Tamagotchi.gif">`).addClass("mist birth");
            $("#bottom-fourth").append("<p>Mist Creature</p>");
        } else if ($("#middle-half").hasClass("mist") && $("#middle-half").hasClass("birth")) {
            $("#middle-half").empty().removeClass("mist");
            $("#middle-half").append(`<img src="gifs/Slime Tamagotchi.gif">`).addClass("slime");
            $("#bottom-fourth").empty().append("<p>Slime Creature</p>");
        } else if ($("#middle-half").hasClass("slime") && $("#middle-half").hasClass("birth")) {
            $("#middle-half").empty().removeClass("slime");
            $("#middle-half").append(`<img src="gifs/Eyeball Tamagotchi.gif">`).addClass("eyeball");
            $("#bottom-fourth").empty().append("<p>Eyeball Creature</p>");
        } else if ($("#middle-half").hasClass("eyeball") && $("#middle-half").hasClass("birth")) {
            $("#middle-half").empty().removeClass("eyeball");
            $("#middle-half").append(`<img src="gifs/Mist Tamagotchi.gif">`).addClass("mist");
            $("#bottom-fourth").empty().append("<p>Mist Creature</p>");
        } else if ($("#middle-half").hasClass("naming")) {
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
        } else if ($("#middle-half").hasClass(`stage-${this.age}`)) {
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
        if (this.time >= 30) {
            this.time = 0;
            this.age++;
            $(".age").text(`age: ${this.age}`);
            this.setUpStage();
        };
        if (this.hunger >= 10 || this.boredom >= 10 || this.bloodlust >= 10) {
            this.death();
        }
    },

    death() {
        clearInterval(this.timer);
        this.hunger = 0;
        this.boredom = 0;
        this.bloodlust = 0;
        $("#top-fourth").empty();
        $("#bottom-fourth").empty();
        $("#middle-half").empty().removeClass();
        $("#middle-half").append(`<p>You failed to take care of your creature, and it got very angry with you!</p><p>You have died.</p>`).addClass("death");
    }
};

game.power.click(game.powerButton.bind(game));
game.select.click(game.selectButton.bind(game));
game.arrow.click(game.arrowButton.bind(game));