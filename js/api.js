
 function getCharacters(done) {

    const results = fetch('https://rickandmortyapi.com/api/character')

    results
        .then(response => response.json())
        .then(Date => { done(Date) })

}
getCharacters(Date => {
    console.log(Date);

    Date.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(`
        <article>
        <div class="contenedor-de-imagenes">
            <img src="${personaje.image}" alt="Personaje">

        </div>
        <h3>"${personaje.name}"</h3>

        <h4>"${personaje.status}"</h4>
        
        <h4">${personaje.species}</"h4>
        
    </article>`
        
        );

        const main = document.querySelector("main");

        main.append(article)

    })
}) 