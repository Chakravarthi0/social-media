import toast from "react-hot-toast";

const copyPostUrlTOClipboard = async (postId) => {
  await navigator.clipboard.writeText(
    `https://sweet-cucurucho-5e95a3.netlify.app/posts/${postId}`
  );
  toast.success("Link copied to clipboard");
};
export { copyPostUrlTOClipboard };
