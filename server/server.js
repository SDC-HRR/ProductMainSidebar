require('newrelic');
const app = require("./index.js");

const port = 1992;

app.listen(port, () => {
  console.log(`Server running at: ${port}`);
});
