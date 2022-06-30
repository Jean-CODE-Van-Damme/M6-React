import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./assets/programme.json";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />

      {data.map((element) => {
        // console.log(element.direct);
        return (
          <Section
            isDirect={element.direct}
            eventDuration={element.duration}
            eventPictureUrl={element.image}
            isInedit={element.isUnseen}
            eventTime={element.time}
            eventTitle={element.title}
            eventType={element.type}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
