console.log("hellon world");
console.log(axios);

const ulElement = document.getElementById("trees")

const URL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&q=&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";

axios
    .get(URL)
    .then((res) => {
        console.log(res);
        console.log(res.data.records);
    })
    .catch((err) => {
        console.log(err)
    });

function displayResults(list) {
    list.forEach(item => {
        ulElement.innerHTML += `<li>
            <h2>${item.fields.espece} - ${item.fields.genre}</h2>
            <p>
            ${item.fields.adresse}
            </p>
        </li>`;
    });
}

console.log(displayResults())