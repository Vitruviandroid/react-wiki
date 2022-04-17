import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/Pages/Characters'
import Episode from './components/Pages/Episode'
import Location from './components/Pages/Location'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("")


  let [fetchedData, updateFetchedData] = useState([])
  let { info, results } = fetchedData


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data)
    })()
  }, [api])

  return (
    <div className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters setStatus={setStatus} setSpecies={setSpecies} setPageNumber={setPageNumber} setGender={setGender} />
          <div className="col-8  ">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />

    </div>
  );
}

export default App;
