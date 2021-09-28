console.log("Welcome to Creature Keeper");

const game = {
    hunger: 0,
    boredom: 0,
    bloodlust: 0,
    time: 60,
    arrow: $("#arrow"),
    select: $("#select"),
    power: $("#power"),

    powerButton (event) {
        if ($(event.target).hasClass("pressed") === false) {
            console.log("Powering On...");
            $(event.target).addClass("pressed");
            $("#screens").css("background-color","white");
            this.gameStart();
        } else {
            console.log("Powering Off...");
            $(event.target).removeClass("pressed");
            $("#screens").css("background-color","lightgray");
            $("#top-fourth").empty();
            $("#middle-half").empty();
            $("#bottom-fourth").empty();
        }
    },

    gameStart (event) {
        $("#middle-half").append("<h2>Welcome!</h2><p>please press select</p>");
    }
};

game.power.click(game.powerButton.bind(game));