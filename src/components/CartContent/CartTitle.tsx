import "./CartTitle.css";
import CustomLink from "../../shared/components/UIElements/CustomLink";
const CartTitle = () => {
    return <div className="title">
    <h2>Your cart items</h2>
    <CustomLink to="/ecommerce-frontend" name="Back to shopping"/>
</div>
}

export default CartTitle;