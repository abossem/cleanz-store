import { Link } from "@/src/i18n/navigation";
import { Facebook, Instagram, X } from "lucide-react";

export const SocialMedia = () => {
  return (
    <div className="flex items-center gap-2 ">
      <Link
        href="https://www.facebook.com/cleanzstore"
        target="_blank"
        className="bg-primary rounded-full w-8 h-8 flex items-center justify-center "
        rel="noopener noreferrer"
      >
        <Facebook size={20} className="text-white " />
      </Link>

      <Link
        className="bg-primary rounded-full w-8 h-8 flex items-center justify-center "
        href="https://www.tiktok.com/cleanzstore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <X size={20} className="text-white " />
      </Link>

      <Link
        href="https://www.instagram.com/cleanzstore"
        target="_blank"
        className="bg-primary rounded-full w-8 h-8 flex items-center justify-center "
        rel="noopener noreferrer"
      >
        <Instagram size={20} className="text-white " />
      </Link>
    </div>
  );
};
