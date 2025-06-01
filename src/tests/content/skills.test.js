import { screen } from "@testing-library/react"
import React from "react";
import '@testing-library/jest-dom';
import Skills from "../../content/Main/Skills/Skills";
import { renderComponent } from "../helperTest/renderComponent";

describe("Страница Навыки:", () => {
    const mockUseState = jest.fn()

    beforeEach(() => {
        jest.resetAllMocks()
        jest.restoreAllMocks()
        jest.useFakeTimers()
        jest.spyOn(React, "useState").mockImplementation(init => [init, mockUseState])
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it("рендер компонента", () => {
        expect(renderComponent(<Skills />).container).toMatchSnapshot()
    })

    it("отображение навыков", async () => {
        const list = ["HTML", "CSS", "Tailwind", "React", "Redux", "JavaScript", "SASS", "TypeScript", "Webpack", "Git", "REST API", "Prettier"];
        expect.assertions(list.length)
        renderComponent(<Skills />)

        for (let x of list) {
            expect(await screen.findByText(x)).toBeInTheDocument()
        }
    })

    it("при page равном 2", async () => {
        expect.assertions(1)
        renderComponent(<Skills />, { page: 2 })

        expect(mockUseState).toHaveBeenCalledWith(2)
    })

    it("при page равном другому значению", () => {
        expect.assertions(1)
        renderComponent(<Skills />, { page: 3 })

        jest.runAllTimers()

        expect(mockUseState).toHaveBeenLastCalledWith(3)
    })
})