import { Facebook, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 px-8 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <span className="text-xl font-extrabold text-blue-800">P2PClouds</span>
          <p className="text-slate-500 text-sm leading-relaxed">
            Elevating the Pakistani e-commerce experience with curated premium tech and lifestyle products.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Facebook className="text-primary w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Instagram className="text-primary w-5 h-5" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface">Customer Support</h4>
          <ul className="space-y-2">
            {['Shipping to Pakistan', 'Cash on Delivery Info', 'Track Order'].map((item) => (
              <li key={item}>
                <a className="text-slate-500 hover:text-blue-500 transition-all text-sm" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface">Policies</h4>
          <ul className="space-y-2">
            {['Returns', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <li key={item}>
                <a className="text-slate-500 hover:text-blue-500 transition-all text-sm" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface">Newsletter</h4>
          <p className="text-slate-500 text-sm">Get early access to drops and exclusive discounts.</p>
          <div className="flex gap-2">
            <input 
              className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm flex-1 focus:ring-1 focus:ring-primary outline-none" 
              placeholder="Email" 
              type="email"
            />
            <button className="bg-primary text-on-primary p-2 rounded-xl hover:opacity-90 transition-opacity">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 text-center">
        <p className="text-slate-500 text-sm">© 2024 P2PClouds. All rights reserved.</p>
      </div>
    </footer>
  );
}
