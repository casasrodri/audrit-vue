import { isExpired } from "./jwt.js"

export function setToken(token) {
    localStorage.setItem('jwt', token)
}

export function getToken() {
    return localStorage.getItem('jwt')
}

export function removeToken() {
    localStorage.removeItem('jwt')
}

export function isSessionExpired() {
    const token = getToken()
    if (!token) return true

    return isExpired(token)
}

export function irAHome(router) {
    router.push('/')
}


export function verificarSesion(router, route) {
    // console.log('Verificando sesión')
    if (isSessionExpired()) {
        removeToken()
        router.push('/login')
        return
    }

    if (route.name === 'login' || route.name === 'registro') {
        router.push('/')
        return
    }
}

export function verificarSesionPeriodicamente(segundos, router, route) {
    verificarSesion(router, route)
    setInterval(() => verificarSesion(router, route), segundos * 1000)
}
