const app = require("./src/app");
require("dotenv").config();

const PORT = process.env.APP_PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
