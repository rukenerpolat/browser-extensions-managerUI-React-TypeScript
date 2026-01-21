import AppLogo from "./app-logo";
import ThemeToggle from "./theme-toggle";

export default function AppHeader() {
  return (
    <div className="container">
        <div className="border rounded-[1.25rem] border-neutral-200 bg-neutral-50 py-3 px-4 dark:border-none dark:bg-neutral-800 flex items-center justify-between max-sm:py-2 max-sm:px-3">
            <AppLogo/>
            <ThemeToggle/>
        </div>
    </div>
  )
}
