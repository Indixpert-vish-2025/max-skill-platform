"use client";

import { Pagination } from "react-bootstrap";

export default function CoursePagination() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Pagination className="course-pagination">
        <Pagination.Prev />

        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>

        <Pagination.Next />
      </Pagination>
    </div>
  );
}