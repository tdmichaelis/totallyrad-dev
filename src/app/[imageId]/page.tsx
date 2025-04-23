import UnsplashPhoto from "@/app/projects/unsplash/_components/UnsplashPhoto";
import { getPhotoById } from "@/app/projects/unsplash/actions";

export default async function Page({
  params,
}: {
  params: Promise<{ imageId: string }>;
}) {
  const { imageId } = await params;

  const image: {
    urls: {
      regular: string;
    };
    alt_description: string;
    description: string;
    height: number;
    width: number;
    id: string;
  } = await getPhotoById(imageId);
  if (!image) {
    return (
      <div className="grid place-content-center h-screen">Image not found</div>
    );
  }
  return (
    <div className="p-4">
      <UnsplashPhoto image={image} />
    </div>
  );
}
