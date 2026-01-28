import SwitchButton from "./switch-button";

export default function ExtensionsCard() {
  return (
    <article className="border border-neutral-200 dark:border-neutral-600 rounded-[1.25rem] p-5 bg-neutral-50 dark:bg-neutral-800 h-[200px] flex flex-col justify-between">
        {/* card-content */}
        <div className="flex items-center gap-4">
            <img 
                src="/images/logo-devlens.svg" 
                alt="devlens logo" 
                width={60}
                height={60}
            />

            <div>
                <h2 className="text-preset-2 text-neutral-900 dark:text-neutral-50 mb-2">DevLens</h2>
                <p>Quickly inspect page layouts and visualize element boundaries.</p>
            </div>
        </div>
        {/* card-footer */}
        <div className="flex justify-between items-center">
            <button className="border border-neutral-300 dark:border-neutral-600 rounded-full py-2 px-4 cursor-pointer hover:text-neutral-50 hover:bg-red-700 dark:hover:text-neutral-900 dark:hover:bg-red-400 hover:border-transparent duration-300">Remove</button>
            <SwitchButton/>
        </div>
    </article>
  )
}
