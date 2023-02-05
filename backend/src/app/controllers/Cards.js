const Cards = require('../models/Cards');
const ListCards = require('../services/cases/listCards');

class CardsController {
  async get(req, res) {
    const { user_id } = req.user;

    const cards = await ListCards.get(user_id);

    return res.json({ cards });
  }

  async store(req, res) {
    const { user_id } = req.user;
    const { ...cardData } = req.body;

    await Cards.create({ ...cardData, user_id });

    const cards = await ListCards.get(user_id);

    return res.json({ cards });
  }

  async update(req, res) {
    const { user_id } = req.user;
    const { id } = req.params;
    const { ...cardData } = req.body;

    await Cards.update(
      { ...cardData, user_id },
      { where: { id } }
    );

    const cards = await ListCards.get(user_id);

    return res.json({ cards });
  }

  async del(req, res) {
    const { user_id } = req.user;
    const { id } = req.params;

    await Cards.update({ deleted: true }, { where: { id } });

    const cards = await ListCards.get(user_id);

    return res.json({ cards });
  }
}

module.exports =  new CardsController();