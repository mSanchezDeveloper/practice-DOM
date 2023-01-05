function cambiarTitulo() {
    console.log("Función cambiarTitulo();")
    // Seleccionar H1 y cambiar color de texto
    // let titleH1 = document.querySelector("#titleDoc");
    // let titleH1 = document.getElementById("titleDoc");
    // let titleH1 = document.getElementsByClassName("display-1");
    // let titleH1 = document.getElementsByTagName("a");
    let titleH1 = document.getElementById("titleDoc");
    titleH1.innerHTML = "Nuevo título de prueba";
    titleH1.className += " color-yellow"
    console.log(titleH1);
}

function verMas() {
    //Change button
    let btnMore = document.querySelector("#btn-more");
    // Insert in html
    let articleParents = document.getElementsByTagName("article");

    if (btnMore.className === "btn btn-primary my-2") {
        // Create paragraph
        let newParagraph = document.createElement("p");
        // Add text
        newParagraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatibus eveniet. Reiciendis vel sapiente nisi esse laboriosam ut architecto voluptates aliquam atque quos dolore itaque sequi ratione, fuga maiores similique soluta harum! Aliquam illum, fuga ad nihil iusto sit, facere facilis inventore nisi reprehenderit ratione ea. Ipsum, dolor dolores, incidunt quo iure atque veniam itaque quos tenetur quam laudantium impedit. Aspernatur omnis eum temporibus aperiam ab repellat, labore unde numquam laboriosam ea mollitia minus quae nemo totam accusantium incidunt quod similique iste. Soluta mollitia voluptatem nulla reiciendis est? Sint repudiandae ad est saepe, esse aspernatur? Maxime blanditiis temporibus laudantium praesentium."
        newParagraph.className = "lead";
        articleParents[1].appendChild(newParagraph)
        // Change button text
        btnMore.innerHTML = "Ocultar info";
        btnMore.className = "btn btn-danger"
        console.log(newParagraph)
    } else {
        console.log("Delete p")
        //Delete node
        console.log(articleParents[1].hasChildNodes());
        console.log(articleParents[1].children);
        //Delete p
        articleParents[1].removeChild(articleParents[1].children[2])
        btnMore.innerHTML = "Ver más...";
        btnMore.className = "btn btn-primary my-2"
    }

} 