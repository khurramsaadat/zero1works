"use client";

import { useCallback, useSyncExternalStore } from "react";

type ThemeMode = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

function getStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "system";
}

function resolveTheme(mode: ThemeMode): boolean {
  if (mode === "dark") return true;
  if (mode === "light") return false;
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;
}

function applyTheme(mode: ThemeMode) {
  const isDark = resolveTheme(mode);
  document.documentElement.classList.toggle("dark", isDark);
  if (mode === "system") {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, mode);
  }
  window.dispatchEvent(new Event("theme-change"));
}

function getModeSnapshot(): ThemeMode {
  return getStoredMode();
}

function getServerSnapshot(): ThemeMode {
  return "system";
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("theme-change", callback);
  window.addEventListener("storage", callback);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", () => {
    if (getStoredMode() === "system") {
      document.documentElement.classList.toggle("dark", mq.matches);
      callback();
    }
  });
  return () => {
    window.removeEventListener("theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

// Initialize theme on first client load
if (typeof window !== "undefined") {
  applyTheme(getStoredMode());
}

const modes: { id: ThemeMode; label: string }[] = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "system", label: "Match system" },
];

export default function ThemeSwitcher() {
  const current = useSyncExternalStore(subscribe, getModeSnapshot, getServerSnapshot);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const setMode = useCallback((mode: ThemeMode) => {
    applyTheme(mode);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 rounded-full bg-gray-800 p-1 text-xs border border-gray-700">
        {modes.map((m) => (
          <span key={m.id} className="px-3 py-1.5 rounded-full text-gray-500">
            {m.label}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 rounded-full bg-gray-800 p-1 text-xs border border-gray-700">
      {modes.map((m) => (
        <button
          key={m.id}
          type="button"
          onClick={() => setMode(m.id)}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
            current === m.id
              ? "bg-white text-gray-900 shadow-sm font-medium"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
