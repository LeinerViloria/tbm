import express from "express";
import role from "../controllers/role.js";
import roleMidd from "../middlewares/role.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
import validId from "../middlewares/validId.js";

const router = express.Router();

// router.post("/register", auth, admin, roleMidd.validData(), roleMidd.existingRole(), role.registerRole);
// router.get("/list/:name?", auth, admin, role.roleList);
// router.get("/find/:_id", auth, admin, validId, role.getRoleById);
// router.put("/update", auth, admin, roleMidd.validData(), roleMidd.doNotChanges(), role.updateRole);
// router.put("/delete/:_id", auth, admin, validId, role.deleteRole);

export default router;
