import { CardContent } from '@/components/ui/card';
import colorBasedOnStatus from '@/lib/colorBasedOnStatus';
import { cn } from '@/lib/utils';
import Image from 'next/image';
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
    <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="relative h-[300px] w-full overflow-hidden sm:h-full sm:w-1/3">
        <Image
          src={image}
          className="object-cover object-center"
          alt={name}
          fill
        />
      </div>

      <div className="space-y-5">
        <div className="space-y-1">
          <p className="text-2xl font-bold">{name}</p>
          <div className="flex items-center gap-1">
            <div className={cn('h-3 w-3 rounded-full', color)} />
            <p>
              {status}
              {' - '}
              {species}
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-foreground text-sm">Last known location:</p>
          <p>{location.name}</p>
        </div>

        <div className="space-y-1">
          <p className="text-foreground text-sm">First seen in:</p>
          <p>{origin.name}</p>
        </div>
      </div>
    </CardContent>
  );
};

export default Item;
