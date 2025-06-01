import { screen } from "@testing-library/react"
import About from "../../content/Main/About/About"
import React from "react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { renderComponent } from "../helperTest/renderComponent";

describe("Страница О себе:", () => {
    let useStateMock = jest.fn()

    beforeEach(() => {
        jest.resetAllMocks()
        jest.restoreAllMocks()
        jest.spyOn(React, "useState").mockImplementation(init => [init, useStateMock])
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it("рендер компонента", () => {
        expect(renderComponent(<About />, {}).container).toMatchSnapshot()
    })

    it("наведение мыши на фотографию автора", async () => {
        expect.assertions(1)
        renderComponent(<About />, {})

        let authElement = await screen.findByTestId("auth")
        await userEvent.hover(authElement)

        expect(useStateMock.mock.calls[1][0]).toEqual("active")
    })

    it("отведение мыши на фотографию автора", async () => {
        expect.assertions(1)
        renderComponent(<About />, {})

        let authElement = await screen.findByTestId("auth")
        await userEvent.unhover(authElement)

        expect(useStateMock.mock.calls[1][0]).toEqual("inactive")
    })

    it("начальный класс на элементе с фотографией автора", async () => {
        expect.assertions(1)
        renderComponent(<About />, {})

        let authElement = await screen.findByTestId("auth")

        expect(authElement).toHaveClass("about__auth_inactive")
    })


    describe("Поведение при разных значения page:", () => {
        it("при page равном 1", async () => {
            expect.assertions(1)
            renderComponent(<About />, {})

            expect(useStateMock).toHaveBeenLastCalledWith(1)
        })

        it("при page равном другому значению", () => {
            expect.assertions(1)
            renderComponent(<About />, { page: 3 })

            jest.runAllTimers()

            expect(useStateMock).toHaveBeenLastCalledWith(3)
        })
    })
})