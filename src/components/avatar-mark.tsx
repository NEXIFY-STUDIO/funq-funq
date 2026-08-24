export function AvatarMark() {
  return (
    <svg viewBox="0 0 64 64" className="avatar-svg" aria-hidden="true">
      <defs>
        <radialGradient id="hood" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2a1218" />
          <stop offset="55%" stopColor="#12080c" />
          <stop offset="100%" stopColor="#050305" />
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="45%" r="40%">
          <stop offset="0%" stopColor="#ff2a2a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff2a2a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill="#0b0b0d" />
      <ellipse cx="32" cy="34" rx="22" ry="24" fill="url(#hood)" />
      <path
        d="M18 22c2-10 26-10 28 0 1 8-4 12-8 14v6c0 6-4 10-6 10s-6-4-6-10v-6c-4-2-9-6-8-14z"
        fill="#141018"
      />
      <path
        d="M24 20c6-8 16-8 16 2 0 0-2-6-8-6s-8 6-8 6z"
        fill="#07050a"
      />
      <ellipse cx="32" cy="36" rx="10" ry="11" fill="#1a1416" />
      <ellipse cx="32" cy="36" rx="16" ry="14" fill="url(#glow)" />
      <path
        d="M22 34c2 1 4 2 10 2s8-1 10-2"
        stroke="#3a2024"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="26.5" cy="33" r="2.3" fill="#ff3b3b" />
      <circle cx="37.5" cy="33" r="2.3" fill="#ff3b3b" />
      <circle cx="26.5" cy="33" r="0.8" fill="#ffd0d0" />
      <circle cx="37.5" cy="33" r="0.8" fill="#ffd0d0" />
      <path
        d="M25 41c2.4 3.4 5.2 5 7 5s4.6-1.6 7-5"
        stroke="#c44"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M27 42.2 28.4 45h2.2l.8-2.6M34 42.4l.7 2.6h2.1L38 42"
        stroke="#6a3030"
        strokeWidth="1.1"
        fill="none"
      />
    </svg>
  );
}
