



import { notFound } from "next/navigation";
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import TopNav from "@/components/nav";  // Correct import

// Helper to build image URLs from Sanity
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source).url();
}

// Function to fetch all category slugs for generating static paths
export async function generateStaticParams() {
    const categories = await client.fetch(
        `*[_type == "category"]{ "slug": slug.current }`
    );
    return categories.map((category: { slug: string }) => ({
        slug: category.slug,
    }));
}

// Function to fetch data for a specific category
async function getCategoryData(slug: string) {
    const query = `*[_type == "category" && slug.current == $slug][0] {
        title,
        "products": *[_type == "product" && references(^._id)] {
            _id,
            name,
            description,
            price,
            image,
            slug,
            category->{title}
        }
    }`;

    const data = await client.fetch(query, { slug });
    return data;
}

// Category Page Component
export default async function CategoryPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;

    if (!slug) {
        return notFound();
    }

    // Fetch category data with error handling
    let data;
    try {
        data = await getCategoryData(slug);
    } catch (error) {
        console.error("Error fetching category data:", error);
        return notFound(); // Show 404 if fetching fails
    }

    if (!data || !data.products.length) {
        return notFound(); // Return 404 if no products are found
    }

    const { title, products } = data;

    return (
        <div>
            {/* Top Navigation Bar */}
            <TopNav />

            <div className="container mx-auto py-8 px-4">
                {/* Category Title - Dynamically displaying category name */}
                <h1 className="text-4xl font-bold mb-6 text-[#2a254b] text-center sm:text-left">
                    {title ? `${title} Products` : "Category Products"}
                </h1>

                {/* Category Description - New h1 for product descriptions */}
                <h2 className="text-2xl font-medium text-gray-700 mb-6 text-center sm:text-left">
                    Explore a variety of products in this category. Click "More Info" for detailed product descriptions and pricing.
                </h2>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product: any) => (
                        <div
                            key={product._id}
                            className="border p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col"
                        >
                            {/* Product Image */}
                            <div className="w-full h-[300px] flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                                <Image
                                    src={urlFor(product.image)}
                                    alt={product.name}
                                    width={400}
                                    height={300}
                                    className="object-cover"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="flex flex-col mt-4 flex-grow">
                                <h2 className="text-lg font-semibold text-[#2a254b]">
                                    {product.name}
                                </h2>
                                <p className="text-gray-600 mt-2">{product.description}</p>
                                <p className="font-bold text-[#2a254b] mt-2">
                                    €{product.price}
                                </p>
                            </div>

                            {/* More Info Button */}
                            <div className="mt-auto flex justify-center">
                                <Link
                                    key={product._id}
                                    href={`/productSanity/${product._id}`}
                                    passHref
                                    className="px-6 py-2 text-center text-white bg-[#2A254B] rounded-lg hover:bg-blue-600 transition duration-300 w-full max-w-xs"
                                >
                                    More Info
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
