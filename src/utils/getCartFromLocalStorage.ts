export const getCartFromLs=() => {
    const data = localStorage.getItem('cart')
    return data ? JSON.parse(data) : []
}

export const getSumFromLs=() => {
    const sum = localStorage.getItem('sum')
    return sum ? JSON.parse(sum) : 0
}

export const getTotalCountFromLs=() => {
    const count = localStorage.getItem('TotalCount')
    return count ? JSON.parse(count) : 0
}
