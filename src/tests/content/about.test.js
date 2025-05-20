import { act, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import About from "../../content/Main/About/About"
import configureStore from "redux-mock-store";
import React from "react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const mockStore = configureStore([])

const funcRender = (data) => {
    const store = mockStore(data === undefined ? { globalReducer: { page: 1 } } : data)

    return render(<Provider store={store}>
        <About />
    </Provider>)
}

jest.mock("react", () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

describe("Страница О себе:", () => {
    let renderer
    let useStateMock = jest.fn()

    beforeEach(() => {
        React.useState.mockImplementation(init => [init, useStateMock])
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("рендер компонента", () => {
        renderer = funcRender()

        expect(renderer.container).toMatchSnapshot()
    })

    it("наведение мыши на фотографию автора", async () => {
        expect.assertions(1)
        funcRender()
        let authElement = await screen.findByTestId("auth")

        await userEvent.hover(authElement)

        expect(useStateMock.mock.calls[1][0]).toEqual("active")
    })

    it("отведение мыши на фотографию автора", async () => {
        expect.assertions(1)
        funcRender()

        let authElement = await screen.findByTestId("auth")
        await userEvent.unhover(authElement)

        expect(useStateMock.mock.calls[1][0]).toEqual("inactive")
    })

    it("начальный класс на элементе с фотографией автора", async () => {
        expect.assertions(1)
        funcRender()

        let authElement = await screen.findByTestId("auth")

        expect(authElement).toHaveClass("about__auth_inactive")
    })


    describe("Поведение при разных значения page:", () => {

        it("при page равном 1", async () => {
            expect.assertions(1)

            funcRender()

            expect(useStateMock).toHaveBeenLastCalledWith(1)
        })

        it("при page равном другому значению", async () => {
            expect.assertions(1)
            jest.useFakeTimers()
            funcRender({ globalReducer: { page: 3 } })

            act(() => {
                jest.advanceTimersByTime(300)
            })

            expect(useStateMock).toHaveBeenLastCalledWith(3)

            jest.useRealTimers()
        })
    })
})