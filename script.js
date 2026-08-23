const listaProdutos =
    document.getElementById("lista-produtos");


produtos.forEach(produto => {

    const card =
        document.createElement("div");

    card.classList.add("produto");


    card.innerHTML = `

        <img
            src="${produto.imagem}"
            alt="${produto.nome}"
        >

        <div class="conteudo-produto">

            <h3>
                ${produto.nome}
            </h3>

            <p>
                ${produto.descricao}
            </p>

            <span>
                A partir de
            </span>

            <strong>
                R$ ${produto.preco
                    .toFixed(2)
                    .replace(".", ",")}
            </strong>


            <div class="botoes-produto">

                <a
                    href="${produto.demo}"
                    target="_blank"
                    class="demo"
                >
                    Ver demonstração
                </a>


                <a
                    href="https://wa.me/5538999851713?text=${encodeURIComponent(
                        "Olá! Tenho interesse no " +
                        produto.nome
                    )}"
                    target="_blank"
                    class="comprar"
                >
                    Quero este site
                </a>

            </div>

        </div>
    `;


    listaProdutos.appendChild(card);

});
const abrirBot = document.getElementById("abrir-bot");
const fecharBot = document.getElementById("fechar-bot");
const botContainer = document.getElementById("bot-container");
const botMensagens = document.getElementById("bot-mensagens");


abrirBot.addEventListener("click", function () {

    botContainer.style.display = "block";

});


fecharBot.addEventListener("click", function () {

    botContainer.style.display = "none";

});


function responderBot(opcao) {

    let resposta = "";


    if (opcao === "preco") {

        resposta =
            "💰 Nossos sites possuem preços diferentes dependendo do modelo e das funções. Veja nossos modelos disponíveis acima.";

    }


    if (opcao === "prazo") {

        resposta =
            "⏱️ O prazo depende do projeto. Sites simples podem ficar prontos mais rapidamente e projetos personalizados podem levar mais tempo.";

    }


    if (opcao === "comprar") {

        resposta =
            "🛒 Escolha um modelo, clique em 'Quero este site' e você será direcionado para o WhatsApp.";

    }


    if (opcao === "personalizado") {

        resposta =
            "🎨 Sim! Podemos criar um site personalizado com as cores, nome, imagens e funções que você quiser.";

    }


    if (opcao === "whatsapp") {

        window.open(
            "https://wa.me/5538999851713?text=Olá! Vim pelo site e gostaria de saber mais.",
            "_blank"
        );

        return;
    }


    const novaMensagem = document.createElement("div");

    novaMensagem.classList.add("mensagem-bot");

    novaMensagem.innerHTML = resposta;

    botMensagens.appendChild(novaMensagem);


    botMensagens.scrollTop =
        botMensagens.scrollHeight;

}
function responderCurso(opcao) {

    let resposta = "";

    if (opcao === "cursos") {
        resposta =
            "📚 Temos cursos de HTML, CSS e criação de sites. Veja as opções disponíveis nesta página.";
    }

    if (opcao === "iniciante") {
        resposta =
            "🎓 Se você está começando do zero, recomendo começar pelo curso HTML do Zero.";
    }

    if (opcao === "pagamento") {
        resposta =
            "💳 Para saber as formas de pagamento, clique em falar comigo pelo WhatsApp.";
    }

    if (opcao === "acesso") {
        resposta =
            "🔑 Depois da confirmação da compra, você receberá as informações de acesso ao curso.";
    }

    if (opcao === "whatsapp") {

        window.open(
            "https://wa.me/5538999851713?text=Olá! Vim pela página de cursos e gostaria de mais informações.",
            "_blank"
        );

        return;
    }

    const novaMensagem = document.createElement("div");

    novaMensagem.classList.add("mensagem-bot");

    novaMensagem.innerHTML = resposta;

    document
        .getElementById("bot-mensagens")
        .appendChild(novaMensagem);
}