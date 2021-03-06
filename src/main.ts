import { Game } from './modules/game';
import { Renderer } from './modules/renderer';

// function to load Game data when user clicks a Game accordion elememnt
function gameContent()
{
    let accordianElements = document.getElementsByClassName("accordion");
    let i:number;

    for (i = 0; i < accordianElements.length; i++) {
        accordianElements[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;

            // Fetch clicked game's data from data file, and expand/contract accordion respectively
            let gameID:string = panel.id;
            renderGameData(gameID, panel);
        });
    }
}


async function renderGameData(gameID:string, panel:any){
    const response = await fetch('/src/data/gameData.json');
    const data = await response.json();

    // JSON object for this specific game
    const gameJSON = data[gameID];

    // Create Game object based on JSON
    try{
        const gameObjID = gameJSON.id;
        const gameObjName = gameJSON.name;
        const gameObjYear = gameJSON.year;
        const gameObjHero = gameJSON.hero;
        const gameObjVillain = gameJSON.villain;
        const gameObj = new Game(gameObjID, gameObjName, gameObjYear, gameObjHero, gameObjVillain);

        const gameDivID = "#" + gameID + "Data";
        const renderer = new Renderer(document.querySelector(gameDivID));
        renderer.render(
            '<table>' + 
                '<tr>' + 
                    '<td>' + "Name" + "</td>" +
                    '<td>' + gameObj.name + '</td>' +
                '</tr>' +
                '<tr>' + 
                    '<td>' + "Year" + "</td>" +
                    '<td>' + gameObj.year + '</td>' +
                '</tr>' +
                '<tr>' + 
                    '<td>' + "Hero" + "</td>" +
                    '<td>' + gameObj.hero + '</td>' +
                '</tr>' + 
                '<tr>' + 
                    '<td>' + "Villain" + "</td>" +
                    '<td>' + gameObj.villain + '</td>' +
                '</tr>' +
            '</table>');

        console.log("Name: " + gameObj.name + 
                    " Year: " + gameObj.year + 
                    " Hero: " + gameObj.hero + 
                    " Villain: " + gameObj.villain);
    }
    catch{
        console.log("Error generating Game object from JSON file!");
    }

    // Accordion Closes
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.paddingTop = "0px";
        panel.style.paddingBottom = "0px";        
    } 

    // Accordion Opens
    else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.paddingTop = "10px";
        panel.style.paddingBottom = "10px";
    } 
}


gameContent();
