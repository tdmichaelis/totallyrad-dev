export default function NotFound() {
  return (
    <div className="h-full w-full grid place-content-center">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl p-4 text-center">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="mt-4 text-lg">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
