const Yup = require('yup');

module.exports = async (req, res, next) => {
  const { name } = req.user;
  const { id } = req.params;
  console.log(`Deletando card ${id} por ${name} em ${new Date()}`);

  try {
    const schema = Yup.object().shape({
      id: Yup.string().required('Falha ao identificar card selecionado, por favor tente novamente.'),
    });

    await schema.validate(req.params, { abortEarly: false });

    return next();
  } catch (e) {
    return res.status(400).send({ error: e?.message });
  }
};
