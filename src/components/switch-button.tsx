const SwitchButton = () => {
  return (
    <label className="relative inline-block w-9 h-5 cursor-pointer">
      <input
        type="checkbox"
        aria-label="Toggle extension"
        className="peer opacity-0 w-0 h-0"
      />

      <span className="absolute inset-0 bg-neutral-600 rounded-full transition-colors duration-300 peer-checked:bg-red-700 dark:peer-checked:bg-red-400"></span>

      <span className="absolute left-[2px] bottom-[2px] h-4 w-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-[14px]"></span>
    </label>
  )
}

export default SwitchButton
