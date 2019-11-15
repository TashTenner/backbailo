/* eslint-disable no-param-reassign */
const checkIfLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.status(401).json({ code: 'unauthorized' });
  }
};

const checkUsernameAndPasswordNotEmpty = (req, res, next) => {
  const { username, password } = req.body;

  if (username !== '' && password !== '') {
    res.locals.auth = req.body;
    next();
  } else {
    res.status(422).json({ code: 'validation' });
  }
};

// const checkDomain = (req, res, next) => {
//   const { hostname } = req;

//   if (hostname === 'https://bailo.netlify.com/') {
//     res.locals.auth = req.body;
//     next();
//   } else {
//     res.status(422).json({ code: 'unauthorized' });
//   }
// };

module.exports = {
  checkIfLoggedIn,
  checkUsernameAndPasswordNotEmpty,
  // checkDomain,
};
