import { useState } from "react";
import "./styles.scss";

const Credits = () => {
  const [isDisplaying, setIsDisplaying] = useState(false);

  return (
    <div className="credits-container">
      <button className="credits-button" onClick={() => setIsDisplaying(true)}>
        Credits
      </button>
      {isDisplaying && (
        <div className="credits-modal-background">
          <div className="credits-modal">
            <h1>Credits</h1>
            <p>Genshin Impact assets by HoYoverse.</p>
            <p>
              Genshin Impact drip marketing font from this{" "}
              <a href="https://ko-fi.com/s/003e0b6b50">Ko-fi page</a>.
            </p>
            <p>
              Kokomi of Greed from this{" "}
              <a href="https://www.reddit.com/r/Genshin_Impact/comments/zem5st/i_summon_kokomi_the_grand_strategist_which_allows/">
                Reddit post
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Credits;
