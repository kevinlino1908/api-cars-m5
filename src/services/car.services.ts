import { car } from "@prisma/client";
import { carCreate, carReturn, carUpdate } from "../interfaces/car.interface";
import { carReturnSchema } from "../schemas/car.schema";
import { prisma } from "../database";

export class CarServices {
    public create = async (payload: carCreate): Promise<carReturn> => {
        return carReturnSchema.parse(await prisma.car.create({data: payload}))
    }
    public read = async ():Promise<Array<carReturn>> => {
        return carReturnSchema.array().parse(await prisma.car.findMany())
    }
    public retrieve = async (foundResource:car): Promise<carReturn> => {
        return carReturnSchema.parse(foundResource)
    }
    public update = async (userId: string , payload: carUpdate): Promise<carReturn> => {

        const car = await prisma.car.update({
            data: payload,
            where: {id: userId}
        })

        return carReturnSchema.parse(car)
    }
    public delete = async (userId: string): Promise<void> => {
        await prisma.car.delete({where:{id: userId}})
    }
}