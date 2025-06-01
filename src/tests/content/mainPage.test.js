import { screen } from "@testing-library/react"
import React from "react"
import MainPage from "../../content/Main/MainPage"
import { renderComponent } from "../helperTest/renderComponent"


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

    beforeEach(() => {
        jest.resetAllMocks()
        jest.restoreAllMocks(); 
    });

    it("изменение состояния при изменении экрана", () => {
        expect.assertions(1)
        jest.spyOn(React, "useState").mockImplementation(init => [init, useStateMock]);
        mockMatchMedia(false)
        renderComponent(<MainPage />)

        changeCallback({ matches: true })

        expect(useStateMock).toHaveBeenLastCalledWith(1)
    })

    it("рендер основного контента", () => {
        mockMatchMedia(false)
        expect(renderComponent(<MainPage />).container).toMatchSnapshot()
    })

    it("рендер заглушки", async () => {
        expect.assertions(1)
        mockMatchMedia(true)
        renderComponent(<MainPage />)

        expect(await screen.queryByText("Сайт не поддерживает разрешение экрана вашего устройства.")).toBeDefined()
    })
})