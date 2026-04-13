import { useState } from 'react';

const tabs = ["Product Specs", "User Reviews", "Shipping & Returns"];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="mt-24 space-y-8">
      <div className="flex gap-12 border-b border-outline-variant/20 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-lg font-bold transition-all whitespace-nowrap ${
              activeTab === tab 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-headline font-bold">Tech Specifications</h3>
          <dl className="space-y-4">
            {[
              { label: "Upper Material", value: "Engineered AeroMesh" },
              { label: "Midsole", value: "Atmosphere™ EVA Foam" },
              { label: "Outsole", value: "High-Traction Rubber" },
              { label: "Weight", value: "245g (Size 41)" }
            ].map((spec) => (
              <div key={spec.label} className="flex justify-between py-3 border-b border-slate-100">
                <dt className="text-on-surface-variant">{spec.label}</dt>
                <dd className="font-semibold">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-headline font-bold">The Craftsmanship</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Every pair of CloudWalker Pro X1 undergoes a rigorous 48-hour pressure test to ensure longevity. 
            We've optimized the weight distribution to support natural pronation, making it ideal for both 
            morning jogs and long commutes through busy city streets.
          </p>
          <div className="aspect-video rounded-3xl bg-slate-200 overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHLopKhVwIKJTv0ikXgx19-cND8J9wX1JiIZXXjsOxgCcuwlEitPpCK0IWonNCMN_6HkA_7oN-Oo-kskyje4txaBTm0zmIy0amNq6q_p2l5mEh28GvOvpV61OmJjbCoKJZGG9w4l3NW2PNd_KT--kWbR8jS0nk7l0oIbShss7JAiKEWCgewhj7AEYZWrAnmoVnzoHTudU3V-JiGtNrQ4aSRdfERFEOZI5DSIJtcJlmZs4frRrlkzn6ZxpNcFGr-Nms5bSUufkMeQ" 
              alt="Craftsmanship"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
