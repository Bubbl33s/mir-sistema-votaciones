type CheckboxProps = {
  text: string;
  id: string;
  name: string;
  checked: boolean;
  disabled: boolean;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({
  text,
  id,
  name,
  checked,
  disabled,
  onChangeHandler,
}: CheckboxProps) {
  return (
    <div className="flex items-center px-3">
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChangeHandler}
        className="w-4 h-4 accent-indigo-300 cursor-pointer"
      />
      <label htmlFor={id} className="w-full py-3 ms-2 text-sm">
        {text}
      </label>
    </div>
  );
}
