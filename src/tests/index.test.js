import { screen } from "@testing-library/react"
import MainPage from "../content/Main/MainPage"
import "@testing-library/jest-dom"
import { renderComponent } from "./helperTest/renderComponent.js"

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
        renderComponent(<MainPage />)

        expect(await screen.findByText("Frontend")).toBeInTheDocument()
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