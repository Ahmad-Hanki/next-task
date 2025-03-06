import { CardContent } from "@/components/ui/card";
import colorBasedOnStatus from "@/lib/colorBasedOnStatus";
import { cn } from "@/lib/utils";
import Image from "next/image";
const Item = ({ data }: { data: CharacterType }) => {
  const {
    // url,
    // created,
    // gender,
    // id,
    image,
    location,
    name,
    origin,
    species,
    status,
    // type,
  } = data;

  // the committed data are not used, but just to be shown that they do exist

  const color = colorBasedOnStatus(status); // gets the balls color

  return (
    <CardContent className="flex flex-col sm:flex-row gap-4 sm:items-center ">
      <div className="w-full sm:w-1/3 relative overflow-hidden h-[300px] sm:h-full ">
        <Image
          src={image}
          className="object-center object-cover"
          alt={name}
          fill
        />
      </div>

      <div className="space-y-5">
        <div className="space-y-1">
          <p className="font-bold text-2xl">{name}</p>
          <div className="flex items-center gap-1 ">
            <div className={cn("w-3 h-3 rounded-full", color)} />
            <p>
              {status}
              {" - "}
              {species}
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-foreground">Last known location:</p>
          <p>{location.name}</p>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-foreground">First seen in:</p>
          <p>{origin.name}</p>
        </div>
      </div>
    </CardContent>
  );
};

export default Item;
