import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\QuotationController::provide_quotation
* @see app/Http/Controllers/Api/QuotationController.php:11
* @route '/api/quotation'
*/
export const provide_quotation = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: provide_quotation.url(options),
    method: 'post',
})

provide_quotation.definition = {
    methods: ["post"],
    url: '/api/quotation',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\QuotationController::provide_quotation
* @see app/Http/Controllers/Api/QuotationController.php:11
* @route '/api/quotation'
*/
provide_quotation.url = (options?: RouteQueryOptions) => {
    return provide_quotation.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QuotationController::provide_quotation
* @see app/Http/Controllers/Api/QuotationController.php:11
* @route '/api/quotation'
*/
provide_quotation.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: provide_quotation.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::provide_quotation
* @see app/Http/Controllers/Api/QuotationController.php:11
* @route '/api/quotation'
*/
const provide_quotationForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: provide_quotation.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::provide_quotation
* @see app/Http/Controllers/Api/QuotationController.php:11
* @route '/api/quotation'
*/
provide_quotationForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: provide_quotation.url(options),
    method: 'post',
})

provide_quotation.form = provide_quotationForm

const QuotationController = { provide_quotation }

export default QuotationController