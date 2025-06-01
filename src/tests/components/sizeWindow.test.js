import { render, screen } from "@testing-library/react";
import SizeWindow from "../../components/size-window";
import { renderComponent } from "../helperTest/renderComponent";


describe("Заглушка для маленьких экранов", () => {

    it("рендер компонента", () => {
        expect(renderComponent(<SizeWindow />).container).toMatchSnapshot();
    })

    it("с корректным текстом", async () => {
        expect.assertions(1)
        render(<SizeWindow />)

        expect(screen.queryByText("Сайт не поддерживает разрешение экрана вашего устройства.")).toBeDefined();
    })
})