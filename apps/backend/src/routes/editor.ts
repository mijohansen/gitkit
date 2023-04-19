import { Application } from 'express';

export const guiRoutes = (app: Application) => {
  app.get('/editor/*', async (req, res) => {
    res.type('text/html');
    res.send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Altinn Studio</title>
    <link href="https://altinncdn.no/fonts/roboto/latin/roboto.css" rel="stylesheet">
    <script src="https://use.fortawesome.com/bdabc5c1.js" integrity="sha384-RWLwsKtKmVNEJ9QRNFV7jTnpaKndZ55fgmHtUCsBG/Rh8muHUxt2IgmOISDL9vwu" crossorigin="anonymous"></script>
    <script src="https://use.fortawesome.com/ed31cded.js" integrity="sha384-MdVjOFC0sGncJU25w8Nemhj/C5ROt+h/QoaXvtuoef7uw/JF6dd4LbbHrdTOIHWd" crossorigin="anonymous"></script>
  </head>

  <body class="a-bgWhite flex-column d-flex">
    <div class="container-fluid flex-column d-flex media-body">
      <link rel="stylesheet" href="https://dev.altinn.studio/designer/frontend/app-development/app-development.css">
      <div id="root" class="media-body flex-column d-flex"></div>
      <script src="https://dev.altinn.studio/designer/frontend/app-development/app-development.js" type="text/javascript"></script>
    </div>
  </body>
</html>
    `);
  });
};
