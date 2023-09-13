import "./styles.scss";
import LoadingSkeletonProps from "./type";

const LoadingSkeleton = ({ quantity, width }: LoadingSkeletonProps) => {
  const arr = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(<div key={i} className="loading-skeleton" style={{ width }} />);
  }
  return <>{arr}</>;
};

export default LoadingSkeleton;
