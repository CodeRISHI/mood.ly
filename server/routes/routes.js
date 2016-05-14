import renderIndex from './requestHandler';

// REQUIRE CONTROLLERS
// =================================
import userController from '../controllers/userController';
import moodController from '../controllers/moodController';
import quoteController from '../controllers/quoteController';
import giphyController from '../controllers/giphyController';
import musicVideoController from '../controllers/musicVideoController';
import wiki from '../API/wikiquotes';
import gif from '../API/giphy';
import music from '../API/music';

export default (app, express, passport) => {
  app.get('/', renderIndex);
// AUTH
// =================================
  app.post('/signup', userController.saveOne);
  app.post('/login', userController.verifyLogin);

  app.get('/signup', (req, res) => {
    console.log('req.body==========> ', req.body);
    res.send({ status: 'SUCCESSFULLY-SIGNED-UP' });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/#/dashboard',
    failureRedirect: '/#/',
  }));

  app.get('/login', (req, res) => {
    console.log('req.body==========> ', req.body);
    res.send({ status: 'SUCCESSFULLY-LOGGED-IN' });
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/#/dashboard',
    failureRedirect: '/#/',
  }));

  app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      console.log('User has been logged out successfully.', err);
      res.redirect('/#/');
    });
  });

  // CHECK IF LOGGED IN
  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    // REDIRECT
    return res.redirect('/#/');
  };

  app.get('/profile', isLoggedIn, (req, res) => {
    res.send({ status: 'AUTHENTICATED' });
  });

// MOODS
// =================================
  app.post('/api/moods', moodController.saveUserMood);
  app.get('/api/moods', moodController.getAll);

// QUOTES
// =================================
  app.post('/api/quotes', quoteController.saveUserQuote);
  app.get('/api/quotes', quoteController.retrieveAll);
  app.get('/api/quotes/:id', quoteController.getOne);

// WIKI ROUTES
// =================================
  app.get('/api/wikiInfo', wiki.frontEndCall);

// GIPHY ROUTES
// =================================
  app.get('/api/giphyInfo', gif.frontEndCall);
  app.post('/api/giphys', giphyController.saveUserGiphy);
  app.get('/api/giphys', giphyController.retrieveAll);
  app.get('/api/giphys/:id', giphyController.getOne);

// MUSIC ROUTES
// =================================
  app.get('/api/musicInfo', music.frontEndCall);
  app.post('/api/music', musicVideoController.saveUserMusicVideo);
  app.get('/api/music', musicVideoController.retrieveAll);
  app.get('/api/music/:id', musicVideoController.getOne);

// USERS
// =================================
  app.get('/api/user/quotes', quoteController.getUserQuotes);
  app.get('/api/user/giphys', giphyController.getUserGiphys);
  app.get('/api/user/music', musicVideoController.getUserMusicVideos);
  app.get('/api/users', userController.retrieveAll);
  app.put('/api/users', userController.updateOne);
  app.delete('/api/users', userController.deleteOne);
};
