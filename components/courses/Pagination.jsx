"use client";

import { Pagination } from "react-bootstrap";

export default function CoursePagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Pagination className="course-pagination">

        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
        />

        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index}
            active={currentPage === index + 1}
            onClick={() =>
              onPageChange(index + 1)
            }
          >
            {index + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() =>
            onPageChange(currentPage + 1)
          }
        />

      </Pagination>
    </div>
  );
}