const Cards = require('../../models/Cards');

class ListCards {
  async get (user_id) {
    const cards = await Cards.findAll({
      where: { deleted: false, user_id },
    });

    return cards;
  }
}

module.exports = new ListCards();
