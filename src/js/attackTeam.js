export default class AttackedTeam {
  constructor(...characters) {
    this.characters = characters.sort((a, b) => (
      a.health + a.defence - b.health - b.defence // По сложности уничтожения
      + a.attack + a.attackDistance - b.attack - b.attackDistance // По уровню "опасности"
    ));
  }

  // сделаем объект AttackedTeam итерируемым
  [Symbol.iterator]() {
    let current = 0;
    const last = this.characters.length;

    return {
      next: () => {
        if (current < last) {
          return {
            done: false,
            value: this.characters[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
