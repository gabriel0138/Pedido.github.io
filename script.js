var botaoAbrir = document.querySelector("#btn-abrir");
var containerVaporwave = document.querySelector(".container");
var botaoForm = document.querySelector("#submit-btn");
var secaoPedido = document.querySelector(".hackerwoman");
var form = document.querySelector(".pedido-resposta");

botaoAbrir.addEventListener("click", () => {
    containerVaporwave.style.display = "grid";
    botaoAbrir.style.display = "none";
    secaoPedido.style.height = "auto";
    window.scrollTo({
        top: 1500,
        behavior: "smooth"
    });
})

botaoForm.addEventListener("click", (event) => {
    event.preventDefault();

    // Exibindo uma mensagem de amor
    alert("Eu te amo! ❤️");

    // Log para o console (opcional)
    console.log("Mensagem de amor exibida!");
});
