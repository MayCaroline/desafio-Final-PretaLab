//Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas.
//Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:

/*#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas*/

/* RESPOSTA DO NOVO DESAFIO - MAYARA BARROS */
//Ps. Fiz ja usando algumas do desafio anterior e pedi ajuda do meu primo com outras que eu não tava conseguindo fazer rodar.
//Obrigada pela manhã de muito conhecimento e por reviver a minha vontade de aprender programação.


function calcularNumeroDeMedalhas() {
    let paises = [];
    let medalhas = [];

    while (true) {
        let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");

        if (pais.toLowerCase() === "sair") {
            break;
        }

        let ouro = parseInt(prompt(`Digite o número de medalhas de ouro que o ${pais} ganhou nas Olimpíadas:`));
        let prata = parseInt(prompt(`Digite o número de medalhas de prata que o ${pais} ganhou nas Olimpíadas:`));
        let bronze = parseInt(prompt(`Digite o número de medalhas de bronze que o ${pais} ganhou nas Olimpíadas:`));

        if (!isNaN(ouro) && !isNaN(prata) && !isNaN(bronze)) {
            let totalMedalhas = ouro + prata + bronze;
            paises.push(pais);
            medalhas.push(totalMedalhas);
        } else {
            alert("Por favor, insira valores numéricos válidos para as medalhas.");
        }
    }

    if (paises.length > 0) {
        
        let ranking = [];
        for (let i = 0; i < paises.length; i++) {
            ranking.push({ pais: paises[i], medalhas: medalhas[i] });
        }
        ranking.sort((a, b) => b.medalhas - a.medalhas);

        let resultado = "#Ranking de medalhas:\n";
        for (let i = 0; i < ranking.length; i++) {
            resultado += `#${ranking[i].pais}: ${ranking[i].medalhas} medalhas\n`;
        }
        alert(resultado);
    } else {
        alert("Nenhum dado foi inserido.");
    }
}

calcularNumeroDeMedalhas();
