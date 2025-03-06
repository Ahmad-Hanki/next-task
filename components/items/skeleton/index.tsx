import { CardContent } from '@/components/ui/card';

const SkeletonItem = () => {
  return (
    <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Image Skeleton */}
      <div className="relative h-[300px] w-full animate-pulse overflow-hidden bg-gray-200 sm:h-full sm:w-1/3">
        <div className="h-full w-full bg-gray-300" />
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 space-y-5">
        {/* Name and Status Skeleton */}
        <div className="space-y-1">
          <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200" />
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 animate-pulse rounded-full bg-gray-200" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        {/* Last Known Location Skeleton */}
        <div className="space-y-1">
          <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
          <div className="h-6 w-2/3 animate-pulse rounded bg-gray-200" />
        </div>

        {/* First Seen In Skeleton */}
        <div className="space-y-1">
          <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
          <div className="h-6 w-2/3 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </CardContent>
  );
};

export default SkeletonItem;
