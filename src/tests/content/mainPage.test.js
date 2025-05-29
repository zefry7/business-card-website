import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import MainPage from "../../content/Main/MainPage"
import configureStore from "redux-mock-store"
import React from "react"

const renderComponent = (page) => {
    const mockStore = configureStore([])
    const store = mockStore({ globalReducer: { page: page == undefined ? 1 : page } })

    return render(<Provider store={store}>
        <MainPage />
    </Provider>)
}


describe("Компонент MainPage", () => {
    let changeCallback
    let useStateMock = jest.fn()

    const mockMatchMedia = (flag) => {
        window.matchMedia = jest.fn().mockImplementation(query => ({
            matches: flag,
            media: query,
            addEventListener: jest.fn((event, callback) => {
                if (event === 'change') {
                    changeCallback = callback;
                }
            }),
            removeEventListener: jest.fn(),
        }));
    }

    afterEach(() => {
        jest.resetAllMocks()
        jest.restoreAllMocks(); 
    });

    it("изменение состояния при изменении экрана", () => {
        expect.assertions(1)
        jest.spyOn(React, "useState").mockImplementation(init => [init, useStateMock]);
        mockMatchMedia(false)
        renderComponent()

        changeCallback({ matches: true })

        expect(useStateMock).toHaveBeenLastCalledWith(1)
    })

    it("рендер основного контента", () => {
        mockMatchMedia(false)
        expect(renderComponent().container).toMatchSnapshot()
    })

    it("рендер заглушки", async () => {
        expect.assertions(1)
        mockMatchMedia(true)
        renderComponent()

        let element = await screen.findByText("Сайт не поддерживает разрешение экрана вашего устройства.")

        expect(element).toBeDefined()
    })
})