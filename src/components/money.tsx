import NumberFlow from "@number-flow/react";

export function formatParts(value: number) {
  const formatted = new Intl.NumberFormat("sk-SK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(value));
  const [whole, cents] = formatted.split(",");
  const signedWhole = value < 0 ? `-${whole}` : whole ?? "0";
  return { whole: signedWhole, cents: cents ?? "00" };
}

export function Money({
  value,
  size = "md",
  muted = false,
  live = false,
}: {
  value: number;
  size?: "sm" | "md" | "lg";
  muted?: boolean;
  live?: boolean;
}) {
  const { whole, cents } = formatParts(value);

  if (live) {
    return (
      <span className={`money money-${size}${muted ? " is-muted" : ""}`}>
        <NumberFlow
          value={value}
          locales="sk-SK"
          format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
          suffix=" €"
        />
      </span>
    );
  }

  return (
    <span className={`money money-${size}${muted ? " is-muted" : ""}`}>
      <span className="money-int">{whole}</span>
      <span className="money-cents">,{cents}</span>
      <span className="money-cur">&nbsp;€</span>
    </span>
  );
}
