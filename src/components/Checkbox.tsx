type CheckboxProps = {
  text: string;
};

export default function Checkbox({ text }: CheckboxProps) {
  return (
    <div className="flex items-center ps-3">
      <input
        id="checkbox-1"
        type="checkbox"
        value=""
        className="w-4 h-4 accent-indigo-300 cursor-pointer"
      />
      <label
        htmlFor="laravel-checkbox"
        className="w-full py-3 ms-2 text-sm font-medium"
      >
        {text}
      </label>
    </div>
  );
}
