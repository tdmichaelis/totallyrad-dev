import UnsplashPhoto from "../projects/unsplash/_components/UnsplashPhoto";

export default async function Page({
  params,
}: {
  params: { imageId: string };
}) {
  const { imageId } = await params;
  return (
    <div>
      <UnsplashPhoto image={{ url: imageId, alt: "alt" }} />
    </div>
  );
}
