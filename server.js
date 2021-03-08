const { syncAndSeed } = require('./db/syncAndSeed');
const express = require('express');
const path = require('path');
const router = require('./routes/router');

const app = express();

app.use('/dist', express.static(path.join(__dirname, './dist')));
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/api', router);

app.get('/', async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, 'index.html'));
  } catch (err) {
    next(err);
  }
});

const init = async () => {
  try {
    await syncAndSeed();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

init();
