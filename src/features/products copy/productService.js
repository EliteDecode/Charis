import axios from "axios";
import { API_URL } from "../Api";

const addProduct = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_URL}/product`, data, config);

  return response.data;
};

const getProducts = async (token) => {
  const response = await axios.get(`${API_URL}/products`);
  if (response.data) {
    localStorage.setItem("chariz_products", JSON.stringify(response.data));
  }
  return response.data;
};

const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/product/${id}`);
  return response.data;
};

const deleteProduct = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/product/${id}`, config);
  return response.data;
};

const editProduct = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}/product/${data.productId}`,
    data,
    config
  );
  return response.data;
};

const getProductTags = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/product-tags`, config);

  if (response.data) {
    localStorage.setItem("chariz_product_tags", JSON.stringify(response.data));
  }

  return response.data;
};

const getProductCategories = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/product-categories`, config);

  if (response.data) {
    localStorage.setItem(
      "chariz_product_categories",
      JSON.stringify(response.data)
    );
  }

  return response.data;
};

const addProductTags = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_URL}/product-tag`, data, config);
  return response.data;
};

const editProductTags = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}/product-tag/${data.id}`,
    data,
    config
  );
  return response.data;
};

const addProductCategory = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${API_URL}/product-category`,
    data,
    config
  );
  return response.data;
};

const editProductCategory = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `${API_URL}/product-category/${data.id}`,
    data,
    config
  );
  return response.data;
};

const deleteProductCategory = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(
    `${API_URL}/product-category/${id}`,
    config
  );
  return response.data;
};

const deleteProductTags = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/product-tag/${id}`, config);
  return response.data;
};

const productService = {
  addProduct,
  getProducts,
  editProduct,
  deleteProduct,
  editProductTags,
  addProductTags,
  editProductCategory,
  getProductTags,
  getProductCategories,
  addProductCategory,
  deleteProductCategory,
  deleteProductTags,
  getProductById,
};

export default productService;
