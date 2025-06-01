import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WrapperSwipper from "../../components/wrapper-swiper";
import '@testing-library/jest-dom';
import React from "react";
import { renderComponent } from "../helperTest/renderComponent";

describe("Основная обёртка сайта:", () => {
    let renderer
    const setActiveMock = jest.fn();

    beforeEach(() => {
        jest.restoreAllMocks();
        jest.resetAllMocks()
        jest.useFakeTimers();
        jest.spyOn(React, "useState").mockImplementation(init => [init, setActiveMock]);
    })

    afterEach(() => {
        jest.useRealTimers();
    })

    it("рендер компонента", async () => {
        expect(renderComponent(<WrapperSwipper />).container).toMatchSnapshot();
    })

    it("исчезновение кнопок при клике", async () => {
        expect.assertions(4);
        renderComponent(<WrapperSwipper />)

        const list = [await screen.findByTestId("left-arrow"), await screen.findByTestId("right-arrow")]
        for (let elem of list) {
            userEvent.click(elem);

            expect(setActiveMock).toHaveBeenCalledWith(true);

            jest.runAllTimers()

            expect(setActiveMock).toHaveBeenCalledWith(false);
        }
    })

    it("отсутствие левой кнопки на первой странице", async () => {
        expect.assertions(1);
        renderComponent(<WrapperSwipper />)

        expect(await screen.findByTestId("left-arrow")).toHaveClass("wrapper-swiper__arrow_disibled");
    })

    it("появление левой кнопки на страницах кроме первой", async () => {
        expect.assertions(3);
        renderer = renderComponent(<WrapperSwipper />)

        for (let i = 2; i <= 4; ++i) {
            renderComponent(<WrapperSwipper />, { container: renderer.container, page: i })

            expect(await screen.findByTestId("left-arrow")).not.toHaveClass("wrapper-swiper__arrow_disibled");
        }
    })

    it("отсутствие правой кнопки на четвёртой странице", async () => {
        expect.assertions(1);
        renderComponent(<WrapperSwipper />, { page: 4 })

        expect(await screen.findByTestId("right-arrow")).toHaveClass("wrapper-swiper__arrow_disibled");
    })

    it("появление правой кнопки на страницах кроме последней", async () => {
        expect.assertions(3);
        renderer = renderComponent(<WrapperSwipper />)

        for (let i = 1; i <= 3; ++i) {
            renderComponent(<WrapperSwipper />, { container: renderer.container, page: i })

            expect(await screen.findByTestId("right-arrow")).not.toHaveClass("wrapper-swiper__arrow_disibled");
        }
    })

    it("добавление события нажатия для перехода между страницами", () => {
        expect.assertions(1);
        jest.spyOn(window, "addEventListener")
        renderComponent(<WrapperSwipper />)

        expect(window.addEventListener).toHaveBeenCalledWith("keydown", expect.any(Function))
    })

    it("очистка события нажатия для перехода между страницами", () => {
        expect.assertions(1);
        jest.spyOn(window, "removeEventListener")
        renderer = renderComponent(<WrapperSwipper />);

        renderer.unmount()

        expect(window.removeEventListener).toHaveBeenCalledWith("keydown", expect.any(Function))
    })

    it("переход на страницы влево при нажатии на А и Левую стрелочку", () => {
        expect.assertions(2);
        renderComponent(<WrapperSwipper />)

        window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 37 }));
        window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 65 }));

        expect(setActiveMock).toHaveBeenCalledTimes(2);
        expect(setActiveMock).toHaveBeenCalledWith(true)
    })

    it("переход на страницы влево при нажатии на D и Правую стрелочку", () => {
        expect.assertions(2);
        renderComponent(<WrapperSwipper />)

        window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 39 }));
        window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 68 }));

        expect(setActiveMock).toHaveBeenCalledTimes(2);
        expect(setActiveMock).toHaveBeenCalledWith(true)
    })
})