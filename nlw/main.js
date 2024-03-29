function creatGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
         <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    
    `
}




function creatCard(date, day, games) {
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
        <img src="./assets/logo.svg" alt="Logo do Calendário">
    </header>
    <main id="cards">
       ${creatCard("20/11", "domingo", 
            creatGame('qatar', '13:00', 'ecuador'))}
       ${creatCard("21/11", "segunda", 
            creatGame('england', '10:00', 'iran') + 
            creatGame('senegal', '13:00', 'netherlands') + 
            creatGame('USA', '16:00', 'gales'))}
       ${creatCard("22/11", "terça", 
            creatGame('argentina', '07:00', 'saudi arabia' ) + 
            creatGame('dinamarca', '10:00', 'tunísia') + 
            creatGame('méxico', '13:00', 'polônia') + 
            creatGame('frança', '16:00', 'austrália') )}
       ${creatCard("23/11", "quarta", 
            creatGame('marrocos', '07:00', 'croácia') + 
            creatGame('germany', '10:00', 'japan') + 
            creatGame('spain', '13:00', 'costa rica') + 
            creatGame('belgium', '16:00', 'canada'))}
        ${creatCard("23/11", "quarta", 
            creatGame('marrocos', '07:00', 'croácia') + 
            creatGame('germany', '10:00', 'japan') + 
            creatGame('spain', '13:00', 'costa rica') + 
            creatGame('belgium', '16:00', 'canada'))}
        ${creatCard("23/11", "quarta", 
            creatGame('marrocos', '07:00', 'croácia') + 
            creatGame('germany', '10:00', 'japan') + 
            creatGame('spain', '13:00', 'costa rica') + 
            creatGame('belgium', '16:00', 'canada'))}
        ${creatCard("23/11", "quarta", 
            creatGame('marrocos', '07:00', 'croácia') + 
            creatGame('germany', '10:00', 'japan') + 
            creatGame('spain', '13:00', 'costa rica') + 
            creatGame('belgium', '16:00', 'canada'))}
        ${creatCard("23/11", "quarta", 
            creatGame('marrocos', '07:00', 'croácia') + 
            creatGame('germany', '10:00', 'japan') + 
            creatGame('spain', '13:00', 'costa rica') + 
            creatGame('belgium', '16:00', 'canada'))}
        ${creatCard("23/11", "quarta", 
            creatGame('marrocos', '07:00', 'croácia') + 
            creatGame('germany', '10:00', 'japan') + 
            creatGame('spain', '13:00', 'costa rica') + 
            creatGame('belgium', '16:00', 'canada'))}






    </main>

`

