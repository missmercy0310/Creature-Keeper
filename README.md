# SEI-913-Project-0

## Installation Instructions

Open game in a web browser at the provided URL.

## Project Explanation

The intent of this project is to create a web-based, tamagotchi-esque game with a monster theme.

## User Stories

Upon loading the page, the user is greeted by a display of a digital tamagotchi-style interface, including a rectangle-shaped main container, containing a display of a square element acting as a currently blank screen and three circular elements below that acting as buttons: a right arrow button, a select button, and a power button. Upon clicking either the right arrow button or the select button, nothing will yet happen. Upon clicking the power button however, the displayed screen will light up and greet the user with a message welcoming the user.

The welcome message will disappear after a few seconds, and will be replaced by a message informing the user that they are about to take care of a baby monster. This message will be replaced, after a few seconds, by another message, in the top fourth of the displayed screen, instructing the user to choose their monster. Below this message, in the middle half of the displayed screen, there will be an image displayed of one out of five selectable monsters. Below this image, in the lower fourth of the displayed screen, will be a row of five dots, the first one currently being larger than the others. Upon clicking the right arrow button, the monster image will switch to display the next selectable monster, and the dots in the lower fourth will change to have the currently shown monster's corresponding dot larger than the other four dots. If the fifth monster is displayed, clicking the arrow button will switch the interface to display the first monster again. Once the user has decided which monster they would like, they can click the select button.

Upon clicking the select button, the interface's display will switch to show an idle animation of the chosen monster in the middle half of the displayed screen with an age counter displayed to the right of the monster, three status bars in the top fourth of the screen (hunger, boredom, and bloodlust), and three corresponding options for interacting with the user's monster (feed, play, satiate). The right arrow button now allows the user to select one of the three options at the bottom of the screen, and the select button will activate that option. As time passes, each of the three status bars fill, and when each status bar's corresponding option is chosen, that status bar decreases.

When one of the options in the bottom fourth of the screen is selected, an animation is displayed in the middle half of the screen of the monster doing the corresponding activity (eating, playing, and intaking blood, repectively).

If any one of the three status bars fills completely, an animation is displayed in the middle half of the screen of the monster attacking the screen. When this animation is complete, it is replaced with a message informing the user that they have not properly taken care of their monster, and as a result the user has died.

If all status bars are kept from filling for a total of one minute, the monster's age counter will increase by 1, and an animation of the monster growing into its next stage will be displayed in the middle half of the screen.

Each monster will grow to an age of 3. Once the third stage of the monster is properly taken care of, the middle half of the screen will display a message that the user has effectively taken care of their baby monster, and the monster is now old enough to venture off on its own. This message is then replaced with an animation of the monster waving goodbye and "walking" away. Once this animation is complete, it will be replaced by a "game over" message, accompanied by a total score, which corresponds to how well the user took care of their monster. The user can then press select or the power button. The power button will change the screen back to its "off" display; the select button will return the user to the monster selection screen.

## Approach

Functional?
Objects?
Classes?

Decided to build with a combination of all three.

## Wireframes

Body
|
|_Tamagotchi-Style Interface
  |
  |_Screen
  | |
  | |_Top Fourth
  | | |
  | | |_Messages or
  | | |_Hunger Status and
  | | |_Boredom Status and
  | | |_Bloodlust Status
  | |
  | |_Middle Half
  | | |
  | | |_Messages or
  | | |_Animations
  | |
  | |_Bottom Fourth
  |   |
  |   |_Dots or
  |   |_Feed Option and
  |   |_Play Option and
  |   |_Satiate Option
  |
  |_Buttons
    |
    |_Right Arrow
    |_Select
    |_Power

## Technology Explanations



## Unsolved Problems

