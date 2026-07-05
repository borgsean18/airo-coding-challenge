import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\QuotationController::greeting
* @see app/Http/Controllers/QuotationController.php:12
* @route '/api/quotation'
*/
export const greeting = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: greeting.url(options),
    method: 'get',
})

greeting.definition = {
    methods: ["get","head"],
    url: '/api/quotation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuotationController::greeting
* @see app/Http/Controllers/QuotationController.php:12
* @route '/api/quotation'
*/
greeting.url = (options?: RouteQueryOptions) => {
    return greeting.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuotationController::greeting
* @see app/Http/Controllers/QuotationController.php:12
* @route '/api/quotation'
*/
greeting.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: greeting.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuotationController::greeting
* @see app/Http/Controllers/QuotationController.php:12
* @route '/api/quotation'
*/
greeting.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: greeting.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\QuotationController::greeting
* @see app/Http/Controllers/QuotationController.php:12
* @route '/api/quotation'
*/
const greetingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: greeting.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuotationController::greeting
* @see app/Http/Controllers/QuotationController.php:12
* @route '/api/quotation'
*/
greetingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: greeting.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuotationController::greeting
* @see app/Http/Controllers/QuotationController.php:12
* @route '/api/quotation'
*/
greetingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: greeting.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

greeting.form = greetingForm

/**
* @see \App\Http\Controllers\QuotationController::provide_quotation
* @see app/Http/Controllers/QuotationController.php:17
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
* @see \App\Http\Controllers\QuotationController::provide_quotation
* @see app/Http/Controllers/QuotationController.php:17
* @route '/api/quotation'
*/
provide_quotation.url = (options?: RouteQueryOptions) => {
    return provide_quotation.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuotationController::provide_quotation
* @see app/Http/Controllers/QuotationController.php:17
* @route '/api/quotation'
*/
provide_quotation.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: provide_quotation.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\QuotationController::provide_quotation
* @see app/Http/Controllers/QuotationController.php:17
* @route '/api/quotation'
*/
const provide_quotationForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: provide_quotation.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\QuotationController::provide_quotation
* @see app/Http/Controllers/QuotationController.php:17
* @route '/api/quotation'
*/
provide_quotationForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: provide_quotation.url(options),
    method: 'post',
})

provide_quotation.form = provide_quotationForm

const QuotationController = { greeting, provide_quotation }

export default QuotationController