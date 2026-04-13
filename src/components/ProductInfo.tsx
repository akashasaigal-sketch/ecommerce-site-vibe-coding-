import { Star, ShoppingBag, MessageCircle, Truck, CreditCard } from 'lucide-react';

export default function ProductInfo() {
  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold tracking-wide">NEW ARRIVAL</span>
          <div className="flex items-center gap-1 text-secondary">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold">4.8</span>
            <span className="text-on-surface-variant text-sm font-normal">(124 Reviews)</span>
          </div>
        </div>
        <h1 className="text-4xl lg:text-5xl font-headline font-extrabold text-on-surface leading-tight tracking-tight">CloudWalker Pro X1</h1>
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-secondary font-medium">Rs.</span>
          <span className="text-3xl font-bold text-on-surface">18,500</span>
        </div>
        <p className="text-on-surface-variant leading-relaxed">
          Engineered for the modern urban athlete. Features our proprietary Atmosphere™ cushioning technology and a breathable mesh upper designed for Pakistan's humid summers.
        </p>
      </div>

      {/* Variations */}
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-3">Select Color</h3>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-red-600 ring-2 ring-offset-2 ring-primary transition-all"></button>
            <button className="w-10 h-10 rounded-full bg-slate-900 ring-2 ring-offset-2 ring-transparent hover:ring-outline-variant transition-all"></button>
            <button className="w-10 h-10 rounded-full bg-slate-200 ring-2 ring-offset-2 ring-transparent hover:ring-outline-variant transition-all"></button>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Select Size (EU)</h3>
            <button className="text-xs text-primary font-bold hover:underline">Size Guide</button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['40', '41', '42', '43'].map((size) => (
              <button 
                key={size}
                className={`py-3 rounded-xl font-medium transition-all ${size === '41' ? 'bg-primary-container text-on-primary font-bold shadow-md shadow-primary/20' : 'bg-white border border-outline-variant/30 hover:bg-primary/5'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4 pt-4">
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-slate-100 text-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-slate-200">
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </button>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-transform active:scale-95 hover:opacity-90">
            Buy Now
          </button>
        </div>
        <a 
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#25D366]/10 text-[#075E54] font-bold border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all" 
          href="https://wa.me/923000000000"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>
      </div>

      {/* Delivery Info */}
      <div className="bg-slate-50 rounded-3xl p-6 space-y-4">
        <div className="flex gap-4">
          <Truck className="text-primary w-6 h-6" />
          <div>
            <h4 className="font-bold text-sm">Free Delivery in Pakistan</h4>
            <p className="text-xs text-on-surface-variant">Estimated arrival: 2-4 business days.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <CreditCard className="text-primary w-6 h-6" />
          <div>
            <h4 className="font-bold text-sm">Cash on Delivery Available</h4>
            <p className="text-xs text-on-surface-variant">Pay when you receive your package.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
