// import Image from "next/image";

import Image from "next/image";

export default function UnsplashPhoto({
  image,
}: {
  image: {
    urls: {
      regular: string;
    };
    alt_description: string;
    description: string;
    height: number;
    width: number;
    id: string;
  };
}) {
  if (!image.urls.regular) return null;

  return (
    <Image
      src={image.urls.regular}
      alt={image.alt_description}
      width={image.width}
      height={image.height}
      style={{
        height: "auto",
        width: "100%",
        maxHeight: "calc(100vh - 6rem)",
        maxWidth: "calc(100vw - 6rem)",
        objectPosition: "center",
        objectFit: "contain",
      }}
    />
  );
}
