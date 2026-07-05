import AuthController from './AuthController'
import QuotationController from './QuotationController'
import Settings from './Settings'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    QuotationController: Object.assign(QuotationController, QuotationController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers