import { Search, MessageSquare, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="flex items-center justify-between px-6 py-3 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold tracking-tight text-blue-700">P2PClouds</span>
          <div className="hidden md:flex gap-6 items-center">
            <a className="text-blue-700 font-bold border-b-2 border-blue-600 font-headline font-medium" href="#">Categories</a>
          </div>
        </div>
        
        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
            <input 
              className="w-full bg-surface-container-low border-none rounded-full py-2 pl-11 pr-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50" 
              placeholder="Search for products..." 
              type="text"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container rounded-full transition-transform active:scale-90">
            <MessageSquare className="text-on-surface-variant w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-surface-container rounded-full transition-transform active:scale-90 relative">
            <ShoppingCart className="text-on-surface-variant w-6 h-6" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-on-primary text-[10px] flex items-center justify-center rounded-full">2</span>
          </button>
          <button className="p-2 hover:bg-surface-container rounded-full transition-transform active:scale-90">
            <User className="text-on-surface-variant w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
