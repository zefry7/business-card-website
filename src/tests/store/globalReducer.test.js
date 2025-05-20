import globalReducer from "../../store/reducer/globalReducer"


describe("globalReducer", () => {

    it("событие prev-page", () => {
        expect.assertions(2)

        let state = globalReducer({
            page: 1,
        }, { type: "prev-page" })

        expect(state.page).toEqual(1)

        state = globalReducer({
            page: 2,
        }, { type: "prev-page" })

        expect(state.page).toEqual(1)
    })

    it("событие next-page", () => {
        expect.assertions(2)

        let state = globalReducer({
            page: 1,
        }, { type: "next-page" })

        expect(state.page).toEqual(2)

        state = globalReducer({
            page: 4,
        }, { type: "next-page" })

        expect(state.page).toEqual(4)
    })

    it("отсутствующие событие", () => {
        expect.assertions(1)

        let state = globalReducer({
            page: 1,
        }, { type: "error" })

        expect(state.page).toEqual(1)
    })
})