// vérification des saisies utilisateur

exports.sauceValidation = (req, res, next) => {
  var regexSauce = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ,-.]*$");
  // exclut tous ce qui n'est pas alphanumérique sauf ., et -
  if (
    !regexSauce.test(req.body.name) ||
    !regexSauce.test(req.body.manufacturer) ||
    !regexSauce.test(req.body.description) ||
    !regexSauce.test(req.body.mainPepper)
  ) {
    res.status(400).json({
      error:
        "Veillez à n'utiliser que des chiffres, des lettres et les caractères , . -",
    });
  } else {
    next();
  }
};

exports.authValidation = (req, res, next) => {
  var regexMail = new RegExp("^[^@s]+@[^@s.]+.[^@.s]+$");
  if (!regexMail.test(req.body.email)) {
    res
      .status(400)
      .json({ error: "Veillez à utiliser une adresse email valide" });
  } else {
    next();
  }
};