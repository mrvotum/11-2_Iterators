import AttackedTeam from '../src/js/attackTeam';

test('Two payers in the team', () => {
  const playerOne = {
    name: 'Лучник-1',
    type: 'Bowman',
    health: 50,
    attackDistance: 8, // дальность атаки
    attack: 40,
    defence: 10,
  };

  const playerTwo = {
    name: 'Некромант-2',
    type: 'Necromancer',
    health: 30,
    attackDistance: 4, // дальность атаки
    attack: 50,
    defence: 15,
  };

  const playerThree = {
    name: 'Rick-3',
    type: 'Сucumber',
    health: 100,
    attackDistance: 4, // дальность атаки
    attack: 90,
    defence: 75,
  };

  const inputTeam = new AttackedTeam(playerThree, playerTwo, playerOne);
  const result = [];
  const expected = [ // ожидает
    {
      name: 'Некромант-2',
      type: 'Necromancer',
      health: 30,
      attackDistance: 4,
      attack: 50,
      defence: 15,
    }, {
      name: 'Лучник-1',
      type: 'Bowman',
      health: 50,
      attackDistance: 8,
      attack: 40,
      defence: 10,
    }, {
      name: 'Rick-3',
      type: 'Сucumber',
      health: 100,
      attackDistance: 4,
      attack: 90,
      defence: 75,
    },
  ];

  for (const character of inputTeam) {
    result.push(character);
  }

  const received = result; // получает
  expect(received).toEqual(expected); // сравнивает
});
