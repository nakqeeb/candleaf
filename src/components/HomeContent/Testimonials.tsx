import MainHeading from "./MainHeading";
import "./Testimonials.css";
import avatar_1 from "../../assets/images/avatar-01.png";
import avatar_2 from "../../assets/images/avatar-02.png";
import avatar_3 from "../../assets/images/avatar-03.png";
import Rating from "../../shared/components/UIElements/Rating";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <MainHeading
        title="Testimonials"
        description="Some quotes from our happy customers"
      />
      <div className="container">
        <div className="card">
          <img src={avatar_1} alt="" />
          <Rating rateCount={5} />
          <h2>“I love it! No more air fresheners”</h2>
          <p>Luisa</p>
        </div>
        <div className="card">
          <img src={avatar_2} alt="" />
          <Rating rateCount={3} />
          <h2>“Raccomended for everyone”</h2>
          <p>Edoardo</p>
        </div>
        <div className="card">
          <img src={avatar_3} alt="" />
          <Rating rateCount={4} />
          <h2>“Looks very natural, the smell is awesome”</h2>
          <p>Mart</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
