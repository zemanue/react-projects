export const saveStatsToLocalStorage = (stats) => {
    window.localStorage.setItem('stats', JSON.stringify(stats))
}

export const resetStatsStorage = () => {
    window.localStorage.removeItem('stats')
}