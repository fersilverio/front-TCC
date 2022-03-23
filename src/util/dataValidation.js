exports.isIMCabaixoIdeal = (altura, peso) => {
    let imc = peso / Math.pow(altura,2)
    let IMC = imc.toFixed(2)

    if(IMC < 19.9 || IMC <= 26.1){
        return '1'
    }
    else{
        return '0'
    }
}

exports.isHipoNormal = (nivelGlicemico) => {
    if(nivelGlicemico == "Sou considerado(a) hipoglicêmico(a) (glicemia abaixo do normal)" || nivelGlicemico == "Minha glicemia é considerada normal"){
        return '1'
    }
    else{
        return '0'
    }
}

exports.isJovemAdulto = (idade) => {
    if(idade <= 19 || (idade >= 20 && idade <= 59)){
        return '1'
    }
    else{
        return '0'
    }
}

exports.histTabagismo = (opcao) => {
    if(opcao == 'Fumo' || opcao == 'Já fumei por um período'){
        return '1'
    }
    else{
        return '0'
    }
}