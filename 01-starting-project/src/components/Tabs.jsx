const Tabs = ({children,buttons,buttonsContainer}) => {

const ButtonsContainer=buttonsContainer
  return (
    <>
    <ButtonsContainer>
      {buttons}
    </ButtonsContainer>
    {children}
    </>
  )
}

export default Tabs
