// import styles from './Filters.module.css';

import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ resoults }) => {





    return (
        <div className="col-3">
            <div className="text-center">Filter</div>
            <div
                style={{ cursor: "pointer" }}
                className="text-center text-primary text-decoration-underline"

            >
                Clear Filters
            </div>
            <div className="accordion"
                id="accordionPanelsStayOpenExample">
                <Status />
                <Species />
                <Gender />
            </div>
        </div>
    )
};

export default Filters;