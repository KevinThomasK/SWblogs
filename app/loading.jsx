const Loading = () => {
  return (
    <div className="flex justify-center gap-10">
      {/* Loading Card 1 */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white flex flex-col w-[400px]">
          {/* Skeleton Image */}
          <div className="bg-gray-200 h-48 rounded-t-lg mb-4 animate-pulse"></div>

          {/* Skeleton Title */}
          <div className="bg-gray-200 h-6 rounded mb-2 animate-pulse"></div>

          {/* Skeleton Short Description */}
          <div className="bg-gray-200 h-4 rounded mb-4 animate-pulse"></div>

          {/* Skeleton Meta Information */}
          <div className="flex space-x-4">
            <div className="bg-gray-200 h-4 w-24 rounded animate-pulse"></div>
            <div className="bg-gray-200 h-4 w-32 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Loading Card 2 */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white flex flex-col w-[400px]">
          {/* Skeleton Image */}
          <div className="bg-gray-200 h-48 rounded-t-lg mb-4 animate-pulse"></div>

          {/* Skeleton Title */}
          <div className="bg-gray-200 h-6 rounded mb-2 animate-pulse"></div>

          {/* Skeleton Short Description */}
          <div className="bg-gray-200 h-4 rounded mb-4 animate-pulse"></div>

          {/* Skeleton Meta Information */}
          <div className="flex space-x-4">
            <div className="bg-gray-200 h-4 w-24 rounded animate-pulse"></div>
            <div className="bg-gray-200 h-4 w-32 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Loading Card 3 */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white flex flex-col w-[400px]">
          {/* Skeleton Image */}
          <div className="bg-gray-200 h-48 rounded-t-lg mb-4 animate-pulse"></div>

          {/* Skeleton Title */}
          <div className="bg-gray-200 h-6 rounded mb-2 animate-pulse"></div>

          {/* Skeleton Short Description */}
          <div className="bg-gray-200 h-4 rounded mb-4 animate-pulse"></div>

          {/* Skeleton Meta Information */}
          <div className="flex space-x-4">
            <div className="bg-gray-200 h-4 w-24 rounded animate-pulse"></div>
            <div className="bg-gray-200 h-4 w-32 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
