function cambiarTitulo() {
    // Seleccionar H1 y cambiar color de texto
    // let titleH1 = document.querySelector("#titleDoc");
    // let titleH1 = document.getElementById("titleDoc");
    // let titleH1 = document.getElementsByClassName("display-1");
    // let titleH1 = document.getElementsByTagName("a");
    let titleH1 = document.getElementById("titleDoc");
    titleH1.innerHTML = "Nuevo título de prueba";
    titleH1.className += " color-yellow"
}

function verMas() {
    //Change button
    let btnMore = document.querySelector("#btn-more");
    // Insert in html
    let articleParents = document.getElementsByTagName("article");

    if (btnMore.className === "btn btn-primary my-2") {
        // Create elements - option 1
        // Create paragraph
        // let newParagraph = document.createElement("p");
        // Add text
        // newParagraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatibus eveniet. Reiciendis vel sapiente nisi esse laboriosam ut architecto voluptates aliquam atque quos dolore itaque sequi ratione, fuga maiores similique soluta harum! Aliquam illum, fuga ad nihil iusto sit, facere facilis inventore nisi reprehenderit ratione ea. Ipsum, dolor dolores, incidunt quo iure atque veniam itaque quos tenetur quam laudantium impedit. Aspernatur omnis eum temporibus aperiam ab repellat, labore unde numquam laboriosam ea mollitia minus quae nemo totam accusantium incidunt quod similique iste. Soluta mollitia voluptatem nulla reiciendis est? Sint repudiandae ad est saepe, esse aspernatur? Maxime blanditiis temporibus laudantium praesentium."
        // newParagraph.className = "lead";
        // articleParents[1].appendChild(newParagraph)
        // Create elements - option 1
        // Change button text
        // Create elements - option 2
        let newParagraph = `<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi in dicta fugiat itaque molestias assumenda iste ullam, ab cupiditate modi. Nesciunt, amet, dolorem error, provident fuga repudiandae inventore aspernatur non odit assumenda voluptatum reiciendis nostrum. Consequatur nulla doloribus laudantium animi earum omnis pariatur delectus quam voluptatum aut voluptates laboriosam fugit tempore ex qui, fuga dolorum error maiores! Voluptatum numquam laborum ipsum esse perspiciatis? Nobis in ullam quidem nihil eius dignissimos atque possimus provident tempora ratione laboriosam optio aliquam adipisci nam fugiat minus officia voluptatibus quis debitis, quo dolor fugit labore quibusdam autem? Quos dolores exercitationem expedita nobis consequuntur itaque laudantium, veniam magnam beatae iste rerum sunt alias facilis totam at! Unde obcaecati in perferendis ipsa, laboriosam voluptatum. Rerum, ad, numquam a minima aut modi ipsa temporibus veniam tempora, soluta vel iure nulla! Voluptatum nam perferendis ipsam at alias amet tempore dolorem laboriosam! Cupiditate assumenda explicabo neque deserunt aut corrupti.</p>`;
        articleParents[1].innerHTML += newParagraph;

        btnMore.innerHTML = "Ocultar info";
        btnMore.className = "btn btn-danger"
    } else {
        //Delete node
        // console.log(articleParents[1].hasChildNodes());
        // console.log(articleParents[1].children);
        //Delete p
        if (articleParents[1].hasChildNodes() === true) {
            articleParents[1].removeChild(articleParents[1].children[2]);
        }
        btnMore.innerHTML = "Ver más...";
        btnMore.className = "btn btn-primary my-2"
    }
} 