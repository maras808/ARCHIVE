import FeedMainWrapper from "./components/FeedMainWrapper";
import FollowMore from "./components/FollowMore";
import NoMoreData from "./components/nomoredata/NoMoreData";

export default function FeedMain() {
  return (
    <FeedMainWrapper
      noMoreData={<NoMoreData></NoMoreData>}
      followMore={<FollowMore></FollowMore>}
    ></FeedMainWrapper>
  );
}
