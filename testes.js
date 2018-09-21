var usuario = prompt("Usuário:");
var senha = prompt("Senha:");

if (usuario == "joão" && senha == 7894) {
    alert("Usuário autorizado!!");
    var hora = prompt("Informe a hora do inicio da jornada.")
    if (hora >= 6 && hora <= 24) {
        alert('Você pode começar a trabalhar.')
    } else {
        alert('Você não pode começar a trabalhar.')
    }
} else {
    alert("Usuário não autorizado!!");
}


