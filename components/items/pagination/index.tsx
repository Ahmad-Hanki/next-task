'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useQueryState } from 'nuqs';
import { cn } from '@/lib/utils';

const PaginationFiltering = ({ info }: { info: InfoType }) => {
  const [page, setPage] = useQueryState('page', { defaultValue: '1' });

  if (info.count == 0) return null;

  const currentPage = Math.max(Number(page), 1);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= info.pages) {
      window.scroll(0, 0);
      setPage(newPage.toString(), { shallow: false });
    }
  };
  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={
              info.prev ? () => handlePageChange(currentPage - 1) : undefined
            }
            className={cn(!info.prev && 'cursor-not-allowed opacity-50')}
          />
        </PaginationItem>

        {/* First Page */}
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(1)}>
              1
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Ellipsis Before Current Page */}
        {currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Previous Page */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(currentPage - 1)}>
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Current Page */}
        <PaginationItem>
          <PaginationLink isActive>{currentPage}</PaginationLink>
        </PaginationItem>

        {/* Next Page */}
        {currentPage < info.pages && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(currentPage + 1)}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Ellipsis After Current Page */}
        {currentPage < info.pages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Last Page */}
        {currentPage < info.pages - 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(info.pages)}>
              {info.pages}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={
              info.next ? () => handlePageChange(currentPage + 1) : undefined
            }
            className={cn(!info.next && 'cursor-not-allowed opacity-50')}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationFiltering;
