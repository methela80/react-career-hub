import { NavLink } from "react-router-dom";

const Errorpage = () => {
    return (
        <div>
            <h2>Oops!</h2>
            <h3>Something went wrong</h3>
            <NavLink to="/">Go Back to Home</NavLink>
        </div>
    );
};

export default Errorpage;