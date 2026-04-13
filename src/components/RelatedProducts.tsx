const relatedProducts = [
  {
    name: "AeroFit Watch S2",
    price: "4,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfJ2ptuFd87a9Amknf33MDr4PnyBKTi4JEWf1pa2vA4ZscFg8TCVH8YMm5eGjWjnwED0buA7GC5X8sF1Las2wTsuf3pEDUD67s30Aqr5_N7lrRFznPmFldqFt25Qa7ECPPUtTVUAJn4XA3atD596aN8Dh7p0cnLmaqWLu0aBj2f0N065JWys5SZegzaVD-ytNBsW6JYIepJWk1-o2NeTWnfwrWuE_haxxe3bLAHLdfXZXNI2xxXt96RctupogQRR9nlFSxYLlReA"
  },
  {
    name: "Duffel Pro Bag",
    price: "6,800",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfYMnLZ7CZdDkRRPJOFMbq-iN2qP5z84AkKLz3PXh38uG9sXIS2Qd7OdECNt3Jia7K9Sasqm33noscLXclFOwfORQUhih8fDUYa0i9Kh_JFgRmT4jbGuLvlpZHzPVqGK2e1IFBPGh66JCmvqejCLMw7p7tuMuzea1wmwioPxWSPNFDK3gIY2u1L8K2v5HjA_ZN7riXdfPgCnyr6UTHZTZ0kVGBqeLXSspZmhDmXhLOWrarXzprAe23MZnUIQ32wPjmBSB_er9TyA"
  },
  {
    name: "Vapor Performance Tee",
    price: "2,150",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZDMrccoABndeo5XPamqN58EhypolBrdyxS_r8SmZLLmBIuv1bh-6JJWbJmpki_KsOHUYxJoKRIk5Jvt0AlLJE4urly8WHetegGNWQ2FiP05YC1FnrurdMWIj_mn0q196TMOAxEeDqPPbWB4m75gNzr8QrcVnPyQRPurB65ImlNCyUiX3Q1JsHfH9HumysoWs7tk5QfhNs1_WmjVvwPwBefGplIliCehLsCxeh7007al4uJl8pSEABBWQJYs_Y3zrvF3XfJFUXIQ"
  },
  {
    name: "SoundSync Pro Buds",
    price: "12,900",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoavNIT2g6fr04wMX35PdjbIrssPtXqvfMy--42sZ11wsFSGqGZ4Uchj0iaG5o1sDfKPawcfpJmVkDLk3x1uuwbMnLi2TQV2FodB7Ix18YzrEffzt4HYkKzHeP_fd-df0EZNpm9M5R96XuEmQcoMeZyQMzwQ3ty7UXiVa0hz-5UcJiVKCQMwQmMXFBETVqSxHbjAWS5h-UQnpOcE-jdZI0b0OiO9QUNwEK9hho5a93xOtS7wYUj8Dy6zN7RENkcsGEDv4mMcTC6Q"
  }
];

export default function RelatedProducts() {
  return (
    <div className="mt-32 space-y-12">
      <h2 className="text-3xl font-headline font-extrabold">Complete The Look</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {relatedProducts.map((product, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-2xl bg-slate-100 overflow-hidden mb-4 relative">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src={product.image} 
                alt={product.name}
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-bold text-on-surface mb-1">{product.name}</h3>
            <p className="text-secondary font-bold">Rs. {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
