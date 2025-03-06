'use client';
import { Card } from '@/components/ui/card';
import Item from '../item';
import { useQuery } from '@tanstack/react-query';
import getRickAndMortyData from '@/actions/getRickAndMortyData';
import SkeletonItem from '../skeleton';
import PaginationFiltering from '../pagination';

const CardItem = ({ gender, page, status }: CardItemProps) => {
  const { data, isFetching } = useQuery({
    queryKey: [gender ?? '', status ?? '', page ?? ''],
    queryFn: async () => await getRickAndMortyData(status, gender, page),
    // getting the data from the server
  });

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data?.characters.map((item: CharacterType) => (
          <Card key={item.id}>
            {isFetching ? <SkeletonItem /> : <Item data={item} />}
          </Card>
        ))}
      </div>

      {/* pagination */}

      <PaginationFiltering info={data?.info as InfoType} />
    </div>
  );
};

export default CardItem;
