import { act, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store";
import React from "react";
import '@testing-library/jest-dom';
import Skills from "../../content/Main/Skills/Skills";

const mockStore = configureStore([])

const funcRender = (data) => {
    const store = mockStore(data === undefined ? { globalReducer: { page: 2 } } : data)

    return render(<Provider store={store}>
        <Skills />
    </Provider>)
}

jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn()
}))

describe("Страница Навыки:", () => {
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

    it("отображение навыков", async () => {
        const list = ["HTML", "CSS", "Tailwind", "React", "Redux", "JavaScript", "SASS", "TypeScript", "Webpack", "Git", "REST API", "Prettier"];
        expect.assertions(list.length)

        funcRender()

        for (let x of list) {
            let skill = await screen.findByText(x)

            expect(skill).toBeInTheDocument()
        }
    })

    describe("Поведение при разных значения page:", () => {

        it("при page равном 2", async () => {
            expect.assertions(1)

            funcRender()

            expect(useStateMock).toHaveBeenLastCalledWith(2)
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