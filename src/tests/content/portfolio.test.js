import configureStore from "redux-mock-store"
import Portfolio from "../../content/Main/Portfolio/Portfolio"
import { Provider } from "react-redux"
import { render, screen } from "@testing-library/react"
import { act } from "react"
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

    beforeEach(() => {
        jest.resetAllMocks()
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

        funcRender({ globalReducer: { page: 2 } })

        act(() => {
            jest.advanceTimersByTime(300)
        })

        let wrapper = await screen.findByTestId("portfolio")

        expect(wrapper.classList).not.toContain("portfolio_active")

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