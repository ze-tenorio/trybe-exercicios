export default class Data {
    constructor(
        private _dia: number = 0o1,
        private _mes: number = 0o1,
        private _ano: number = 1900,
    ) {
        if (this._dia < 1 || this._dia > 31) {
            this._dia = 0o1;
        }
        if (this._mes < 1 || this._mes > 12) {
            this._mes = 0o1;
        }
        if (this._ano < 1) {
            this._ano = 1900;
        }
    }

    format(dateFormat: string = 'dd/mm/yyyy'): string {
      if (dateFormat === 'yyyy-mm-dd') {
        return `${this._ano}-${this._mes}-${this._dia}`;
      }
      if (dateFormat === 'dd de M de aa') {
        return `${this._dia} de ${this.getMesExtenso()} de ${this._ano.toString().slice(2)}`;
      }
      if (dateFormat === 'dd, M de aaaa') {
        return `${this._dia}, ${this.getMesExtenso()} de ${this._ano}`;
      }
      return `${this._dia}/${this._mes}/${this._ano}`;
    }

    getMesExtenso(): string {
      switch (this._mes) {
        case 1:
          return 'Janeiro';
        case 2:
          return 'Fevereiro';
        case 3:
          return 'Março';
        case 4:
          return 'Abril';
        case 5:
          return 'Maio';
        case 6:
          return 'Junho';
        case 7:
          return 'Julho';
        case 8:
          return 'Agosto';
        case 9:
          return 'Setembro';
        case 10:
          return 'Outubro';
        case 11:
          return 'Novembro';
        case 12:
          return 'Dezembro';
        default:
          return '';
      }
    }

    isLeapYear(): boolean {
      return (this._ano % 4 === 0 && this._ano % 100 !== 0) || this._ano % 400 === 0;
    }

    compareDates(data: Data): number {
      if (this._ano > data._ano) {
        return 1;
      }
      if (this._ano < data._ano) {
        return -1;
      }
      if (this._mes > data._mes) {
        return 1;
      }
      if (this._mes < data._mes) {
        return -1;
      }
      if (this._dia > data._dia) {
        return 1;
      }
      if (this._dia < data._dia) {
        return -1;
      }
      return 0;
    }
}
