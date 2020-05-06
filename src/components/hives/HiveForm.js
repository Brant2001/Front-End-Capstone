// import React, { useContext, useRef } from "react"
// import { HiveContext } from "./HiveProvider"

// export default props => {
//     const { addHive } = useContext(HiveContext)

//     const name = useRef()
//     const beeTypeId = useRef()
//     const hiveTypeId = useRef()
//     const queenAge = useRef()

//     const constructNewHive = () => {

//         // create a new hive object  
//         const newHiveObj = {
//             name: name.current.value,
//             queenAge: queenAge.current.value,
//             beeTypeId: beeTypeId,
//             hiveTypeId: hiveTypeId
//         }
//         console.log(newHiveObj)
//         // and save it to the API.
//         addHive(newHiveObj).then(props.toggler)
//     }

//     return (
//         <form className="hiveForm">
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="hiveName">Name of Hive: </label>
//                     <input
//                         type="text"
//                         id="hiveName"
//                         ref={name}
//                         required
//                         autoFocus
//                         className="form-control"
//                         placeholder="hive name"
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="hiveLocation">Location of hive: </label>
//                     <input
//                         type="text"
//                         id="hiveLocation"
//                         ref={location}
//                         required
//                         autoFocus
//                         className="form-control"
//                         placeholder="hive location"
//                     />
//                 </div>
//             </fieldset>
//             <button type="submit"
//                 onClick={
//                     evt => {
//                         // Prevent browser from submitting the form
//                         evt.preventDefault() 
//                         // create the hive function goes here
//                         constructNewHive()
//                     }
//                 }
//                 className="btn btn-primary">
//                 Create Apiary
//             </button>
//         </form>
//     )
// }