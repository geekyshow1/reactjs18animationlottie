import { useLottie } from "lottie-react";
import AI from "../assets/AI.json"

const Example2 = () => {
  const options = {
    animationData: AI,
    style: {
      width: "200px"
    }
  }
  const { View } = useLottie(options)
  return (
    <>
      {View}
    </>
  )
}

export default Example2