"use client";

import { useState } from "react";

export default function CourseTabs({ course }) {

  const [tab,setTab]=useState("about");

  return(

    <div className="course-tabs mt-5">

      <div className="tab-buttons">

        <button

          className={tab==="about"?"active":""}

          onClick={()=>setTab("about")}

        >
          About
        </button>

        <button

          className={tab==="reviews"?"active":""}

          onClick={()=>setTab("reviews")}

        >
          Reviews
        </button>

        <button

          className={tab==="discussion"?"active":""}

          onClick={()=>setTab("discussion")}

        >
          Discussion
        </button>

      </div>

      <div className="tab-content">

        {

          tab==="about" &&

          <>

            <h4>About Course</h4>

            <p>{course.description}</p>

          </>

        }

        {

          tab==="reviews" &&

          course.reviews.map((item,index)=>(

            <div
              key={index}
              className="mb-4"
            >

              <h6>{item.name}</h6>

              <p>{item.comment}</p>

            </div>

          ))

        }

        {

          tab==="discussion" &&

          <p>

            Discussion section coming soon.

          </p>

        }

      </div>

    </div>

  );

}