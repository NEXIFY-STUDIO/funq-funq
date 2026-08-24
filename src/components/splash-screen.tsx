import { motion } from "motion/react";

const STRIPES = [
  "bg-stripe-1",
  "bg-stripe-2",
  "bg-stripe-3",
  "bg-stripe-4",
  "bg-stripe-5",
  "bg-stripe-6",
  "bg-stripe-7",
  "bg-stripe-8",
  "bg-stripe-9",
  "bg-stripe-10",
  "bg-stripe-11",
  "bg-stripe-12",
] as const;

export function SplashScreen({ leaving }: { leaving: boolean }) {
  return (
    <motion.div
      className={`splash${leaving ? " is-leaving" : ""}`}
      aria-label="bunq welcome"
      initial={{ opacity: 1 }}
      animate={{ opacity: leaving ? 0 : 1, scale: leaving ? 1.045 : 1 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="splash-stripes" aria-hidden="true">
        {STRIPES.map((tone, i) => (
          <motion.span
            key={tone}
            className={tone}
            initial={{ opacity: 0.7, scaleY: 1.04 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.7, delay: i * 0.018, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
      <motion.div
        className="splash-lockup"
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="splash-wordmark">bunq</h1>
        <p className="splash-tagline">Bank of the Free</p>
      </motion.div>
    </motion.div>
  );
}
