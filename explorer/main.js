function createGame(player1, hour, player2){
    return`
        <li>
            <img src="./assets/${player1}.svg" alt="Bandeira da ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/${player2}.svg" alt="Bandeira de ${player2}">
        </li>
    `
}

function createCard(date, day, games){
   return `
    
            <div class="card">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}



document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo da nlw">
    </header>
    <main id="cards">
        ${createCard('24/11', 'Quinta', 
        createGame('brazil','14:00', 'cameroon') +
        createGame('brazil','14:00', 'cameroon') + 
        createGame('brazil','14:00', 'cameroon')
        )}
        ${createCard('25/10', 'quarta',
        createGame('brazil','14:00', 'cameroon') +
        createGame('brazil','14:00', 'cameroon') + 
        createGame('brazil','14:00', 'cameroon')
        )}
    </main>
`