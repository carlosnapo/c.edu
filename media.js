function média() {
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de $
    {nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2)/2

    let msg // cria uma variavel e deixa ela vazia
    if (med >= 6) {//Se por acaso a média foi 6.0 ou mais...
        msg = 'Meus parabéns!'
    } else {'Estude um pouco mais!'}

    // o if é uma estrutura que cria uma Condição, que executa um bloco de comando ou outro, dependendo do resultado de um teste lógico.

    let res = document.getElementById('situacao')








}