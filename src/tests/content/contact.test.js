import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import Contact from "../../content/Main/Contact/Contact"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { test } from "@jest/globals"
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils"


const funcRender = (page) => {
    const mockStore = configureStore([])
    const store = mockStore({ globalReducer: { page: page == undefined ? 1 : page } })

    return render(<Provider store={store}>
        <Contact />
    </Provider>)
}


describe("Компонент Contact:", () => {

    beforeEach(() => {
        global.fetch = jest.fn();
        global.alert = jest.fn();
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    // it("рендер", () => {
    //     expect(funcRender().container).toMatchSnapshot();
    // })

    it("параметр page равен 4", async () => {
        expect.assertions(1)
        funcRender(4)

        let mainElement = await screen.findByTestId("contact")

        expect(mainElement.classList).toContain("contact_active")
    })

    it("параметр page не равен 4", async () => {
        expect.assertions(1)
        jest.useFakeTimers()
        funcRender()

        jest.advanceTimersByTime(300)

        let mainElement = await screen.findByTestId("contact")

        expect(mainElement.style._values).toEqual({ "--page": "1" })
    })

    describe("ввод в поле 'Ваше имя'", () => {
        test.each([
            ["коля", "Коля"],
            ["КОЛЯ", "КОЛЯ"]
        ])("корректный", async (value, result) => {
            funcRender()

            let inputName = await screen.findByTestId("inputName")
            await userEvent.type(inputName, value)
            await userEvent.tab()

            expect(inputName.value).toEqual(result)
        })

        test.each([
            ["3513", ""],
            ["Коля464", "Коля"],
            ["454Коля", "Коля"],
            ["  ", ""]
        ])("некорректный", async (value, result) => {
            expect.assertions(1)
            funcRender()

            let inputName = await screen.findByTestId("inputName")
            await userEvent.type(inputName, value)
            await userEvent.tab()

            expect(inputName.value).toEqual(result)
        })
    })

    describe("ввод в поле 'Почта'", () => {
        it("корректный", async () => {
            expect.assertions(1)
            global.fetch.mockResolvedValueOnce({ ok: true });
            funcRender()

            let inputEmail = await screen.findByTestId("inputEmail")
            await userEvent.type(inputEmail, "email@email.ru")
            let sumbit = await screen.findByTestId("submit")
            await userEvent.click(sumbit)

            let errorElem = await screen.queryByText("*Неправильно указана почта")

            expect(errorElem).not.toBeInTheDocument()
        })

        it("некорректный", async () => {
            expect.assertions(1)
            global.fetch.mockResolvedValueOnce({ ok: true });
            funcRender()

            let inputEmail = await screen.findByTestId("inputEmail")
            await userEvent.type(inputEmail, ".ru")
            let sumbit = await screen.findByTestId("submit")
            await userEvent.click(sumbit)

            let errorElem = await screen.queryByText("*Неправильно указана почта")

            expect(errorElem).toBeInTheDocument()
        })
    })

    it("сообщение об успешной отправке письма", async () => {
        global.fetch.mockImplementation(() => Promise.resolve({ ok: true}))
        funcRender()

        let inputEmail = await screen.findByTestId("inputEmail")
        await userEvent.type(inputEmail, "email@email.ru")
        let sumbit = await screen.findByTestId("submit")
        await userEvent.click(sumbit)

        expect(global.alert).toHaveBeenCalledWith("Сообщение отправлено!")
    })

    it("сообщение об ошибке при отправке письма", async () => {
        global.fetch.mockImplementation(() => Promise.resolve({ ok: false}))
        funcRender()

        let inputEmail = await screen.findByTestId("inputEmail")
        await userEvent.type(inputEmail, "email@email.ru")
        let sumbit = await screen.findByTestId("submit")
        await userEvent.click(sumbit)

        expect(global.alert).toHaveBeenCalledWith("Возникла ошибка!")
    })
})