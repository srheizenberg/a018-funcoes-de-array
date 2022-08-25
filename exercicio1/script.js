const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function capslock(objeto) {
    const caixalta = {...objeto, nome: objeto.nome.toUpperCase(), profissao: objeto.profissao.toUpperCase(),username: objeto.username.toUpperCase(),senha: objeto.senha.toUpperCase()}
    return caixalta
}
const tudofora = capslock(objeto)
console.log(tudofora)

function textocorrido(objeto) {
   
}
const tudocorrido = textocorrido(objeto)
console.log(tudocorrido)