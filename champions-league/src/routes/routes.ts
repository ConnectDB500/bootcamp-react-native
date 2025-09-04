import { Router } from "express";
import * as PlayerController from "../controllers/players-controllers";
import * as ClubsController from "../controllers/clubs-controler";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);
router.get("/clubs", ClubsController.getClubs);

router.post("/players", PlayerController.postPlayers);
router.patch("/players/:id", PlayerController.updatePlayer);

router.delete("/players/:id", PlayerController.deletePlayer);

export default router;