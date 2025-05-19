import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WrapperSwipper from ".";
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';



describe("Основная обёртка сайта:", () => {
    let renderer
    const mockStore = configureStore([]);

    it("рендер содержания", async () => {
        const store = mockStore({ globalReducer: { page: 1 } })

        renderer = render(
            <Provider store={store}>
                <WrapperSwipper />
            </Provider>
        )

        await screen.findByTestId("main");

        expect(screen.findByTestId("main")).toBeDefined();
    })

    it("исчезновение кнопок при клике", async () => {
        expect.assertions(4);
        jest.useFakeTimers();
        const store = mockStore({ globalReducer: { page: 1 } })

        renderer = render(
            <Provider store={store}>
                <WrapperSwipper />
            </Provider>
        )

        const leftArrow = await screen.findByTestId("left-arrow");
        const rightArrow = await screen.findByTestId("right-arrow");
        const list = [leftArrow, rightArrow]

        for (let elem of list) {
            act(() => {
                userEvent.click(elem);
            })

            expect(elem).toHaveClass("wrapper-swiper__arrow_move");

            act(() => {
                jest.advanceTimersByTime(500);
            });

            expect(elem).not.toHaveClass("wrapper-swiper__arrow_move");
        }

        jest.useRealTimers();
    })

    it("появление левой кнопки на страницах кроме первой", async () => {
        expect.assertions(7);
        let store = mockStore({ globalReducer: { page: 1 } });

        renderer = render(
            <Provider store={store}>
                <WrapperSwipper />
            </Provider>
        );

        let leftArrow = await screen.findByTestId("left-arrow");

        expect(leftArrow).toHaveClass("wrapper-swiper__arrow_disibled");

        for (let i = 2; i <= 4; ++i) {
            store = mockStore({ globalReducer: { page: i } });
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

    it("появление правой кнопки на страницах кроме последней", async () => {
        expect.assertions(7);
        let store = mockStore({ globalReducer: { page: 4 } });

        renderer = render(
            <Provider store={store}>
                <WrapperSwipper />
            </Provider>
        );

        let rightArrow = await screen.findByTestId("right-arrow");

        expect(rightArrow).toHaveClass("wrapper-swiper__arrow_disibled");

        for (let i = 1; i <= 3; ++i) {
            store = mockStore({ globalReducer: { page: i } });
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
})