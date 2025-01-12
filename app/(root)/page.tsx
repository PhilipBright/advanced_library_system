import Image from "next/image";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";

export default function Home() {
  return (
    <>
      <BookOverview />
      <BookList />
    </>
  );
}
