

function Tododis({lists}) {
  return (
    lists.map((lists,index)=>
    {
      return (
      <>
      <div key={lists+index}>{index}{lists}</div>
      </>);
    })
  )
}

export default Tododis