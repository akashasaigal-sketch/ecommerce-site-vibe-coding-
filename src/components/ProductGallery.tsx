import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDDnJW6BFWWsNo9EIjbo_Ih14K86jmmBrODogmppNhZ02itnaKU1kNJhHm1sogwDeltYSwAoPVfy2IjUO0VpHA2FBOgdkKykcEHfCzFwEUMII0x40530yNKItwJIgOq3y_YHse9vQooLVvoEY6XGGWG3ODkqAF4Qb17ohKT93IVeBSndprBC-79skJIit4NVwMuukZskEZEWX5Onnlk3lwAbwKlu4HSTub4h180sK8eL7sWcxfvg6AGAg1r1lyz-uMIhJWbNAdV-Q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDs5yPQJ0a7Ugdu9uqCdtQxflEbiXlzokYCBmEzuLkUEZe0wFBLkDdybKWxAvjy3kEdgQlSvu_FuSrgZ_kNLltjNbSDVvLTCAy3VaJsJHqwBNRxzFR6pA_zeVgFyGS237LB-sHoVlut6c0LdNqNBa-GLV3WRTSmWgyXfKWtPQgkMLjBeeLqdCEcCoaQxW_vbmMn-a5xuiqGgxEAT4gNMd0I92HWMfRT7rcFijNjjwinBrx28-K-ZLGcBqdUF7gbpgLq814rF0IGzw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCOWW2sFR15rYnmhvogAybCv6rDwE4ejRJSTa086MR1DVDA7IUuJBqWSyylP5YsyFolZM7DUY7XizWGIa6v27YzrAW9BUBYMT_Oeduaj36mu_le9K5-YdUPEgjMkvsroFpG__CZULbmW9y9SwzbBN4OS-QTVowibD_G8iW7ReBI4p7mCUlbHnewbTcGOeySJYIxWl4q2vqmUgJOSi_-lrE_9lHL0FSvSN6SH___bY8rza5h4NReBVRCR_0q7dx0ECOmowCfLrYIOA"
];

const mainImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDa6OJPULFKeBsf0Wt-YlJCYF8Wi0BXyDVGd111uHD8U4_fwSqdurJr4Cm2eHaqmiBtYcfiWn8knQAFqxrKkJw9xybLX7IrZC3ZgFJnD2v9XT3Fy7NFfyTaHXvwkpy47sBEYseE4ju-lCoscZOtT3K_15LYtPNO127KJu_N6zz7sIU-JKM4R9kImJJiBrdV_OzkMZU6-aDuMZ_U7tP-Pcg-6_1hGSm24iAmIY-NP-_kbjQZjbhTjb0pELtYHZmAmBq6dvhEqPAYIw";

export default function ProductGallery() {
  const [activeImage, setActiveImage] = useState(mainImage);
  const [isLiked, setIsLiked] = useState(true);

  return (
    <div className="lg:col-span-7 grid grid-cols-12 gap-4 sticky top-24">
      <div className="col-span-2 space-y-4">
        {images.map((img, idx) => (
          <div 
            key={idx}
            onClick={() => setActiveImage(img)}
            className={`aspect-square rounded-xl bg-surface-container-low overflow-hidden cursor-pointer transition-all ${activeImage === img ? 'ring-2 ring-primary' : 'hover:ring-2 ring-primary/50'}`}
          >
            <img 
              className="w-full h-full object-cover" 
              src={img} 
              alt={`Product thumbnail ${idx + 1}`}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
      <div className="col-span-10">
        <div className="aspect-[4/5] rounded-3xl bg-white overflow-hidden shadow-sm group relative">
          <motion.img 
            key={activeImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover" 
            src={activeImage} 
            alt="Main product view"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 right-6">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="bg-white/80 backdrop-blur shadow-sm p-3 rounded-full hover:bg-white transition-colors"
            >
              <Heart 
                className={`w-6 h-6 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-on-surface-variant'}`} 
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
