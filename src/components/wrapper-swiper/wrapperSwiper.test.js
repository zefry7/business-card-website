import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WrapperSwipper from ".";
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import React from "react";

const mockStore = configureStore([]);

const funcRender = (data) => {
    const store = mockStore(data == undefined ? { globalReducer: { page: 1 } } : data)

    return render(
        <Provider store={store}>
            <WrapperSwipper />
        </Provider>
    )
}

jest.mock("react", () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

describe("Основная обёртка сайта:", () => {
    let renderer
    const setActiveMock = jest.fn();

    beforeEach(() => {
        jest.restoreAllMocks();
        React.useState.mockImplementation(init => [init, setActiveMock]);
    })

    it("рендер компонента", async () => {
        renderer = funcRender()

        expect(renderer.container).toMatchSnapshot();
    })

    it("исчезновение кнопок при клике", async () => {
        expect.assertions(4);
        jest.useFakeTimers();
        funcRender()

        const leftArrow = await screen.findByTestId("left-arrow");
        const rightArrow = await screen.findByTestId("right-arrow");
        const list = [leftArrow, rightArrow]

        for (let elem of list) {
            act(() => {
                userEvent.click(elem);
            })

            expect(setActiveMock).toHaveBeenCalledWith(true);

            act(() => {
                jest.advanceTimersByTime(500);
            });

            expect(setActiveMock).toHaveBeenCalledWith(false);
        }

        jest.useRealTimers();
    })

    it("отсутствие левой кнопки на первой странице", async () => {
        expect.assertions(1);
        funcRender();

        let leftArrow = await screen.findByTestId("left-arrow");

        expect(leftArrow).toHaveClass("wrapper-swiper__arrow_disibled");
    })

    it("появление левой кнопки на страницах кроме первой", async () => {
        expect.assertions(6);
        renderer = funcRender()

        let leftArrow = await screen.findByTestId("left-arrow");

        for (let i = 2; i <= 4; ++i) {
            let store = mockStore({ globalReducer: { page: i } });

            render(
                <Provider store={store}>
                    <WrapperSwipper />
                </Provider>,
                { container: renderer.container }
            );

            expect(leftArrow).not.toHaveClass("wrapper-swiper__arrow_disibled");
            expect(store.getState().globalReducer.page).toEqual(i);
        }
    })

    it("отсутствие правой кнопки на четвёртой странице", async () => {
        expect.assertions(1);
        funcRender({ globalReducer: { page: 4 } });

        let rightArrow = await screen.findByTestId("right-arrow");

        expect(rightArrow).toHaveClass("wrapper-swiper__arrow_disibled");
    })

    it("появление правой кнопки на страницах кроме последней", async () => {
        expect.assertions(6);
        let renderer = funcRender();

        let rightArrow = await screen.findByTestId("right-arrow");

        for (let i = 1; i <= 3; ++i) {
            let store = mockStore({ globalReducer: { page: i } });

            render(
                <Provider store={store}>
                    <WrapperSwipper />
                </Provider>,
                { container: renderer.container }
            );

            expect(rightArrow).not.toHaveClass("wrapper-swiper__arrow_disibled");
            expect(store.getState().globalReducer.page).toEqual(i);
        }
    })

    it("добавление события нажатия для перехода между страницами", () => {
        jest.spyOn(window, "addEventListener")

        funcRender();

        expect(window.addEventListener).toHaveBeenCalledWith("keydown", expect.any(Function))
    })

    it("очистка события нажатия для перехода между страницами", () => {
        jest.spyOn(window, "removeEventListener")

        renderer = funcRender();

        renderer.unmount()

        expect(window.removeEventListener).toHaveBeenCalledWith("keydown", expect.any(Function))
    })

    it("переход на страницы влево при нажатии на А и Левую стрелочку", () => {
        funcRender();

        act(() => {
            const leftArrowEvent = new KeyboardEvent('keydown', { keyCode: 37 });
            const AKeyEvent = new KeyboardEvent('keydown', { keyCode: 65 });
            window.dispatchEvent(leftArrowEvent);
            window.dispatchEvent(AKeyEvent);
        });

        expect(setActiveMock).toHaveBeenCalledTimes(2);
        expect(setActiveMock).toHaveBeenCalledWith(true)
    })

    it("переход на страницы влево при нажатии на D и Правую стрелочку", () => {
        funcRender();

        act(() => {
            const rightArrowEvent = new KeyboardEvent('keydown', { keyCode: 39 });
            const DKeyEvent = new KeyboardEvent('keydown', { keyCode: 68 });
            window.dispatchEvent(rightArrowEvent);
            window.dispatchEvent(DKeyEvent);
        });

        expect(setActiveMock).toHaveBeenCalledTimes(2);
        expect(setActiveMock).toHaveBeenCalledWith(true)
    })
})