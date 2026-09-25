import type { PulseExtensionContext } from "../../../sdk/types";

const themeVariables: Record<string, string> = {
  "--pulse-bg": "#050608",
  "--pulse-surface": "#0f1318",
  "--pulse-fg": "#eef2f7",
  "--pulse-accent": "#5b9dff",
  "--pulse-border": "#2a3140",
};

function applyTheme(): void {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(themeVariables)) {
    root.style.setProperty(key, value);
  }
}

export function activate(_context: PulseExtensionContext): void {
  applyTheme();
}

export function deactivate(): void {
  const root = document.documentElement;
  for (const key of Object.keys(themeVariables)) {
    root.style.removeProperty(key);
  }
}
