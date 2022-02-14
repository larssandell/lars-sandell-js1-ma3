
console.log("-------------------- Question 2 --------------------");

// Question 2
// Make a call to the Rawg API.
const container = document.querySelector(".container");
const rawgContainer = document.querySelector(".rawgapi");
const rawgKey = "f7ddabc437d542e78e293dd82bf143a0";
const urlApi = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${rawgKey}`;


async function getApi() {
    try {
        const response = await fetch(urlApi);
        const results = await response.json();
        const getArray = results.results;
        container.innerHTML = "";
        rawgContainer.innerHTML = "";
        //console.log(getArray);
        for(let i = 0; i < getArray.length; i++) {
            if(i === 8) {
                break;
            }
            const name = getArray[i].name;
            const rating = getArray[i].rating;
            const numberOfTags = getArray[i].tags
            rawgContainer.innerHTML += `<div class="games"><ul class="api-list">
            <li>Game title: ${name}</li>
            <li>Game rating: ${rating}</li>
            <li>Number of tags: ${numberOfTags.length}</li>
            </ul></div>`;
        }
    } catch (error) {
        console.log(error, "Could not get API");
        rawgContainer.innerHTML = `<p class="error">Promblems with the API get</p>`;
    } finally {
        console.log("All done");
    }
    
}

setTimeout((getApi), 5000);