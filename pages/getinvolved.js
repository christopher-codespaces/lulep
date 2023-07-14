import Image from 'next/image'
import {Donate,Teachers,Invest} from "../components"


export default function GetInvolved() {
  return (
        <div>
              <Donate />
              <Teachers/>
              <Invest/>
        </div>
  )
}
