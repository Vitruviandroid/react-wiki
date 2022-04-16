// import styles from './Filters.module.css';

import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {

    let clearn = () => {
        setStatus('');
        setGender('');
        setSpecies('');
        window.location.reload(false)
    }

    return (
        <div className="col-3">
            <div className="text-center">Filter</div>
            <div
                style={{ cursor: "pointer" }}
                className="text-center text-primary text-decoration-underline"
                onClick={() => clearn()}
            >
                Clear Filters
            </div>
            <div className="accordion"
                id="accordionPanelsStayOpenExample">
                <Status setStatus={setStatus} setPageNumber={setPageNumber} />
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Gender setGender={setGender} setPageNumber={setPageNumber} />
            </div>
        </div>
    )
};

export default Filters;