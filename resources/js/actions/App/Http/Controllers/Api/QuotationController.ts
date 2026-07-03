import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\QuotationController::index
* @see app/Http/Controllers/Api/QuotationController.php:13
* @route '/api/quotation'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/quotation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\QuotationController::index
* @see app/Http/Controllers/Api/QuotationController.php:13
* @route '/api/quotation'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QuotationController::index
* @see app/Http/Controllers/Api/QuotationController.php:13
* @route '/api/quotation'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::index
* @see app/Http/Controllers/Api/QuotationController.php:13
* @route '/api/quotation'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::index
* @see app/Http/Controllers/Api/QuotationController.php:13
* @route '/api/quotation'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::index
* @see app/Http/Controllers/Api/QuotationController.php:13
* @route '/api/quotation'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::index
* @see app/Http/Controllers/Api/QuotationController.php:13
* @route '/api/quotation'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Api\QuotationController::store
* @see app/Http/Controllers/Api/QuotationController.php:21
* @route '/api/quotation'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/quotation',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\QuotationController::store
* @see app/Http/Controllers/Api/QuotationController.php:21
* @route '/api/quotation'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QuotationController::store
* @see app/Http/Controllers/Api/QuotationController.php:21
* @route '/api/quotation'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::store
* @see app/Http/Controllers/Api/QuotationController.php:21
* @route '/api/quotation'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::store
* @see app/Http/Controllers/Api/QuotationController.php:21
* @route '/api/quotation'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\QuotationController::show
* @see app/Http/Controllers/Api/QuotationController.php:29
* @route '/api/quotation/{quotation}'
*/
export const show = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/quotation/{quotation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\QuotationController::show
* @see app/Http/Controllers/Api/QuotationController.php:29
* @route '/api/quotation/{quotation}'
*/
show.url = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quotation: args }
    }

    if (Array.isArray(args)) {
        args = {
            quotation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        quotation: args.quotation,
    }

    return show.definition.url
            .replace('{quotation}', parsedArgs.quotation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QuotationController::show
* @see app/Http/Controllers/Api/QuotationController.php:29
* @route '/api/quotation/{quotation}'
*/
show.get = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::show
* @see app/Http/Controllers/Api/QuotationController.php:29
* @route '/api/quotation/{quotation}'
*/
show.head = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::show
* @see app/Http/Controllers/Api/QuotationController.php:29
* @route '/api/quotation/{quotation}'
*/
const showForm = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::show
* @see app/Http/Controllers/Api/QuotationController.php:29
* @route '/api/quotation/{quotation}'
*/
showForm.get = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::show
* @see app/Http/Controllers/Api/QuotationController.php:29
* @route '/api/quotation/{quotation}'
*/
showForm.head = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Api\QuotationController::update
* @see app/Http/Controllers/Api/QuotationController.php:37
* @route '/api/quotation/{quotation}'
*/
export const update = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/quotation/{quotation}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\QuotationController::update
* @see app/Http/Controllers/Api/QuotationController.php:37
* @route '/api/quotation/{quotation}'
*/
update.url = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quotation: args }
    }

    if (Array.isArray(args)) {
        args = {
            quotation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        quotation: args.quotation,
    }

    return update.definition.url
            .replace('{quotation}', parsedArgs.quotation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QuotationController::update
* @see app/Http/Controllers/Api/QuotationController.php:37
* @route '/api/quotation/{quotation}'
*/
update.put = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::update
* @see app/Http/Controllers/Api/QuotationController.php:37
* @route '/api/quotation/{quotation}'
*/
update.patch = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::update
* @see app/Http/Controllers/Api/QuotationController.php:37
* @route '/api/quotation/{quotation}'
*/
const updateForm = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::update
* @see app/Http/Controllers/Api/QuotationController.php:37
* @route '/api/quotation/{quotation}'
*/
updateForm.put = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::update
* @see app/Http/Controllers/Api/QuotationController.php:37
* @route '/api/quotation/{quotation}'
*/
updateForm.patch = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Api\QuotationController::destroy
* @see app/Http/Controllers/Api/QuotationController.php:45
* @route '/api/quotation/{quotation}'
*/
export const destroy = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/quotation/{quotation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\QuotationController::destroy
* @see app/Http/Controllers/Api/QuotationController.php:45
* @route '/api/quotation/{quotation}'
*/
destroy.url = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quotation: args }
    }

    if (Array.isArray(args)) {
        args = {
            quotation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        quotation: args.quotation,
    }

    return destroy.definition.url
            .replace('{quotation}', parsedArgs.quotation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QuotationController::destroy
* @see app/Http/Controllers/Api/QuotationController.php:45
* @route '/api/quotation/{quotation}'
*/
destroy.delete = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::destroy
* @see app/Http/Controllers/Api/QuotationController.php:45
* @route '/api/quotation/{quotation}'
*/
const destroyForm = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QuotationController::destroy
* @see app/Http/Controllers/Api/QuotationController.php:45
* @route '/api/quotation/{quotation}'
*/
destroyForm.delete = (args: { quotation: string | number } | [quotation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const QuotationController = { index, store, show, update, destroy }

export default QuotationController