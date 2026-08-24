import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  Clover,
  EyeOff,
  Home,
  PiggyBank,
  Plus,
  QrCode,
  Shield,
  TrendingUp,
} from "lucide-react";
import { AvatarMark } from "@/components/avatar-mark";
import {
  BankMark,
  FlagDE,
  FlagES,
  FlagFR,
  PigMark,
} from "@/components/account-icons";
import { Money } from "@/components/money";

export type TabId = "home" | "cards" | "save" | "stocks" | "crypto";

type Account = {
  id: string;
  name: string;
  balance: number;
  kind: "nl" | "pig" | "es" | "fr" | "de" | "mint";
};

const ACCOUNTS: Account[] = [
  { id: "nl", name: "NL € účet", balance: 0.14, kind: "nl" },
  { id: "save", name: "sporiaci účet", balance: 0, kind: "pig" },
  { id: "es", name: "Španielsky účet", balance: 2, kind: "es" },
  { id: "fr", name: "Francúzsky účet", balance: 0, kind: "fr" },
  { id: "de", name: "Nemecký účet", balance: 0.44, kind: "de" },
  { id: "vault", name: "Trezor", balance: 0, kind: "pig" },
  { id: "joint", name: "Spoločný účet", balance: 0, kind: "mint" },
];

const TABS: { id: TabId; label: string }[] = [
  { id: "home", label: "Domov" },
  { id: "cards", label: "Karty" },
  { id: "save", label: "Sporenie" },
  { id: "stocks", label: "Akcie" },
  { id: "crypto", label: "Crypto" },
];

const spring = { type: "spring" as const, duration: 0.32, bounce: 0 };

function CreditCardIcon() {
  return (
    <svg width="22" height="26" viewBox="0 0 18 22" fill="none" aria-hidden="true">
      <rect x="2.2" y="1.5" width="13.6" height="19" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5 7.5h8M5 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AccountIcon({ kind }: { kind: Account["kind"] }) {
  if (kind === "nl")
    return (
      <span className="acct-ico tone-nl">
        <BankMark />
      </span>
    );
  if (kind === "pig")
    return (
      <span className="acct-ico tone-pig">
        <PigMark />
      </span>
    );
  if (kind === "es")
    return (
      <span className="acct-ico tone-flag">
        <FlagES />
      </span>
    );
  if (kind === "fr")
    return (
      <span className="acct-ico tone-flag">
        <FlagFR />
      </span>
    );
  if (kind === "de")
    return (
      <span className="acct-ico tone-flag">
        <FlagDE />
      </span>
    );
  return (
    <span className="acct-ico tone-mint">
      <BankMark />
    </span>
  );
}

function TopBar() {
  return (
    <header className="topbar">
      <motion.button type="button" className="avatar-btn" aria-label="Profil" whileTap={{ scale: 0.96 }}>
        <AvatarMark />
      </motion.button>
      <div className="name-wrap">
        <motion.button type="button" className="name-pill" whileTap={{ scale: 0.96 }}>
          <span>Bunq Bank</span>
          <ChevronDown size={16} strokeWidth={2.4} />
        </motion.button>
      </div>
      <div className="top-actions">
        <motion.button type="button" className="icon-pill" aria-label="Clover" whileTap={{ scale: 0.96 }}>
          <Clover size={20} strokeWidth={1.8} />
        </motion.button>
        <motion.button type="button" className="icon-pill" aria-label="QR kód" whileTap={{ scale: 0.96 }}>
          <QrCode size={20} strokeWidth={1.8} />
        </motion.button>
      </div>
    </header>
  );
}

function TabBar({ tab, onTab }: { tab: TabId; onTab: (id: TabId) => void }) {
  return (
    <nav className="tabbar" aria-label="Hlavné menu">
      {TABS.map((item) => {
        const active = item.id === tab;
        return (
          <motion.button
            key={item.id}
            type="button"
            className={`tab-item${active ? " is-active" : ""}`}
            onClick={() => onTab(item.id)}
            whileTap={{ scale: 0.96 }}
          >
            {active && (
              <motion.span
                layoutId="tab-pill"
                className="tab-pill"
                transition={spring}
              />
            )}
            <span className="tab-ico" aria-hidden="true">
              {item.id === "home" && (
                <Home size={22} strokeWidth={2.2} fill={active ? "currentColor" : "none"} />
              )}
              {item.id === "cards" && (
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                  <rect x="2.2" y="1.5" width="13.6" height="19" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M5 7.5h8M5 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
              {item.id === "save" && <PiggyBank size={22} strokeWidth={1.9} />}
              {item.id === "stocks" && <TrendingUp size={22} strokeWidth={1.9} />}
              {item.id === "crypto" && (
                <span className="shield-wrap">
                  <Shield size={22} strokeWidth={1.9} />
                  <span className="btc-mark">B</span>
                </span>
              )}
            </span>
            <span className="tab-label">{item.label}</span>
          </motion.button>
        );
      })}
    </nav>
  );
}

function Sheet({
  title,
  open,
  onClose,
  children,
}: {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="sheet-root" role="dialog" aria-modal="true" aria-label={title}>
          <motion.button
            type="button"
            className="sheet-backdrop"
            aria-label="Zavrieť"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="sheet-card"
            initial={{ y: 18, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sheet-handle" />
            <h2 className="sheet-title">{title}</h2>
            {children}
            <button type="button" className="sheet-close" onClick={onClose}>
              Zavrieť
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function OtherPage({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: ReactNode;
}) {
  return (
    <motion.section
      className="page-pad"
      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className="page-title">{title}</h1>
      <div className="empty-card">
        <div className="empty-ico">{icon}</div>
        <p>{body}</p>
      </div>
    </motion.section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function HomeDashboard() {
  const [tab, setTab] = useState<TabId>("home");
  const [hidden, setHidden] = useState(true);
  const [sheet, setSheet] = useState<null | "pay" | "request" | "add" | "wealth">(null);
  const [openAccount, setOpenAccount] = useState<Account | null>(null);

  const total = useMemo(() => 33395.5, []);

  return (
    <div className="device">
      <div className="grain" aria-hidden="true" />
      <TopBar />

      <div className="device-scroll">
        {tab === "home" && (
          <motion.section
            className="home-page"
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.05, duration: 0.35 } },
            }}
          >
            <motion.h1 className="page-title" variants={fadeUp}>
              Domov
            </motion.h1>

            <motion.button
              type="button"
              className="wealth-card"
              onClick={() => setSheet("wealth")}
              variants={fadeUp}
              whileTap={{ scale: 0.96 }}
            >
              <span className="wealth-label">Čisté imanie</span>
              <span className="wealth-sum">
                <Money value={total} size="lg" />
                <ChevronRight size={18} className="wealth-chevron" />
              </span>
              <span className="wealth-delta">
                Dnes <span className="delta-down">▼ -0,01 €</span>
              </span>
            </motion.button>

            <motion.div className="action-row" variants={fadeUp}>
              <motion.button type="button" className="action-btn tone-pay" onClick={() => setSheet("pay")} whileTap={{ scale: 0.96 }}>
                <span className="action-glyph">
                  <ArrowUp size={16} strokeWidth={2.6} />
                </span>
                Zaplatíť
              </motion.button>
              <motion.button type="button" className="action-btn tone-ask" onClick={() => setSheet("request")} whileTap={{ scale: 0.96 }}>
                <span className="action-glyph">
                  <ArrowDown size={16} strokeWidth={2.6} />
                </span>
                Žiadosť
              </motion.button>
              <motion.button type="button" className="action-btn tone-add" onClick={() => setSheet("add")} whileTap={{ scale: 0.96 }}>
                <span className="action-glyph">
                  <Plus size={16} strokeWidth={2.6} />
                </span>
                <span className="action-stack">
                  Pridať
                  <em>peniaze</em>
                </span>
              </motion.button>
            </motion.div>

            <motion.div className="section-head" variants={fadeUp}>
              <h2>Bankové účty</h2>
              <button
                type="button"
                className={`privacy-chip${hidden ? " is-on" : ""}`}
                onClick={() => setHidden((v) => !v)}
                aria-label="Skryť zostatky"
              >
                <Money value={2.58} size="sm" muted />
                <EyeOff size={16} strokeWidth={2} />
              </button>
            </motion.div>

            <motion.ul className="acct-list" variants={fadeUp}>
              {ACCOUNTS.map((acct) => (
                <li key={acct.id}>
                  <motion.button
                    type="button"
                    className="acct-row"
                    onClick={() => setOpenAccount(acct)}
                    whileTap={{ scale: 0.96 }}
                  >
                    <AccountIcon kind={acct.kind} />
                    <span className="acct-name">{acct.name}</span>
                    <span className="acct-bal">
                      <Money value={acct.balance} size="sm" />
                    </span>
                  </motion.button>
                </li>
              ))}
            </motion.ul>
          </motion.section>
        )}

        {tab === "cards" && (
          <OtherPage
            title="Karty"
            body="Tvoje bunq karty sa zobrazia tu. Fyzická aj virtuálna karta sú pripravené na pridanie."
            icon={<CreditCardIcon />}
          />
        )}
        {tab === "save" && (
          <OtherPage
            title="Sporenie"
            body="Sporiaci účet a Trezor — odkladaj bokom bez poplatkov."
            icon={<PiggyBank size={26} strokeWidth={1.8} />}
          />
        )}
        {tab === "stocks" && (
          <OtherPage
            title="Akcie"
            body="Zatiaľ žiadne pozície. Akcie môžeš kúpiť priamo z bunq."
            icon={<TrendingUp size={26} strokeWidth={1.8} />}
          />
        )}
        {tab === "crypto" && (
          <OtherPage
            title="Crypto"
            body="Bitcoin a ďalšie kryptomeny. Zatiaľ prázdne portfólio."
            icon={<Shield size={26} strokeWidth={1.8} />}
          />
        )}
      </div>

      <TabBar tab={tab} onTab={setTab} />

      <Sheet title="Zaplatíť" open={sheet === "pay"} onClose={() => setSheet(null)}>
        <p className="sheet-copy">Pošli peniaze na IBAN, bunq.me alebo kontakt.</p>
        <button type="button" className="sheet-primary">
          Nová platba
        </button>
      </Sheet>
      <Sheet title="Žiadosť" open={sheet === "request"} onClose={() => setSheet(null)}>
        <p className="sheet-copy">Požiadaj niekoho o platbu odkazom alebo QR kódom.</p>
        <button type="button" className="sheet-primary">
          Požiadať o platbu
        </button>
      </Sheet>
      <Sheet title="Pridať peniaze" open={sheet === "add"} onClose={() => setSheet(null)}>
        <p className="sheet-copy">Doplň účet bankovým prevodom alebo kartou.</p>
        <button type="button" className="sheet-primary">
          Doplniť
        </button>
      </Sheet>
      <Sheet title="Čisté imanie" open={sheet === "wealth"} onClose={() => setSheet(null)}>
        <p className="sheet-copy">Súčet všetkých účtov, sporenia a investícií.</p>
        <div className="sheet-stat">
          <Money value={total} size="lg" />
        </div>
      </Sheet>
      <Sheet
        title={openAccount?.name ?? "Účet"}
        open={Boolean(openAccount)}
        onClose={() => setOpenAccount(null)}
      >
        {openAccount && (
          <>
            <div className="sheet-stat">
              <Money value={openAccount.balance} size="lg" />
            </div>
            <p className="sheet-copy">Zostatok na účte {openAccount.name}.</p>
          </>
        )}
      </Sheet>
    </div>
  );
}
