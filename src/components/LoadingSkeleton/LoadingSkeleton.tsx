import "./styles.scss";
import LoadingSkeletonProps from "./type";

const LoadingSkeleton = ({
  quantity,
  width,
  alignment,
  hasContainer,
}: LoadingSkeletonProps) => {
  const style = { width };
  if (alignment && alignment === "right") {
    style["marginLeft" as keyof typeof style] = "auto";
  } else if (alignment && alignment === "left") {
    style["marginRight" as keyof typeof style] = "auto";
  }

  const arr = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(<div key={i} className="loading-skeleton" style={style} />);
  }
  if (hasContainer) {
    return <div className="game-area-container">{arr}</div>;
  } else {
    return <>{arr}</>;
  }
};

export default LoadingSkeleton;
