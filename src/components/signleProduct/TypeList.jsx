function getTypeClassName(typeName) {
  const normalizedTypeName = typeName?.toLowerCase();
  switch (normalizedTypeName) {
    case "fire":
      return "type-fire";
    case "water":
      return "type-water";
    case "grass":
      return "type-grass";
    case "electric":
      return "type-electric";
    case "normal":
      return "type-normal";
    case "poison":
      return "type-poison";
    case "bug":
      return "type-bug";
    case "flying":
      return "type-flying";
    case "ground":
      return "type-ground";
    case "rock":
      return "type-rock";
    case "ghost":
      return "type-ghost";
    case "dragon":
      return "type-dragon";
    case "ice":
      return "type-ice";
    case "fighting":
      return "type-fighting";
    case "psychic":
      return "type-psychic";
    case "steel":
      return "type-steel";
    case "dark":
      return "type-dark";
    case "fairy":
      return "type-fairy";
    default:
      return "type-default";
  }
}

export default function TypeList({ types }) {
  if (!types?.length) return <p>No types available.</p>;
  return (
    <ul>
      {types?.map((type) => (
        <li key={type.id} className={getTypeClassName(type.name)}>
          {type.name}
        </li>
      ))}
    </ul>
  );
}
