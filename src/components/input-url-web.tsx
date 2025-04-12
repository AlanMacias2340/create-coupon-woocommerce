import { Input } from "@/components/ui/input"

type Props = {
  value: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputURL({value, handleChange} : Props) {
  return <Input type="text" placeholder="URL" value={value} onChange={handleChange}/>
}