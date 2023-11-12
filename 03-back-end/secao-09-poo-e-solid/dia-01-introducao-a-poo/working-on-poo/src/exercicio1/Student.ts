class Student {
  constructor(
      private _matricula: number = 0,
      private _nome: string = '',
      private _notasDeProva: number[] = [],
      private _notasDeTrabalho: number[] = [],
  ) { }

  calculateSumOfGrades(): number {
    let sum = 0;
    this._notasDeProva.forEach((nota) => sum += nota);
    this._notasDeTrabalho.forEach((nota) => sum += nota);
    return sum;
  }

  calculateAverage(): number {
    return this.calculateSumOfGrades() / 6;
  }
}