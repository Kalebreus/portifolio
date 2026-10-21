const abas = document.querySelectorAll(".abas");
const informacoes = document.querySelectorAll(".informacoes");

abas.forEach(function (aba) {
    aba.addEventListener("click", function () {
        const id = aba.getAttribute("data-aba");
        const jaSelecionada = aba.classList.contains("selecionado");

        abas.forEach(function (item) {
            item.classList.remove("selecionado");
        });

        informacoes.forEach(function (info) {
            info.classList.remove("selecionado");
        });

        if (!jaSelecionada) {
            aba.classList.add("selecionado");
            document.getElementById(id).classList.add("selecionado");
        }
    });
});