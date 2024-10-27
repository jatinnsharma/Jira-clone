import { Button } from "@/components/ui/button"


const Home = () => {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="outline">outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="muted">muted</Button>
      <Button variant="teritary">teritary</Button>
  
      <p className="text-red-500">
        Jatin
      </p>
    </div>
  )
}

export default Home