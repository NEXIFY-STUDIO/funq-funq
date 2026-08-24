import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HomeDashboard } from "@/components/home-dashboard";
import { SplashScreen } from "@/components/splash-screen";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = typeof sessionStorage !== "undefined" && sessionStorage.getItem("bunq-splash") === "1";
    if (seen || reduce) {
      setPhase("done");
      return;
    }
    const hold = 1500;
    const fade = 480;
    const a = window.setTimeout(() => setPhase("out"), hold);
    const b = window.setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("bunq-splash", "1");
    }, hold + fade);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, []);

  function skip() {
    setPhase("out");
    window.setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("bunq-splash", "1");
    }, 280);
  }

  return (
    <main className="app-root">
      <div className={`dash-wrap${phase === "done" || phase === "out" ? " is-in" : ""}`}>
        <HomeDashboard />
      </div>
      {phase !== "done" && (
        <button type="button" className="splash-hit" onClick={skip} aria-label="Pokračovať">
          <SplashScreen leaving={phase === "out"} />
        </button>
      )}
    </main>
  );
}
