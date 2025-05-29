import configureStore from "redux-mock-store"
import Portfolio from "../../content/Main/Portfolio/Portfolio"
import { Provider } from "react-redux"
import { act, render, screen } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"


const funcRender = (data) => {
    const mockStore = configureStore([])
    const store = mockStore(data === undefined ? { globalReducer: { page: 3 } } : data)

    return render(<Provider store={store}>
        <Portfolio />
    </Provider>)
}

describe("Страница с Портфолио:", () => {
    let renderer
    let mockUseState = jest.fn()

    afterEach(() => {
        jest.resetAllMocks()
        jest.restoreAllMocks()
    })

    it("рендер компонента", () => {
        expect.assertions(1)
        renderer = funcRender()

        expect(renderer.container).toMatchSnapshot()
    })

    it("при page равном 3", async () => {
        expect.assertions(1)
        funcRender()

        let wrapper = await screen.findByTestId("portfolio")

        expect(wrapper.classList).toContain("portfolio_active")
    })

    it("при page равном другому значению", async () => {
        expect.assertions(1)
        jest.useFakeTimers()
        jest.spyOn(React, "useState").mockImplementation(init => [init, mockUseState])

        funcRender({ globalReducer: { page: 2 } })
        jest.runAllTimers()

        expect(mockUseState).toHaveBeenCalledWith(2)

        jest.useRealTimers()
    })

    it("кликабельность примеров работ", async () => {
        expect.assertions(1)

        funcRender()

        let elemProject = await screen.findByTestId("project_1")

        act(() => {
            userEvent.click(elemProject)
        })

        let wrapper = await screen.findByTestId("project_name")

        expect(wrapper.textContent).toContain("Digital Project")
    })
})