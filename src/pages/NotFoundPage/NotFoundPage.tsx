import kokomiOfGreed from "../../assets/misc/kokomiOfGreed.png";

const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <h2>How about we explore the area ahead of us later?</h2>
      <img
        src={kokomiOfGreed}
        alt="A rendition of the Yu-Gi-Oh! card Pot of Greed styled after Kokomi."
      />
    </>
  );
};

export default NotFoundPage;
