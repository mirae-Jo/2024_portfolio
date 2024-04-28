import Image, { StaticImageData } from "next/image";

type Props = {
  src: string | StaticImageData;
  alt: string;
};

const BgCoverImage = ({ src, alt }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      priority
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default BgCoverImage;
