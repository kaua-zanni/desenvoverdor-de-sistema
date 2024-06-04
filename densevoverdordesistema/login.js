function cadrastro (){
    let usuario = prompt("digite seu usuario")
    let senha = prompt("digite sua senha")
    let senhaEusuario = usuario+senha
    return senhaEusuario
}

alert("a sequir vamos fazer o cadrastro")

let cadrastro1 = cadrastro()

function logim(cadrastro){
    let usuario1 = prompt("digite seu usuario")
    let senha1 = prompt("digite sua senha")
    let senhaEusuario1 = usuario1+senha1
    if (cadrastro == senhaEusuario1) {
        alert("logim efetuado com sucesso")
    }
}

alert("a sequir vamos fazer o logim")

let logim1 = logim(cadrastro1)

