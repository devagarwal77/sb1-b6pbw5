import React from 'react';

export function Contact() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Marketing?</h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Whether you're looking to increase conversions, enhance your brand presence, or scale 
          your marketing efforts, FundXAds is your trusted partner in navigating the complexities 
          of fintech marketing.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold 
          hover:bg-blue-50 transition-colors">
          Get in Touch
        </button>
      </div>
    </section>
  );
}