import getRickAndMortyData from "@/actions/getRickAndMortyData";
import Filtering from "@/components/filtering";
import CardItem from "@/components/items/cardItem";
import getQueryClient from "@/lib/reactQuery/queryclient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

async function Home({ searchParams }: HomeType) {
  const { gender, status, page } = await searchParams;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [gender ?? "", status ?? "", page ?? ""],
    queryFn: async () => await getRickAndMortyData(gender, status, page),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="max-w-7xl mx-auto px-5 md:px-0 py-5">
        {/* filtering */}
        <Filtering />

        {/* showing data */}
        <CardItem gender={gender} page={page} status={status} />
      </div>
    </HydrationBoundary>
  );
}

export default Home;
