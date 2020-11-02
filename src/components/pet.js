import React, {useState} from "react";
import { ANIMALS } from "@frontendmasters/pet";

const Searchpet = () => {
    const [location, setLocation] = useState('seattle, WA');
    const [animal, setAnimal] = useState('dog');
    const [breed, setBreed] = useState("");
    const [breeds, setBreeds] = useState([]);

    return (
      <div
        className="search-param"
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          border: "1px solid green",
          width: "70%",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "yellow",
          }}
        >
          <label htmlFor="location" style={{ margin: "100px" }}>
            location{" "}
            <input
              id="location"
              value={location}
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label htmlFor="animal">
            Animal{" "}
            <select
              style={{ backgroundColor: "blue" }}
              id="animal"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
              onBlur={(e) => setAnimal(e.target.value)}
            >
              <option>All</option>
              {ANIMALS.map((animal, index) => (
                <option key={index} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
                <label htmlFor="breed" style={{ margin: "20px" }}>
            Breed
            <select
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              onBlur={(e) => setAnimal(e.target.value)}
              disabled={breeds.length ===0}
                    >
                        <option>All</option>
                        {breeds.map(breed => (<option key={breed} value={breed}>{breed}</option>))}
            </select>
          </label>
          <button style={{ width: "30%", margin: "30px 0px 0px 34%" }}>
            Submit
          </button>
        </form>
      </div>
    );
    
}

export const Pet = ({ name, animal, breed, media, location, id }) => {
  
  let hero = 'http://placecorgi.com/300/300';
  if (media.length) {
    hero = media[0].small;
  }
  console.log(name)
  console.log(id);
  return (
    <div style={{ width: "100%", marginLeft: "100px" }}>
      <a
        href={`/details/${id}`}
        className="pet"
        style={{
          backgroundColor: "yellow",
          color: "green",
          textAlign: "center",
          marginLeft: "100px",
        }}
      >
        <div className="image-container" style={{ marginTop: "80px" }}>
          <img src={hero} alt={name} style={{ borderRadius: "50%" }} />
        </div>
        <div className="info" style={{ marginBottom: "50px" }}>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          {/* <hr></hr> */}
        </div>
      </a>
    </div>
  );
}
export default Searchpet;