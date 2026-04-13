/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import Reviews from './components/Reviews';
import RelatedProducts from './components/RelatedProducts';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* Tabs Section */}
        <ProductTabs />

        {/* Reviews Section */}
        <Reviews />

        {/* Related Products Section */}
        <RelatedProducts />
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

