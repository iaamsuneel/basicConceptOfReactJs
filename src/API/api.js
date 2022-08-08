import axios from "axios";
export const api = axios.create(
    {
        baseURL: "https://fakestoreapi.com"
    }
);
export const getProduct = () => {
    return api.get("/products")
}
export const getCategories = () => {
    return api.get("/products/categories");
}

export const getProductByCategory = (category) => {
    if (category == "All") {
        return api.get("/products")
    }
    return api.get(`/products/category/${category}`);
}
export const getProductById = (id) => {
    return api.get(`products/${id}`)
}