import Portfolio from "../../content/Main/Portfolio/Portfolio"
import { screen } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"
import { renderComponent } from "../helperTest/renderComponent"

describe("Страница с Портфолио:", () => {
    let mockUseState = jest.fn()

    beforeEach(() => {
        jest.resetAllMocks()
        jest.restoreAllMocks()
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it("рендер компонента", () => {
        expect(renderComponent(<Portfolio />).container).toMatchSnapshot()
    })

    it("при page равном 3", async () => {
        expect.assertions(1)
        renderComponent(<Portfolio />, { page: 3 })

        expect((await screen.findByTestId("portfolio")).classList).toContain("portfolio_active")
    })

    it("при page равном другому значению", () => {
        expect.assertions(1)
        jest.spyOn(React, "useState").mockImplementation(init => [init, mockUseState])
        renderComponent(<Portfolio />, { page: 2 })

        jest.runAllTimers()

        expect(mockUseState).toHaveBeenCalledWith(2)
    })

    it("кликабельность примеров работ", async () => {
        expect.assertions(1)
        renderComponent(<Portfolio />)

        userEvent.click(await screen.findByTestId("project_1"))

        expect((await screen.findByTestId("project_name")).textContent).toContain("Digital Project")
    })
})