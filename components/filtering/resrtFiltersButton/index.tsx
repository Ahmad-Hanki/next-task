'use client';
import { Button } from '@/components/ui/button';
// import { useRouter } from "next/navigation";
import { useQueryState } from 'nuqs';

const ResetFiltersButton = () => {
  //   const router = useRouter();
  const [status, setStatus] = useQueryState('status');
  const [gender, setGender] = useQueryState('gender');
  const [page, setPage] = useQueryState('page');

  return (
    <div className="w-full sm:w-fit">
      <Button
        className="w-full"
        disabled={!status && !gender && !page}
        onClick={() => {
          //   router.push("/");
          setStatus('');
          setGender('');
          setPage('', { shallow: false });
        }}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default ResetFiltersButton;
