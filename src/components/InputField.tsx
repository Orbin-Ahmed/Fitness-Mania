type InputFieldProps = {
  type: string;
  placeHolderText: string;
  name: string;
  id: string;
  required: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  type,
  placeHolderText,
  name,
  required,
  id,
  onChange,
}: InputFieldProps) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  return (
    <>
      <input
        className={inputStyles}
        type={type}
        placeholder={placeHolderText}
        name={name}
        id={`#${id}`}
        required={required}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
