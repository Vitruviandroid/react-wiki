// import styles from './Episode.module.css';
import { useEffect, useState } from "react";

const Episode = () => {
    let [id, setId] = useState()
    let api = `https://rickandmortyapi.com/api/episode/${id}`
    let [info, setInfo] = useState([])
    let { air_date, name } = info
    // console.log(info);
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json())
            setInfo(data)
        })()
    }, [api])

    return (
        <div className="container">
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Options</label>
                <select class="form-select" id="inputGroupSelect01">
                    {}
                </select>
            </div>

            <div className="row">
                <h1 className="text-center">
                    Episod: {name == null ? "Unknown" : name}
                </h1>
                <h5 className="text-center">
                    Air Date: {air_date == null ? 'Unknown' : air_date}
                </h5>
            </div>
            <div className="row"></div>
        </div>
    )
};

export default Episode;