import kokomiOfGreed from "../../assets/misc/kokomiOfGreed.png";
import Credits from "../../components/Credits/Credits";
import Tooltip from "../../components/Tooltip/Tooltip";
import "./styles.scss";

const NotFoundPage = () => {
  return (
    <>
      <header className="header-404">
        <h1>404</h1>
        <h2 style={{ textAlign: "center" }}>
          How about we explore the area ahead of us later?
        </h2>
      </header>
      <img
        className="kokomi-of-greed"
        src={kokomiOfGreed}
        alt="A rendition of the Yu-Gi-Oh! card Pot of Greed styled after Kokomi."
      />
      <Credits />
      <Tooltip type="troll" />
    </>
  );
};

export default NotFoundPage;
