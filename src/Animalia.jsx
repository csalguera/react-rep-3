import Amphibians from "./Amphibians"
import Birds from "./Birds"
import Fish from "./Fish"
import Mammals from "./Mammals"
import Reptiles from "./Reptiles"

const Animalia = (props) => {
  return (
    <>
      <h1>Animalia</h1>
      <div>
        <Amphibians />
      </div>
      <div>
        <Birds />
      </div>
      <div>
        <Fish />
      </div>
      <div>
        <Mammals />
      </div>
      <div>
        <Reptiles />
      </div>
    </>
  )
}

export default Animalia