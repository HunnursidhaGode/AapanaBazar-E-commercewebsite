export const getCartProductFromLs = () => {
  try {
    const data = localStorage.getItem("CartproductLs");

    // If nothing stored → return empty array
    if (!data) return [];

    const parsed = JSON.parse(data);

    // Must return an array only
    if (!Array.isArray(parsed)) {
      localStorage.removeItem("CartproductLs");
      return [];
    }

    return parsed;
  } catch (error) {
    // Corrupted JSON → reset cart
    console.error("Corrupted cart data, resetting:", error);
    localStorage.removeItem("CartproductLs");
    return [];
  }
};
