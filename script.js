function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = `<p class="nenhum-resultado">Nenhum resultado encontrado</p>`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""

    let titulo = "";
    let descricao = "";
    let genero = "";
    let elenco = "";
    let tags = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        genero = dado.genero.toLowerCase()
        elenco = dado.elenco.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa) || elenco.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">Gênero: ${dado.genero}</p>
            <p class="descricao-meta">Elenco: ${dado.elenco}</p>
                
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `
        }
    }

    if (!resultados) {
        resultados = `<p class="nenhum-resultado">Nenhum resultado encontrado</p>`
    }
    
    section.innerHTML = resultados
}