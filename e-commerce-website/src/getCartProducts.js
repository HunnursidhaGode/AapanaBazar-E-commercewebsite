export const getCartProductFromLs = () => {
  try {
    const data = localStorage.getItem("CartproductLs");
    if (!data) return [];
    return JSON.parse(data);
  } catch (error) {
    localStorage.removeItem("CartproductLs");
    return [];
  }
};
