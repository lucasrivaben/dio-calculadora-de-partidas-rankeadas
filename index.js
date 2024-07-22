function saldoRankeadas(vitorias, derrotas) {
    return vitorias - derrotas
}

let saldo = saldoRankeadas(100, 10)
let nivel = ""

if (saldo < 10) {
    nivel = "Ferro"
}
else if ((saldo > 10) && (saldo <= 20)) {
    nivel = "Bronze"
}
else if ((saldo > 20) && (saldo <= 50)) {
    nivel = "Prata"
}
else if ((saldo > 50) && (saldo <= 80)) {
    nivel = "Ouro"
}
else if ((saldo > 80) && (saldo <= 90)) {
    nivel = "Platina"
}
else if ((saldo > 90) && (saldo <= 100)) {
    nivel = "Ascendente"
}
else if (saldo > 100) {
    nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + saldo + " está no nível de " + nivel)