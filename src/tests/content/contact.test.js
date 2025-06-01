import Contact from "../../content/Main/Contact/Contact"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { test } from "@jest/globals"
import "@testing-library/jest-dom"
import { renderComponent } from "../helperTest/renderComponent"


describe("Компонент Contact:", () => {
    beforeEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.useFakeTimers()
        global.fetch = jest.fn();
        global.alert = jest.fn();
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it("рендер", () => {
        expect(renderComponent(<Contact />).container).toMatchSnapshot();
    })

    it("параметр page равен 4", async () => {
        expect.assertions(1)
        renderComponent(<Contact />, { page: 4 })

        expect((await screen.findByTestId("contact")).classList).toContain("contact_active")
    })

    it("параметр page не равен 4", async () => {
        expect.assertions(2)
        renderComponent(<Contact />, { page: 3 })

        jest.runAllTimers()
        let mainElement = await screen.findByTestId("contact")

        expect(mainElement.classList).not.toContain("contact_active")
        expect(mainElement.style._values).toEqual({ "--page": "3" })
    })

    describe("ввод в поле 'Ваше имя'", () => {
        test.each([
            ["коля", "Коля"],
            ["КОЛЯ", "КОЛЯ"]
        ])("корректный", async (value, result) => {
            expect.assertions(1)
            renderComponent(<Contact />)

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
            renderComponent(<Contact />)

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
            renderComponent(<Contact />)

            await userEvent.type(await screen.findByTestId("inputEmail"), "email@email.ru")
            await userEvent.click(await screen.findByTestId("submit"))

            expect(await screen.queryByText("*Неправильно указана почта")).not.toBeInTheDocument()
        })

        it("некорректный", async () => {
            expect.assertions(1)
            global.fetch.mockResolvedValueOnce({ ok: true });
            renderComponent(<Contact />)

            await userEvent.type(await screen.findByTestId("inputEmail"), ".ru")
            await userEvent.click(await screen.findByTestId("submit"))

            expect(await screen.queryByText("*Неправильно указана почта")).toBeInTheDocument()
        })
    })

    it("сообщение об успешной отправке письма", async () => {
        global.fetch.mockImplementation(() => Promise.resolve({ ok: true }))
        renderComponent(<Contact />)

        await userEvent.type(await screen.findByTestId("inputEmail"), "email@email.ru")
        await userEvent.click(await screen.findByTestId("submit"))

        expect(global.alert).toHaveBeenCalledWith("Сообщение отправлено!")
    })

    it("сообщение об ошибке при отправке письма", async () => {
        global.fetch.mockImplementation(() => Promise.resolve({ ok: false, error: 501 }))
        renderComponent(<Contact />)

        await userEvent.type(await screen.findByTestId("inputEmail"), "email@email.ru")
        await userEvent.click(await screen.findByTestId("submit"))

        expect(global.alert).toHaveBeenCalledWith("Возникла ошибка!")
    })
})