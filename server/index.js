const server = require("./src/server.js");
const { PORT } = require("./src/config.js");

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));