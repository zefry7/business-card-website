import store from "../../store/store"


describe("Redux Store", () => {

    it("корректное определение", () => {
        expect.assertions(2)

        expect(store).toBeDefined()
        expect(store.getState()).toHaveProperty("globalReducer")
    })
})
