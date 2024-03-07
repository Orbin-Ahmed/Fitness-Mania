type InputFieldProps = {
  type: string;
  placeHolderText: string;
  name: string;
  id: string;
  required: boolean;
};

const InputField = ({
  type,
  placeHolderText,
  name,
  required,
  id,
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
      />
    </>
  );
};

export default InputField;
