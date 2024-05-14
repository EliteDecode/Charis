import axios from "axios";
import { API_URL } from "../Api";

const getOrders = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/user/${userId}/orders`, config);

  if (response.data) {
    localStorage.setItem("chariz_user_orders", JSON.stringify(response.data));
  }

  return response.data;
};

const checkout = async (token, checkoutDetails) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${API_URL}/checkout`,
    checkoutDetails,
    config
  );

  return response.data;
};

// const getOrdersById = async (token, id) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const response = await axios.get(`${API_URL}/project/${id}`, config);
//   return response.data;
// };

const editOrder = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}/order/${data.orderId}`,
    data,
    config
  );
  return response.data;
};

// const deleteGallery = async (token, id) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const response = await axios.delete(`${API_URL}/gallery/${id}`, config);
//   return response.data;
// };

const ordersService = {
  getOrders,
  editOrder,
  checkout,
};

export default ordersService;
