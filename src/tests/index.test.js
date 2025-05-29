import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import MainPage from "../content/Main/MainPage"
import "@testing-library/jest-dom"

const mockStore = configureStore()

describe("Файл Index", () => {
    beforeEach(() => {
        window.matchMedia = jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            addEventListener: jest.fn((event, callback) => {
                if (event === 'change') {
                    changeCallback = callback;
                }
            }),
            removeEventListener: jest.fn(),
        }));
    })

    afterEach(() => {
        jest.resetAllMocks()
        jest.restoreAllMocks()
    })

    it("рендер", async () => {
        expect.assertions(1)

        render(<Provider store={mockStore({ globalReducer: { page: 1 } })}>
            <MainPage />
        </Provider>)

        const element = await screen.findByText("Frontend")

        expect(element).toBeInTheDocument()
    })

    it("создание root элемента", () => {
        expect.assertions(1)
        document.getElementById = jest.fn().mockImplementation((id) => {
            if (id == "root") {
                return document.createElement("div")
            }

            return null
        })

        require("../index.js")

        expect(document.getElementById).toHaveBeenCalledWith("root")
    })
})