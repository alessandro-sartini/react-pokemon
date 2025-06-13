import { useGlobalContext } from "../../context/GlobalContext";

export default function FilterCheckBox() {
  const { types, selectedTypes, setSelectedTypes } = useGlobalContext();



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


  if (types.length === 0) {
    return <p>Loading types or no types available...</p>;
  }

  return (
    <div>
      <h5>Filter by Type:</h5>
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
      {/* per test*/}
      {/* <p>Selected type: {selectedTypes}</p> */}
    </div>
  );
}
