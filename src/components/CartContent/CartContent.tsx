import "./CartContent.css";
import CartTable from "./CartTable";
import CartTitle from "./CartTitle";
import CartFooter from "./CartFooter";

const CartContent = () => {
    return <div className="cart">
        <div className="container">
            <CartTitle />
            <CartTable />
            <CartFooter />
        </div>
    </div>
};

export default CartContent;