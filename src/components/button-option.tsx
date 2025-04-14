import { Button } from "@/components/ui/button"
import { text } from "stream/consumers"

type Props = {
    textButton: string,
    handleClick?: () => void
}

export function ButtonOption({textButton, handleClick}:Props) {
  return <Button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 " onClick={handleClick}>{textButton}</Button>
}