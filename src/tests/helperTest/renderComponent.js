import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"

export const renderComponent = (component, options) => {
    const mockStoreCreater = configureStore([])
    const store = mockStoreCreater({
        globalReducer: {
            page: options?.page || 1
        }
    })

    return render(
        <Provider store={store}>
            {component}
        </Provider>,
        options?.container && {container: options?.container}
    )
}