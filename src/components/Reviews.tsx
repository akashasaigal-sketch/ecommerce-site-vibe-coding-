import { Star } from 'lucide-react';

const reviews = [
  {
    initials: "ZA",
    name: "Zain Ahmed",
    rating: 5,
    comment: "Extremely comfortable for daily use. The sizing was perfect. Delivery to Lahore was within 2 days. Highly recommended!",
    color: "bg-secondary-container text-on-secondary-container"
  },
  {
    initials: "MK",
    name: "Mariam Khan",
    rating: 4,
    comment: "Love the color and the bounce. Great for long walks in the park. The packaging was very premium.",
    color: "bg-primary-container text-on-primary"
  },
  {
    initials: "HS",
    name: "Hamza Sheikh",
    rating: 5,
    comment: "Best shoes in this price range in Pakistan. Quality is at par with international brands. Buying another pair for my brother.",
    color: "bg-emerald-600 text-white"
  }
];

export default function Reviews() {
  return (
    <div className="mt-24 space-y-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-headline font-extrabold">Community Feedback</h2>
          <p className="text-on-surface-variant">What our customers in Pakistan are saying.</p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold shadow-sm active:scale-95 transition-all hover:opacity-90">
          Write a Review
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm space-y-4 border border-slate-100">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${review.color}`}>
                {review.initials}
              </div>
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-slate-300'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-on-surface-variant italic leading-relaxed">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
