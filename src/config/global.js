export const IS_TEST = ['DEV', 'TEST'].includes(import.meta.env.VITE_APP_MODE)
export const PROXY_URL = import.meta.env.VITE_APP_PROXYURL
console.log('是否测试环境', IS_TEST)