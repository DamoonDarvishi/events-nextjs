import LogisticsItem from "./logistics-item";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = address.replace(", ", "\n");

  return (
    <section>
      <div>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul>
        <LogisticsItem>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem>
          <address>{formattedAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
