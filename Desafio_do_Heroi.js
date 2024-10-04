class Hero {
  constructor(nome, xp) {
    this.nome = nome;
    this.xp = xp;
  }

  calculate_elo() {
    let elo_actual = "";

    switch (true) {
      case this.xp <= 1000:
        elo_actual = "iron";
        break;

      case this.xp <= 2000:
        elo_actual = "Bronze";
        break;

      case this.xp <= 5000:
        elo_actual = "Silver";
        break;

      case this.xp <= 8000:
        elo_actual = "Platina";
        break;

      case this.xp <= 9000:
        elo_actual = "Ascending";
        break;

      case this.xp <= 10000:
        elo_actual = "immortal";
        break;

      default:
        elo_actual = "Radiant";
    }

    console.log(`O Herói de nome ${this.nome} está no nível de ${elo_actual}`);
  }
}

const hero = new Hero("Ironman", 10000);
hero.calculate_elo();
