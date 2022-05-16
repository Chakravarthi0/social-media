import { BsPencil } from "react-icons/bs";
import { usePostModal } from "../../hooks";

const CreatePostBtn = () => {
  const { toggleShowPostModal } = usePostModal();
  return (
    <div
      className="fixed bottom-[85px] z-10 right-5 flex justify-center items-center bg-blue-500 w-12 h-12 rounded-full text-2xl sm:hidden"
      onClick={toggleShowPostModal}
    >
      <BsPencil />
    </div>
  );
};

export { CreatePostBtn };
