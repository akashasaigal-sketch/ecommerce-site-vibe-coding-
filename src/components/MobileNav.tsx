import { Home, Grid, ShoppingBag, User } from 'lucide-react';

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-white/80 backdrop-blur-lg shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] rounded-t-3xl">
      <div className="flex flex-col items-center justify-center text-slate-500 cursor-pointer">
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-body uppercase tracking-wider mt-1">Home</span>
      </div>
      <div className="flex flex-col items-center justify-center text-slate-500 cursor-pointer">
        <Grid className="w-6 h-6" />
        <span className="text-[10px] font-body uppercase tracking-wider mt-1">Categories</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-orange-100 text-orange-700 rounded-2xl px-4 py-1 cursor-pointer">
        <ShoppingBag className="w-6 h-6 fill-current" />
        <span className="text-[10px] font-body uppercase tracking-wider mt-1">Cart</span>
      </div>
      <div className="flex flex-col items-center justify-center text-slate-500 cursor-pointer">
        <User className="w-6 h-6" />
        <span className="text-[10px] font-body uppercase tracking-wider mt-1">Account</span>
      </div>
    </div>
  );
}
