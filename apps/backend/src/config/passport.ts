import passport from 'passport';
import { Strategy } from 'passport-github2';
import type { Application } from 'express';
import { BASEURL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from './envvar';

export const configPassport = (app: Application) => {
  // Passport session setup
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(
    new Strategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: BASEURL + 'authorization-callback',
      },
      function (access_token, refresh_token, profile, done) {
        process.nextTick(function () {
          return done(null, { ...profile._json, access_token, refresh_token });
        });
      }
    )
  );
  app.get('/authorization-start', passport.authenticate('github', { scope: ['user:email', 'repo'] }));
  app.get('/user', (req, res) => {
    res.json({ session: req.session.passport.user });
  });
  app.get(
    '/authorization-callback',
    passport.authenticate('github', {
      failureRedirect: '/authorization-failure',
    }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/user');
    }
  );
};
