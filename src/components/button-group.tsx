
const buttons = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Active",
        value: "active",
    },
    {
        label: "Inactive",
        value: "inactive",
    },    
]

export default function ButtonGroup() {
  return (
    <div className="space-x-3">
        {buttons.map((button) => (
            <button 
              key={button.value}
              className="text-preset-3 text-neutral-900 dark:text-neutral-50
              border border-neutral-200 dark:border-neutral-600 
              rounded-full bg-neutral-50 dark:bg-neutral-700 
              pt-2 pb-2.5 px-5 cursor-pointer"
            >
                {button.label}
            </button>
        ))}        
    </div>
  )
}
