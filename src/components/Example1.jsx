import Lottie from "lottie-react";
import AI from "../assets/AI.json"
import { useRef } from "react";

const Example1 = () => {
  const AiAnimRef = useRef(null)

  const style = {
    width: "700px"
  }
  return (
    <>
      <Lottie style={style} animationData={AI} loop={true} autoplay={true} lottieRef={AiAnimRef} onLoopComplete={() => AiAnimRef.current.setDirection(-1)} />
    </>
  )
}

export default Example1