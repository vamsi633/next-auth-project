import React from "react";

const page = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="p-2">Inner page</p>
      <p className="p-2">
        userId:{" "}
        <span className="p-2 rounded bg-orange-500 text-black">
          {" "}
          {params.id}
        </span>{" "}
      </p>
    </div>
  );
};

export default page;
