"use client";
import React, { useState, useEffect } from "react";
import { quotes } from "@/lib/data";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const QuoteSection = () => {
  const [quoteData, setQuoteData] = useState<{ quote: string; author: string; image: string } | null>(null);

  useEffect(() => {
    // Run only on client to avoid SSR hydration mismatch
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuoteData(randomQuote);
  }, []);

  if (!quoteData) return null; // Avoid rendering until client picks the quote

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <Quote className="w-10 h-10 mx-auto text-primary mb-4" />
          <blockquote className="text-2xl md:text-4xl font-bold font-serif text-gray-900 dark:text-white mb-4">
            {quoteData.quote}
          </blockquote>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-serif mb-6">
            {quoteData.author}
          </p>
          <Image
            src={quoteData.image}
            alt={quoteData.author}
            width={80}
            height={80}
            className="rounded-full mx-auto object-cover border border-gray-300 shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;