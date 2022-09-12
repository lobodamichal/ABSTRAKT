const findProduct = (products, key, value) => {
    return products.find(x => x[key] === value)
}

export default findProduct