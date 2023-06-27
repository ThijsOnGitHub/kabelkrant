import { startObsConnector } from "./player.js";
import { startCron } from "./playout.js";
import { startServer } from "./server.js";

startObsConnector()
startServer()
startCron()