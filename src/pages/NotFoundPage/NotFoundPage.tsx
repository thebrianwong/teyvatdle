import kokomiOfGreed from "../../assets/misc/kokomiOfGreed.png";

const NotFoundPage = () => {
  return (
    <>
      <header style={{ flexDirection: "column" }}>
        <h1>404</h1>
        <h2>How about we explore the area ahead of us later?</h2>
      </header>
      <img
        style={{
          borderRadius: "300px",
          boxShadow: "0 0 20px 1px #f5f5f5",
          width: "clamp(300px, 100% ,800px)",
        }}
        src={kokomiOfGreed}
        alt="A rendition of the Yu-Gi-Oh! card Pot of Greed styled after Kokomi."
      />
    </>
  );
};

export default NotFoundPage;
