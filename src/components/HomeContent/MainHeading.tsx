import "./MainHeading.css";
const MainHeading = (props: any) => {
  return <div className="main-heading">
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>;
};

export default MainHeading;
