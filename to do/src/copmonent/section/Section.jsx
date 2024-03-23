import "./section.css";

const Section = ({ status, counter }) => {
  return (
    <div className={`section ${status.toLowerCase()}`}>
      <div className="counter_div">
        <div className="status">{status}</div>
        <div className="counter">{counter}</div>
      </div>
    </div>
  );
};
export default Section;
