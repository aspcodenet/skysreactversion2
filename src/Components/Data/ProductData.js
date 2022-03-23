const url = 'http://localhost:4000/products';

export const fetchProducts = async () => {
  const response = await fetch(url)
  const json = await response.json()

  return  json
}