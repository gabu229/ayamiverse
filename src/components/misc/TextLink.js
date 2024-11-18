import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const TextLink = ({ text = <></>, url = "#", hasIcon = true }) => {
  return (
    <Link href={url} className="inline-block mt-1 pe-10 text-link">
      <p className="flex items-center gap-1">
        {text}
        <span className="inline">
          <MdArrowOutward size={18} />
        </span>
      </p>
    </Link>
  );
};

export default TextLink;
