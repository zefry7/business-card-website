import { render, screen } from "@testing-library/react";
import SizeWindow from "../../components/size-window";


describe("Заглушка для маленьких экранов", () => {

    it("рендер компонента", () => {
        let renderer = render(<SizeWindow />)

        expect(renderer.container).toMatchSnapshot();
    })

    it("с корректным текстом", async () => {
        expect.assertions(1)
        render(<SizeWindow />)

        await screen.findByText("Сайт не поддерживает разрешение экрана вашего устройства.")

        expect(screen.findByText("Сайт не поддерживает разрешение экрана вашего устройства.")).toBeDefined();
    })
})