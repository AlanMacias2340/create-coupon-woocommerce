import { Button } from "@/components/ui/button"
import { text } from "stream/consumers"

type Props = {
    textButton: string,
    handleClick?: () => void
}

export function ButtonOption({textButton, handleClick}:Props) {
  return <Button className="cursor-pointer" onClick={handleClick}>{textButton}</Button>
}