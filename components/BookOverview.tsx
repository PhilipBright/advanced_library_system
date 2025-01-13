import React from "react";
import Image from "next/image";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1> A Long Book Title</h1>
        <div className="book-info">
          <p>
            by <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="Star" width={40} height={40} />
            <p>{rating}</p>
          </div>
        </div>
        <div className="book-copies">
          <p>
            Total Books: <span>{total_copies}</span>
          </p>
          <p>
            Available Copies: <span>{available_copies}</span>
          </p>
        </div>
        <p className="book-description">{description}</p>
      </div>
    </section>
  );
};

export default BookOverview;
