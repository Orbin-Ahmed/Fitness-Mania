type ClassProps = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: ClassProps) => {
  const overlayStyles = `rounded-md p-5 absolute z-30 flex h-[253px] w-[350px] flex-col items-centr justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block h-[253px] w-[350px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt="img" className="h-[253px] w-[350px] rounded-md" />
    </li>
  );
};

export default Class;
