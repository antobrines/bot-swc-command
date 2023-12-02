const getLanguage = async (req, res, next) => {
  const {
    lang
  } = req.headers;
  if (!lang) {
    req.lang = 'en';
  } else {
    req.lang = lang;
  }
  next();
};

module.exports = {getLanguage};
