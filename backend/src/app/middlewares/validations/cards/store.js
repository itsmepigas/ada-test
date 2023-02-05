const Yup = require('yup');

module.exports = async (req, res, next) => {
  const { name } = req.user;
  console.log(`Criando card por ${name} em ${new Date()}`);

  try {
    const schema = Yup.object().shape({
      title: Yup.string().required('Por favor informe o título do card.'),
      description: Yup.string(),
      status: Yup.string(),
      priority: Yup.string(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (e) {
    return res.status(400).send({ error: e?.message });
  }
};
