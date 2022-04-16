// import styles from './FilterBTN.module.css';

const FilterBTN = () => {
    return (
        <div>
            <div className="form-check">
                <input className="form-check-input"
                    type="radio" name="flexRadioDefault"
                    id="flexRadioDefault1" defaultChecked />
                <label
                    className="btn btn-outline-primary"
                    htmlFor="flexRadioDefault1">
                    Single toggle
                </label>

            </div>
            <div className="form-check">
                <input className="form-check-input"
                    type="radio" name="flexRadioDefault"
                    id="flexRadioDefault2" />
                <label
                    className="btn btn-outline-primary"
                    htmlFor="flexRadioDefault2">
                    Single toggle
                </label>

            </div>
        </div>
    );
};

export default FilterBTN;