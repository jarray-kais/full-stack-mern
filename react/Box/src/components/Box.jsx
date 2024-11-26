const Box = (props) => {
    const {color , pixel}= props
  return (
    <div style={{backgroundColor:color, height: `${pixel}px`, width : `${pixel}px`}}>

    </div>
  )
}

export default Box