import type { Application } from 'express';
import { Octokit } from '@octokit/rest';

export const repoRoutes = (app: Application) => {
  app.get('/repos/mine', async (req, res) => {
    const octokit = new Octokit({
      auth: req.session.passport.user.access_token,
    });
    const repos = await octokit.rest.repos.listForAuthenticatedUser();
    res.json(repos);
  });
};
