import React from "react";
import Link from "next/link";

function mainHeader() {
  return (
    <header>
      <div>
        <Link href="/">NextEvents</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default mainHeader;
