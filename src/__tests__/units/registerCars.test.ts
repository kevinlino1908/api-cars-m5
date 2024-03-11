import { carCreateBodyMock, carMock, carReturnMock } from '../__mocks__/car.mock';
import { prismaMock } from '../__mocks__/prisma';
import { CarServices } from './../../services/car.services';
describe("unit test: register car", () => {
    it("register car should work correctly", async () => {
        const carServices = new CarServices()

        prismaMock.car.create.mockResolvedValue(carMock)

        const data = await carServices.create(carCreateBodyMock)

        expect(data).toStrictEqual(carReturnMock)
    })
})