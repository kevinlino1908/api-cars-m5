import { prisma } from './../../database';
beforeEach(async ( ) => {
    await prisma.$transaction([
        prisma.car.deleteMany()
    ])
})