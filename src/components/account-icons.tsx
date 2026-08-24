export function BankMark() {
  return (
    <svg viewBox="0 0 32 32" className="acct-glyph" aria-hidden="true">
      <path
        d="M6 13.2 16 8l10 5.2V15H6v-1.8Z"
        fill="currentColor"
      />
      <rect x="8.2" y="16.2" width="2.4" height="7.2" rx="0.4" fill="currentColor" />
      <rect x="14.8" y="16.2" width="2.4" height="7.2" rx="0.4" fill="currentColor" />
      <rect x="21.4" y="16.2" width="2.4" height="7.2" rx="0.4" fill="currentColor" />
      <rect x="6" y="24.2" width="20" height="2.1" rx="0.5" fill="currentColor" />
    </svg>
  );
}

export function PigMark() {
  return (
    <svg viewBox="0 0 32 32" className="acct-glyph" aria-hidden="true">
      <path
        d="M9 13.2c.4-3.4 4-5.6 7.4-4.6 1.4-2 4.4-1.7 5.2.6 3.2.6 5.4 3.4 5.2 6.6 0 1.2-.2 2.2-1 3.1v2.2c0 3.3-3.2 5.9-7.2 5.9h-3.2C11.4 27 8 24.2 8 20.6v-1.4c-2.4-.4-4-2.4-3.6-4.6.4-2 2.2-3.2 4.6-1.4z"
        fill="currentColor"
      />
      <circle cx="14.2" cy="16.4" r="1.15" fill="#5c4310" />
      <circle cx="20.6" cy="16.4" r="1.15" fill="#5c4310" />
      <ellipse cx="17.4" cy="20.2" rx="2.3" ry="1.5" fill="#5c4310" />
      <path d="M7.2 15.6c-1.6.2-2.6 1.4-2.4 2.6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function FlagES() {
  return (
    <svg viewBox="0 0 32 32" className="acct-flag" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#c60b1e" />
      <rect y="10" width="32" height="12" fill="#ffc400" />
    </svg>
  );
}

export function FlagFR() {
  return (
    <svg viewBox="0 0 32 32" className="acct-flag" aria-hidden="true">
      <rect width="11" height="32" fill="#0055a4" />
      <rect x="11" width="10" height="32" fill="#fff" />
      <rect x="21" width="11" height="32" fill="#ef4135" />
    </svg>
  );
}

export function FlagDE() {
  return (
    <svg viewBox="0 0 32 32" className="acct-flag" aria-hidden="true">
      <rect width="32" height="11" fill="#000" />
      <rect y="11" width="32" height="10" fill="#dd0000" />
      <rect y="21" width="32" height="11" fill="#ffce00" />
    </svg>
  );
}

export function MintMark() {
  return <BankMark />;
}
