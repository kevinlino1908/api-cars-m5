import { car } from '@prisma/client';
import { Request, Response } from 'express';
import { CarServices } from './../services/car.services';
export class CarController {
    private carServices = new CarServices()

    public create = async ({body}:Request, res: Response): Promise<Response> => {
        const car = await this.carServices.create(body)
        return res.status(201).json(car)
    }
    public read = async (_req:Request, res: Response): Promise<Response> => {
        const cars = await this.carServices.read()
        return res.status(200).json(cars)
    }
    public retrieve = async (_req:Request, res: Response): Promise<Response> => {
        const {foundResource} = res.locals
        const car = await this.carServices.retrieve(foundResource)
        return res.status(200).json(car)
    }
    public update = async ({body , params: {userId}}: Request, res: Response): Promise<Response> => {

        const car = await this.carServices.update(userId, body) 
        return res.status(200).json(car)
    }
    public delete = async ({params:{userID}}:Request, res: Response): Promise<Response> => {

        await this.carServices.delete(userID)

        return res.status(204).json()
    }
}