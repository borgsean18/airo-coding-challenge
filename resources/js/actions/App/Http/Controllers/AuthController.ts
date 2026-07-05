import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:9
* @route '/api/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/api/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:9
* @route '/api/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:9
* @route '/api/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:9
* @route '/api/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:9
* @route '/api/register'
*/
registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

register.form = registerForm

const AuthController = { register }

export default AuthController