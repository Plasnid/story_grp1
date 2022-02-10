let storyTitle = "Failed Victory: The Tale of The Crown";

// *  add our title into an h1 tag in our html page
function titleAdder(titleStr){
    let bodyTag = document.querySelector("body");
    let titleTag = document.createElement("h1");
    titleTag.innerHTML = titleStr;
    bodyTag.appendChild(titleTag);
}
titleAdder(storyTitle);

/** *
 * *
 * *About our vigilante
 * * Name: Alucard
 * * lives in: the forest outside of rome
 * * likes: danger
 * * Strong, works out a lot
 * * skills: fighting, communicating with animals, jumps very high
 * * Random Fact: He secretly does his make up and sneaks into bars 
 */
let vigilante = {
    name: "Alucard",
    strong: true,
    age: 32,
    likes: ["danger", "makeup", "swords"],
    fighting: function(target){
        let fightingPhrase = `You are dead meat,${target}!`;
        return fightingPhrase;
    },
    talkWithAnimals: function(animal, animalName){
        let phrase="";
        if(animal=="bird"){
            phrase=`tweet tweet tweet(aka. yo bird, wazzap ${animalName}?`;
        }else if(animal=="fox"){
            phrase=`meow woofety woof(Hey whaddap homie ${animalName})?`;
        }else{
            phrase = `eeeeeeh eeeeeeh unidentified animal named ${animalName}`;
        }
        return phrase;
    },
    highJump: function(){
        return "Kaboing!";
    }
}

/**
 * * about our enforcer
 * * Name: Baxi
 * * Lives in: Rome
 * * Likes:  The princess
 * * Skills: Swim, Knit, Drink
 * * Random Fact: likes to  get drunk on white claw and swim to his wool collection
 * * where he knits pant
 */

/**
 * * about the princess
 * * Name: Penelope
 * * Lives in: Rome
 * * Likes: Watching stars from her balcony
 * * Skills: napping, PR for the royal fam, Sings
 * * Random Fact: Has a giant shotgun sneeze that makes people think there is an assassination attempt in progress
 */
