import { describe, test, expect } from "@jest/globals"
import { getRandomObjects, produtos1 } from "./randomArrayValue"
import { errorRandomArrayValue } from "./errorsRandomArrayValue"

describe("randomArrayValue", () => {
    test("Verificar se o parametro numberOfRandomObjects é somente numero", () => {
        expect(getRandomObjects(produtos1, "numero")).toBe(errorRandomArrayValue.NOT_NUMBER)
    })

    test("Verificar se o o tamanho do array produtos e igual a numberOfRandomObjects", () => {
        const length = 2
        expect(getRandomObjects(produtos1, length)).toHaveLength(length)
    })
})