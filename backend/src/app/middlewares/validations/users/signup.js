const Yup = require('yup');

module.exports = async (req, res, next) => {
  const { name } = req.body;
  console.log(`Criando conta para ${name} em ${new Date()}`);

  try {
    const schema = Yup.object().shape({
      name: Yup.string().required('Por favor informe seu nome.'),
      user: Yup.string().required('Por favor informe seu nome de usuário.'),
      pass: Yup.string().required('Por favor informe sua senha'),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (e) {
    return res.status(400).send({ error: e?.message });
  }
};
