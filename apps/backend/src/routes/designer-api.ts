import { Application } from 'express';
import appMetadata from './fixtures/app-metadata.json';
import repoMetadata from './fixtures/repo-metadata.json';
import initialComit from './fixtures/initial-commit.json';

export const designerApiRoutes = (app: Application) => {
  app.get('/designer/api/repos/repo/:owner/:repo/status', (req, res) =>
    res.json({
      behindBy: 0,
      aheadBy: 0,
      contentStatus: [],
      repositoryStatus: 'Ok',
      hasMergeConflict: false,
    })
  );

  app.get('/designer/api/:owner/:repo/datamodels/all-json', (req, res) => {
    res.json([]);
  });

  app.get('/designer/api/:owner/:repo/metadata', (req, res) => {
    res.json(appMetadata);
  });

  app.get('/designer/api/session/remaining', (req, res) => {
    res.send('999');
  });

  app.get('/designer/api/repos/repo/:owner/:repo/metadata', (req, res) => {
    res.json(repoMetadata);
  });

  app.get('/designer/api/repos/repo/:owner/:repo/initial-commit', (req, res) => {
    res.json(initialComit);
  });

  app.get('/designer/api/:owner/:repo/text/service-name', (req, res) => {
    const { repo } = req.params;
    res.send(repo);
  });

  app.get('/designer/api/:owner/:repo/config', (req, res) => {
    const { repo } = req.params;
    res.json({
      repositoryName: repo,
      serviceName: null,
      serviceId: null,
      serviceDescription: null,
    });
  });
  app.get('/designer/api/:owner/:repo/datamodels/all-xsd', (req, res) => {
    res.json([]);
  });
};
