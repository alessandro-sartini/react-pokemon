import "../cssComponents/DefaultLayout.css";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1 style={{ fontFamily: "Press Start 2P, monospace", color: "#d32f2f" }}>
        Benvenuto nel Pokédex!
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#222" }}>
        Cerca e scopri tutti i Pokémon!
      </p>
    </div>
  );
}
