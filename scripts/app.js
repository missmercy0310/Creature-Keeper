console.log("Welcome to Creature Keeper");

const game = {
    hunger: 0,
    boredom: 0,
    bloodlust: 0,
    time: 60,
    arrow: $("#arrow"),
    select: $("#select"),
    power: $("#power"),

    powerUp (event) {
        console.log("Powering On...")
        $("#middle-half").append("<h2>Welcome!</h2>")
    }
};

game.power.click(game.powerUp.bind(game));