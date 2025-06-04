import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

export default function FilterCheckBox() {

  const { types,  selectedTypes, setSelectedTypes } = useGlobalContext();

  // useEffect(() => {
  //   fetchTypes();
  // }, [fetchTypes]);


  const handleCheckboxChange = (event) => {
    const typeName = event.target.name; 
    const isChecked = event.target.checked; 

    setSelectedTypes((prevSelectedTypes) => {
      if (isChecked) {
        
        return [typeName]; 
      } else {
       
        if (prevSelectedTypes.includes(typeName)) {
          return []; 
        }
        
        return prevSelectedTypes;
      }
    });
  };

  // Messaggio di caricamento se i tipi non sono ancora disponibili.
  // if (types.length === 0) {
  //   return <p>Caricamento tipi o nessun tipo disponibile...</p>;
  // }

  return (
    <div>
      <h5>Filtra per Tipo:</h5>
      <ul className="list-unstyled">
        {types.map((type) => (
          <li key={type.id} className="form-check">
            <input
              className="form-check-input"
              type="checkbox" 
              name={type.name} 
              id={type.id}
              onChange={handleCheckboxChange} 
              checked={selectedTypes.includes(type.name)} 
            />
            <label className="form-check-label text-white" htmlFor={type.id}>
              {type.name}
            </label>
          </li>
        ))}
      </ul>
      {/* Per test: mostra il tipo attualmente selezionato */}
      {/* <p>Tipo selezionato: {selectedTypes}</p> */}
    </div>
  );
}