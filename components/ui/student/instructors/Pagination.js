"use client";

export default function Pagination() {

  return (

    <div className="custom-pagination">

      <button>

        <i className="bi bi-chevron-left"></i>

      </button>

      <button className="active">

        1

      </button>

      <button>

        2

      </button>

      <button>

        3

      </button>

      <button>

        <i className="bi bi-chevron-right"></i>

      </button>

    </div>

  );

}