const util = {
  obterPosicaoJogador: (position) => {
    switch (position) {
      case 1:
        return 'Goleiro';
      case 2:
        return 'Zagueiro';
      case 3:
        return 'Meio Campo';
      case 4:
        return 'Atacante';
      default:
        return '';
    }
  },

  obterPosicaoJogadorAbreviada: (position) => {
    switch (position) {
      case 1:
        return 'GOL';
      case 2:
        return 'ZAG';
      case 3:
        return 'MEI';
      case 4:
        return 'ATA';
      default:
        return '';
    }
  },

  colorTeam: (color) => {
    switch (color) {
      case 'blue':
        return 'Azul'
      case 'white':
        return 'Branco'
      case 'green':
        return 'Verde'
      default:
        return ''
    }
  },
}

export default util;