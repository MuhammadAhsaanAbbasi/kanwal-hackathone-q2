"use client";  // This tells Next.js that this component uses client-side hooks like useRouter

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';  // Use next/navigation instead of next/router
import { useState, useEffect } from 'react';
import { client } from '../sanity/lib/client'; // Import your sanity client

interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  slug: string;
}

interface ProductClerkProps {
  addToCart: (product: Product) => void;
}

const ProductClerk: React.FC<ProductClerkProps> = ({ addToCart }) => {
  const { user } = useUser(); // Access user data from Clerk
  const router = useRouter();  // useRouter is available now
  const [products, setProducts] = useState<Product[]>([]); // State to store products

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{_id, name, price, image{asset->{_id, url}}, slug}`;
      try {
        const productsData = await client.fetch(query); // Fetch data from Sanity
        setProducts(productsData); // Update state with fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    fetchProducts();
  }, []); // Empty dependency array to run once on component mount

  const handleAddToCart = (product: Product) => {
    if (!user) {
      // If user is not logged in, redirect to sign-in page
      router.push('/signin');
    } else {
      addToCart(product);  // Add product to the cart
    }
  };

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <img src={product.image.asset.url} alt={product.name} className="product-image" />
            <button onClick={() => handleAddToCart(product)}>
              {user ? 'Add to Cart' : 'Sign In to Add to Cart'}
            </button>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default ProductClerk;
