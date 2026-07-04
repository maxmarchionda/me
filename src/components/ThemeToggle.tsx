import { Moon, Sun } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button className="theme-fab" onClick={toggle} aria-label={label}>
          {isDark ? <Sun aria-hidden /> : <Moon aria-hidden />}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="tooltip-content" side="left" sideOffset={8}>
          {label}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
