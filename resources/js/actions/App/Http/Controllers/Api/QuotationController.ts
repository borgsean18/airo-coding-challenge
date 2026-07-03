import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\QuotationController::calculate
* @see app/Http/Controllers/Api/QuotationController.php:10
* @route '/api/quotation'
*/
export const calculate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: calculate.url(options),
    method: 'post',
})

calculate.definition = {
    methods: ["post"],
    url: '/api/quotation',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\QuotationController::calculate
* @see app/Http/Controllers/Api/QuotationController.php:10
* @route '/api/quotation'
*/
calculate.url = (options?: RouteQueryOptions) => {
    return calculate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QuotationController::calculate
* @see app/Http/Controllers/Api/QuotationController.php:10
* @route '/api/quotation'
*/
calculate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: calculate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::calculate
* @see app/Http/Controllers/Api/QuotationController.php:10
* @route '/api/quotation'
*/
const calculateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: calculate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::calculate
* @see app/Http/Controllers/Api/QuotationController.php:10
* @route '/api/quotation'
*/
calculateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: calculate.url(options),
    method: 'post',
})

calculate.form = calculateForm

const QuotationController = { calculate }

export default QuotationController