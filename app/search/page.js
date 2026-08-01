import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container py-5">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}