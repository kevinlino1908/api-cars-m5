import { Router } from "express";
import { CarController } from "../controller/car.controller";

export const carRouter = Router()

const controller = new CarController()

carRouter.post("/cars", controller.create)
carRouter.get("/cars", controller.read)

carRouter.get("/cars/:id", controller.retrieve)
carRouter.patch("/cars/:id", controller.update)
carRouter.delete("/cars/:id", controller.delete)