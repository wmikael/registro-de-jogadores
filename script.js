class Jogador {
  constructor(nome) {
      this.nome = nome;
      this.timestamp = this.obterTimestamp();
  }

  obterTimestamp() {
      const dataHoraAtual = new Date();
      return dataHoraAtual.toLocaleString('pt-BR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          fractionalSecondDigits: 3,
          hour12: false,
          timeZoneName: 'short',
      });
  }
}

class TabelaJogadores {
  constructor() {
      this.tabelaJogadores = document.getElementById("tabelaJogadores");
      this.numeroRegistro = 1;
  }

  adicionarRegistro(jogador) {
      this.tabelaJogadores.innerHTML += `
          <tr>
              <td>${this.numeroRegistro}</td>
              <td>${jogador.nome}</td>
              <td>${jogador.timestamp}</td>
          </tr>
      `;
      this.numeroRegistro++;
  }

  limparTabela() {
      this.tabelaJogadores.innerHTML = "";
      this.numeroRegistro = 1;
  }
}

const tabela = new TabelaJogadores();

function registrarJogadores() {
  const nomeJogador1 = document.getElementById("nomeJogador1").value;
  const nomeJogador2 = document.getElementById("nomeJogador2").value;

  if (nomeJogador1.trim() !== "") {
      const jogador1 = new Jogador(nomeJogador1);
      tabela.adicionarRegistro(jogador1);
  }

  if (nomeJogador2.trim() !== "") {
      const jogador2 = new Jogador(nomeJogador2);
      tabela.adicionarRegistro(jogador2);
  }

  document.getElementById("nomeJogador1").value = "";
  document.getElementById("nomeJogador2").value = "";
}
