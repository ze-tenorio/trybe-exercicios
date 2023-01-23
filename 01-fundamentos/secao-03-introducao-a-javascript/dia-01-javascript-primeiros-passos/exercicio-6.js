let candidateStatus = 'lista';

switch(candidateStatus) {
    case 'aprovada':
        console.log("Parabéns, você foi aprovada(o)");
        break;
    case 'lista':
        console.log("Você está na nossa lista de espera");
        break;
    case 'reprovado':
        console.log("Você foi reprovado(a)");
        break;
    default:
        console.log("Informação incorreta")
        break;
}