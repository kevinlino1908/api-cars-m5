export const carMock =  {

        id: "fe111d24-1b79-44df-931b-4c9fd5859014",
        name: "Car name",
        description: "Car description",
        brand: "Card brand",
        year: 2023,
        km: 10000
}

export const carCreateBodyMock = {
    name: carMock.name,
    description: carMock.description,
    brand: carMock.brand,
    year: carMock.year,
    km: carMock.km
}

export const carReturnMock = {
    carMock
}