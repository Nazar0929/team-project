const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

const buttons = document.querySelectorAll(".scientist__button");
const listEl = document.querySelector(".scientist__list");

const renderScientists = (array) => {
    listEl.innerHTML = array.map(({name, surname, born, dead}) => `<li class="scientist__item">
        <p class="scientist__name">${name} ${surname}</p>
        <p class="scientist__life">${born}-${dead}</p>
      </li>`).join("");
};

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const action = event.currentTarget.dataset.action;
        switch (action) {
            case "xix-century":
                const nineteenCentury = scientists.filter((s) => s.born >= 1800 && s.born < 1900);
                renderScientists(nineteenCentury);
                break;
            case "sum":
                const arrayOfYears = scientists.map((s) => s.dead - s.born);
                const sum = arrayOfYears.reduce((acc, value) => acc + value, 0);
                alert(`Всі вчені загалом прожили ${sum} рік/роки/років`)
                break;
            case "albert":
                const birthOfAlbert = scientists.find((s) => s.name === "Albert");
                alert(`Albert Einstein народився у ${birthOfAlbert.born} році`); 
                break;
            case "alphabet":
                const sortByAlphabet = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
                renderScientists(sortByAlphabet);
                break;
            case "c-leter":
                const findByLetterC = scientists.filter((s) => s.surname.startsWith("C"));
                renderScientists(findByLetterC);
                break;
            case "eldest":
                const sortByAge = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
                renderScientists(sortByAge);
                break;
            case "delete":
                const deleteScientists = scientists.filter((s) => s.born >= 1700 || s.born < 1400 );
                renderScientists(deleteScientists);
                break;
            case "a-leter":
                const findByLetterA = scientists.filter((s) => !s.name.startsWith("A"));
                renderScientists(findByLetterA);
                break;
            case "latest":
                const findLatestBirth = [...scientists].sort((a, b) => b.born - a.born);
                alert(`${findLatestBirth[0].name} ${findLatestBirth[0].surname} народився/лася найпізніше(у ${findLatestBirth[0].born} році)`);
                break;
            case "eldest-youngest":
                const findYoungestAndOldest = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
                alert(`${findYoungestAndOldest[0].name} ${findYoungestAndOldest[0].surname} прожив/ла найдовше(${findYoungestAndOldest[0].dead - findYoungestAndOldest[0].born} років), а ${findYoungestAndOldest[findYoungestAndOldest.length - 1].name} ${findYoungestAndOldest[findYoungestAndOldest.length - 1].surname} прожив/ла найменше(${findYoungestAndOldest[findYoungestAndOldest.length - 1].dead - findYoungestAndOldest[findYoungestAndOldest.length - 1].born} років)`);
                break;
            case "coincidence":
                const findCoincidenceInName = scientists.filter((s) => s.name[0] === s.surname[0]);
                renderScientists(findCoincidenceInName);
                break;
            case "work":
                const isScientistsWorked = scientists.every((s) => s.born + 18 < 1900 && s.born + 18 >= 1800 || s.dead < 1900 && s.dead >= 1800);
                if (isScientistsWorked) {
                    alert("Всі вчені працювали в XIX столітті")
                } else {
                    alert("Не всі вчені працювали в XIX столітті")
                }
                break;
        };        
    });
});

renderScientists(scientists);