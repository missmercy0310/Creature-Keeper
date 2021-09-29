console.log("Welcome to Creature Keeper");

const game = {
    hunger: 0,
    boredom: 0,
    bloodlust: 0,
    time: 0,
    age: 1,
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
            clearInterval(this.timer);
            $("#screens").css("background-color","darkgray");
            $("#top-fourth").empty();
            $("#middle-half").empty();
            $("#bottom-fourth").empty();
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
        }
    },

    gameStart (event) {
        $("#middle-half").append(`<h2>Welcome!</h2><p>please press <i class="fas fa-angle-double-right"></i></p>`).addClass("begin");
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
            $("#middle-half").append(`<p>You have successfully taken care of your baby creature, and it is now old enough to venture out into the world!</p>`).addClass("extro");
        } else {
            $("#middle-half").removeClass().addClass(`stage-${this.age}`);
            this.hunger = 0;
            this.boredom = 0;
            this.bloodlust = 0;
            $("#top-fourth").empty().append(`<p class="hunger">hunger: ${this.hunger}</p><p class="boredom">boredom: ${this.boredom}</p><p class="bloodlust">bloodlust: ${this.bloodlust}</p>`);
            $("#bottom-fourth").empty().append(`<p class="feed">feed</p><p class="play-with">play with</p><p class="satiate">satiate</p>`);
            $(".feed").css("color", "red").addClass("selected");
            clearInterval(this.timer);
            this.startTimer();
        }
    },

    selectButton (event) {
        if ($("#middle-half").hasClass("birth")) {
            this.setUpStage();
        } else if ($(".feed").hasClass("selected") && this.hunger > 0) {
            this.hunger--;
            $(".hunger").text(`hunger: ${this.hunger}`);
        } else if ($(".play-with").hasClass("selected") && this.boredom > 0) {
            this.boredom--;
            $(".boredom").text(`boredom: ${this.boredom}`);
        } else if ($(".satiate").hasClass("selected") && this.bloodlust > 0) {
            this.bloodlust--;
            $(".bloodlust").text(`bloodlust: ${this.bloodlust}`);
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
        } else if ($("#middle-half").hasClass("mist")) {
            $("#middle-half").empty().removeClass("mist");
            $("#middle-half").append(`<img src="gifs/Slime Tamagotchi.gif">`).addClass("slime");
            $("#bottom-fourth").empty().append("<p>Slime Creature</p>");
        } else if ($("#middle-half").hasClass("slime")) {
            $("#middle-half").empty().removeClass("slime");
            $("#middle-half").append(`<img src="gifs/Eyeball Tamagotchi.gif">`).addClass("eyeball");
            $("#bottom-fourth").empty().append("<p>Eyeball Creature</p>");
        } else if ($("#middle-half").hasClass("eyeball")) {
            $("#middle-half").empty().removeClass("eyeball");
            $("#middle-half").append(`<img src="gifs/Mist Tamagotchi.gif">`).addClass("mist");
            $("#bottom-fourth").empty().append("<p>Mist Creature</p>");
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
            $(".hunger").text(`hunger: ${this.hunger}`);
            this.boredom++;
            $(".boredom").text(`boredom: ${this.boredom}`);
            this.bloodlust++;
            $(".bloodlust").text(`bloodlust: ${this.bloodlust}`);
        };
        if (this.time >= 120) {
            this.time = 0;
            this.age++;
            this.setUpStage();
        };
        if (this.hunger >= 30 || this.boredom >= 30 || this.bloodlust >= 30) {
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
        $("#middle-half").append(`<p>You failed to take care of your creature, and it got very cranky! You have died.</p>`).addClass("death");
    }
};

game.power.click(game.powerButton.bind(game));
game.select.click(game.selectButton.bind(game));
game.arrow.click(game.arrowButton.bind(game));