import CustomButton from "../../shared/components/UIElements/CustomButton";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing">
      <div className="card">
        <span>🌱</span>
        <h2>The nature candle</h2>
        <p>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>
        <CustomButton name="Discovery our collection" />
      </div>
    </div>
  );
};

export default Landing;
