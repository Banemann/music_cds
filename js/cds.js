document.querySelector("#cd-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const author = e.target.author.value;
    const title = e.target.title.value;
    const year = e.target.year.value;

    const authorP = document.createElement("p");
    authorP.textContent = author;
    document.querySelector("#author-output").appendChild(authorP);

    const titleP = document.createElement("p");
    titleP.textContent = title;
    document.querySelector("#title-output").appendChild(titleP);

    const yearP = document.createElement("p");
    yearP.textContent = year;
    document.querySelector("#year-output").appendChild(yearP);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        authorP.remove();
        titleP.remove();
        yearP.remove();
        deleteButton.remove();
    });
    document.querySelector("#delete-output").appendChild(deleteButton);    
});