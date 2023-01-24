import Animalia from "./Animalia"
import Fungi from "./Fungi"
import Plantae from "./Plantae"

const LifeKingdoms = (props) => {
  return (
    <>
      <h1>Kingdoms of Life</h1>
      <div>
        <Animalia />
      </div>
      <div>
        <Fungi />
      </div>
      <div>
        <Plantae />
      </div>
    </>
  )
}

export default LifeKingdoms