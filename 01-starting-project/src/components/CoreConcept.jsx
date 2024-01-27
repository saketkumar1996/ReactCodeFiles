

export default function CoreConcept({image="Default props",title="default props",description="default props"}){
    return(
      <li>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
  
      </li>
    )
  }


  