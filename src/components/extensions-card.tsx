import type { Extension } from "../lib/types";
import SwitchButton from "./switch-button";

type ExtensionsCardProps = {
    extensions: Extension[]
}

export default function ExtensionsCard({extensions}: ExtensionsCardProps) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
            {extensions.map((extensions)=> (
                <article className="border border-neutral-200 dark:border-neutral-600 rounded-[1.25rem] p-5 b
                    g-neutral-50 dark:bg-neutral-800 h-[200px] flex flex-col justify-between">

                        <div className="flex items-start gap-4">
                            <img 
                                src={extensions.logo} 
                                alt={`${extensions.name} logo`}
                                width={60}
                                height={60}
                            /> 

                            <div>
                                <h2 className="text-preset-2 text-neutral-900 dark:text-neutral-50 mb-2">{extensions.name}</h2>
                                <p>{extensions.description}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <button className="border border-neutral-300 dark:border-neutral-600 
                                rounded-full py-2 px-4 cursor-pointer hover:text-neutral-50 
                                hover:bg-red-700 dark:hover:text-neutral-900 dark:hover:bg-red-400 
                                hover:border-transparent duration-300">
                                Remove
                            </button>
                            <SwitchButton/>
                        </div>
                </article>
            ))}
        </div>    
    )
}