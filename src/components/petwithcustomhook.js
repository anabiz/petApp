import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./customHook";
import Results from './Result';


const Searchpet1 = () => {
  const [location, setLocation] = useState("seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropDown("Breed", "", breeds);
  const [pets, setPet] = useState([]);

  async function requestPet() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    })
    setPet(animals || [])
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStr = [];
      for (let index = 0; index < breeds.length; index++) {
        breedStr.push(breeds[index].name);
      }
      //const breedStr = breeds.map(({ name }) => name);
      setBreeds(breedStr);
    }).catch((err) => {
      console.log(err);
    })
  }, [animal, setBreed, setBreeds])

  return (
    <div
      className="search-param"
      style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        width: "80%",
      }}
    >
      <div style={{ width: "500px", backgroundColor: "yellow" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "yellow",
            position: "fixed",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            requestPet();
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

          <AnimalDropdown />
          <BreedDropdown />

          <button style={{ width: "30%", margin: "30px 0px 0px 34%" }}>
            Submit
          </button>
        </form>
      </div>
      <Results pets={pets} />
    </div>
  );
};
export default Searchpet1;
