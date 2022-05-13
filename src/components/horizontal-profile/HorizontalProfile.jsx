import { PrimaryButton } from "../button";

const HorizontalProfile = () => {
  return (
    <div className="flex justify-between items-center gap-x-3 p-2 my-3 cursor-pointer rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600">
      <div className="flex gap-3">
        <div className="w-12 h-12">
          <img
            className="rounded-full shadow-sm"
            src="https://randomuser.me/api/portraits/men/11.jpg"
            alt="user image"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-0">
          <p>John Doe</p>
          <p className="text-slate-400">@Johndoe</p>
        </div>
      </div>
      <PrimaryButton>Follow</PrimaryButton>
    </div>
  );
};

export { HorizontalProfile };
