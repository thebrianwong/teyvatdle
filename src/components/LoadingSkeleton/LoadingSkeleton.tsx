import "./styles.scss";
import LoadingSkeletonProps from "./type";

const LoadingSkeleton = ({
  quantity,
  width,
  hasContainer,
}: LoadingSkeletonProps) => {
  const arr = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(<div key={i} className="loading-skeleton" style={{ width }} />);
  }
  if (hasContainer) {
    return <div className="game-area-container">{arr}</div>;
  } else {
    return <>{arr}</>;
  }
};

export default LoadingSkeleton;
