// let colors = [blue, green, yellow];


// function changeColors(){
//     body = document.querySelector(body).classlist.toggle(colors.length)
// }




function createGame(player1, hour, player2){
    return`
        <li>
            <img src="./assets/${player1}.svg" alt="Bandeira da ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/${player2}.svg" alt="Bandeira de ${player2}">
        </li>
    `
}
let delay = -0.4;
function createCard(date, day, games){
    delay = delay + 0.4;
    return `
            <div class="card" style="animation-delay:${delay}s">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}



document.querySelector("#cards").innerHTML = 
createCard('24/11', 'Quinta', 
    createGame('brazil','14:00', 'ghana') +
    createGame('brazil','14:00', 'cameroon') + 
    createGame('brazil','14:00', 'cameroon')
) +
createCard('25/10', 'quarta',
    createGame('brazil','14:00', 'cameroon') +
    createGame('brazil','14:00', 'cameroon') + 
    createGame('brazil','14:00', 'cameroon')
)
 +
createCard('25/10', 'quarta',
    createGame('brazil','14:00', 'cameroon') +
    createGame('brazil','14:00', 'cameroon') + 
    createGame('brazil','14:00', 'cameroon')
)