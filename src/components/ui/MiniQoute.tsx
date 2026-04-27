import { useEffect, useState } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { apiQuote, type Quote } from "../../services/apiQuote";
import { motion, AnimatePresence } from "framer-motion";

function MiniQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      const q = await apiQuote();
      setQuote(q);
      setLoading(false);
    };

    fetchQuote();

    const intervalId = setInterval(fetchQuote, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-full w-full flex flex-col justify-end items-center gap-4 p-2">
      <h2 className="text-neutral-500">Quote of the day</h2>

      <div className="border border-white p-3 text-center flex flex-col items-center justify-around rounded-md min-h-[120px]">
        <BiSolidQuoteAltLeft className="text-4xl mb-2" />

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.p
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Loading quote...
            </motion.p>
          ) : quote ? (
            <motion.div
              key={quote.quote}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p>{quote.quote}</p>
              <span className="block mt-1 text-sm">- {quote.author}</span>
            </motion.div>
          ) : (
            <motion.p
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No quote available. Try again later.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MiniQuote;
