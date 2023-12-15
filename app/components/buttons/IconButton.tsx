interface Props {
  text: string;
  Icon: React.ReactNode;
}

export const IconButton: React.FC<Props> = ({ text, Icon }) => (
  <button className="flex justify-center items-center select-none w-full bg-stone-500 dark:bg-stone-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
    {text} &nbsp; {Icon}
  </button>
);
