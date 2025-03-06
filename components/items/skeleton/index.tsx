import { CardContent } from "@/components/ui/card";

const SkeletonItem = () => {
  return (
    <CardContent className="flex flex-col sm:flex-row gap-4 sm:items-center">
      {/* Image Skeleton */}
      <div className="w-full sm:w-1/3 relative overflow-hidden h-[300px] sm:h-full bg-gray-200 animate-pulse">
        <div className="w-full h-full bg-gray-300" />
      </div>

      {/* Content Skeleton */}
      <div className="space-y-5 flex-1">
        {/* Name and Status Skeleton */}
        <div className="space-y-1">
          <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
          </div>
        </div>

        {/* Last Known Location Skeleton */}
        <div className="space-y-1">
          <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse" />
        </div>

        {/* First Seen In Skeleton */}
        <div className="space-y-1">
          <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse" />
        </div>
      </div>
    </CardContent>
  );
};

export default SkeletonItem;
