export const fetchProducts = async (category: string, limit: number) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}?limit=${limit}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};
