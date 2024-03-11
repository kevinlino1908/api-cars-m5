import { z } from "zod";
import { carCreateSchema, carReturnSchema, carUpdateSchema } from "../schemas/car.schema";


type carCreate = z.infer<typeof carCreateSchema>
type carUpdate = z.infer<typeof carUpdateSchema>
type carReturn = z.infer<typeof carReturnSchema>


export {carCreate, carUpdate, carReturn}