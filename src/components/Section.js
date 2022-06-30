import Direct from "./Direct";
import Duration from "./Duration";
import Inedit from "./Inedit";
import Picture from "./Picture";
import Time from "./Time";
import Title from "./Title";
import Type from "./Type";

const Section = ({
  isDirect,
  eventDuration = "",
  eventPictureUrl,
  isInedit,
  eventTime = "",
  eventTitle = "",
  eventType = "",
}) => {
  //   console.log(isDirect);

  return (
    <div className="container">
      <section className="section">
        <div className="left">
          <Time eventTime={eventTime} />
          <Picture eventPictureUrl={eventPictureUrl} />
        </div>
        <div className="right">
          <Title eventTitle={eventTitle} />
          <Type eventType={eventType} />

          <div className="little_div">
            <Duration eventDuration={eventDuration} />
            <Direct isDirect={isDirect} />
            <Inedit isInedit={isInedit} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
