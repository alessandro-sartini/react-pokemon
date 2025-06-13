import "../cssComponents/DefaultLayout.css";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1 style={{ fontFamily: "Press Start 2P, monospace", color: "#d32f2f" }}>
        Welcome to the Pokédex!
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#222" }}>
        Search and discover all Pokémon!
      </p>
      <div className="container border-rounded">
        <img
          className="img-fluid rounded-4"
          src="/imgs/jumbo.jpg"
          alt="Jumbo"
        />
      </div>
    </div>
  );
}
