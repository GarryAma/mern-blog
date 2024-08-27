import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-8 my-8">
      <div className="flex flex-col space-y-3 w-[95%] mx-auto">
        <Skeleton className="h-[250px]  rounded-xl" />
        <div className="flex flex-col  space-y-4">
          <Skeleton className="h-8 w-[70%]" />
          <Skeleton className="h-8 w-[70%]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 w-[95%] mx-auto">
        <Skeleton className="h-[250px]  rounded-xl" />
        <div className="flex flex-col  space-y-4">
          <Skeleton className="h-8 w-[70%]" />
          <Skeleton className="h-8 w-[70%]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 w-[95%] mx-auto">
        <Skeleton className="h-[250px]  rounded-xl" />
        <div className="flex flex-col  space-y-4">
          <Skeleton className="h-8 w-[70%]" />
          <Skeleton className="h-8 w-[70%]" />
        </div>
      </div>
    </div>
  );
};
