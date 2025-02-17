import ProductList from '@/components/shared/product/product-list'

import {
  getLatestProducts,
  getFeaturedProducts,
} from '@/lib/actions/product.actions'
/* const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
 */
import ProductCarousel from '@/components/shared/product/product-carousel'
import ViewAllProductsButton from '@/components/view-all-products-button'
const HomePage = async () => {
  const latestProducts = await getLatestProducts()
  const featuredProducts = await getFeaturedProducts()
  console.log(featuredProducts)

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      <ViewAllProductsButton />
    </>
  )
}

export default HomePage
