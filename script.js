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
let baxi = {
    name: "Baxi",
    age: 24,
    likes: ["The kingdom", "gummy bears", "wooden wine bottles", "the princess"],
    runFast: function(dest, mode){
        let phrase = "";
        if(mode=="screaming"){
            phrase = `Baxi runs ${mode} towards the ${dest}`;
        }else if(mode=="sneakily"){
            phrase = `ooooh hooo hooo, no one can here me says Baxi as he saunters ${mode} to the ${dest}!`;
        }else if(mode=="stealthily"){
            phrase = `shhhh I'm silent says Baxi as he ${mode} sneaks to the ${dest}`;
        }
    }
}

/**
 * * about the princess
 * * Name: Penelope
 * * Lives in: Rome
 * * Likes: Watching stars from her balcony
 * * Skills: napping, PR for the royal fam, Sings
 * * Random Fact: Has a giant shotgun sneeze that makes people think there is an assassination attempt in progress
 */

/**
 * * all 3 characters are in a love triangle
 * * 
 * * The setting a festival in Rome
 * * The crown was shattered before the festival began
 * * Festival of unity based on the magic of the crown...that is now shattered
 * * Since the crown is shattered, the magic causing peace between 3 nations is failing
 * 
 * * The three characters meet at the festival
 * * Alucard notices the princess first...and realizes they have the same makeup artist
 * 
 * * Baxi is friends with the princess since they were children
 * * Baxi loves the princess, but it is a one sided love
 * * Baxi is following the princess through the festival, but the princess does not know
 * *
 * * Felt the crowns chaos was ruining the peace, and wanted to destroy the crown, to cease the chaos
 * * Needs to break the diamond inside the crown to end its chaotic magic
 * * Alucard and Baxi vow to help destroy the crown
 * * Baxi wants war
 * * Alucard hopes the destruction will allow the Princess to bring peace
 * 
 * * Their love for each other distracts them from their purpose
 * * The crown is protected by the royal guards
 * * The princess can get near it, but all 3 are needed to destry the crown
 * 
 * * Baxi wins...war reigns
 */
// * collection is an array of strings
function paragraphPrinter(collection, house){
    for(let i=0;i<collection.length;i++){
        let storyComponent = document.createElement("li");
        storyComponent.classList.add("grassText");
        storyComponent.innerText = collection[i];
        house.appendChild(storyComponent);
    }
}
let myPhrases = [
    "Hello there",
    "I'm hungry",
    "I'm tired",
    "go shopping",
    "let's play",
    "I want to stretch my back!",
    "Hey, is that a tentacle"
]
let makeList = document.createElement("ul");
let bodyTag = document.querySelector("body");
bodyTag.appendChild(makeList);
paragraphPrinter(myPhrases, bodyTag);