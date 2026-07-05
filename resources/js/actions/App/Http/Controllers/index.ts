import QuotationController from './QuotationController'
import Settings from './Settings'

const Controllers = {
    QuotationController: Object.assign(QuotationController, QuotationController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers