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
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit animi repellendus consequuntur eaque commodi quaerat
              quae impedit expedita quisquam provident autem perspiciatis magni
              sed nesciunt, nulla distinctio laudantium! Ipsa, odio.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit animi repellendus consequuntur eaque commodi quaerat
              quae impedit expedita quisquam provident autem perspiciatis magni
              sed nesciunt, nulla distinctio laudantium! Ipsa, odio.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit animi repellendus consequuntur eaque commodi quaerat
              quae impedit expedita quisquam provident autem perspiciatis magni
              sed nesciunt, nulla distinctio laudantium! Ipsa, odio.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit animi repellendus consequuntur eaque commodi quaerat
              quae impedit expedita quisquam provident autem perspiciatis magni
              sed nesciunt, nulla distinctio laudantium! Ipsa, odio.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit animi repellendus consequuntur eaque commodi quaerat
              quae impedit expedita quisquam provident autem perspiciatis magni
              sed nesciunt, nulla distinctio laudantium! Ipsa, odio.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Credits;
