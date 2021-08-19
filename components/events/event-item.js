import Link from "next/link";
import Button from "../ui/button";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/event/${id}`;

  return (
    <li className="max-w-md mx-auto mb-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={"/" + image}
            alt={title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <h2>{title}</h2>
            <div>
              <time>{humanReadableDate}</time>
            </div>
            <div>
              <address>{formattedAddress}</address>
            </div>
          </div>
          <div>
            <Button link={exploreLink}>Explore Event</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
