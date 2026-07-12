import React from "react";

export default function ActivityAttachment({
  attachments = [],
}) {
  if (!attachments.length) return null;

  return (

    <div className="activity-attachments">

      {attachments.map((file, index) => (

        <div
          key={index}
          className="attachment-item"
        >

          <div className="attachment-left">

            <i className="bi bi-file-earmark-text"></i>

            <div>

              <h6>{file.name}</h6>

              <small>{file.size}</small>

            </div>

          </div>

        </div>

      ))}

    </div>

  );
}