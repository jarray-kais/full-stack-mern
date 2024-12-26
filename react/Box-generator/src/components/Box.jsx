const Box = (props) => {
  const { component, Remove } = props;

  return (
    <>
    <div className="boxes">
        {component?.map((box, index) => (
          <div key={index} className="box_cont">
            <i
              style={{ cursor: "pointer", margin: "10px" }}
              className="fa-solid fa-xmark"
              onClick={() => Remove(index)}
            ></i>
             <div
              style={{
                backgroundColor: box.color,
                height: `${box.pixel}px`,
                width: `${box.pixel}px`,
              }}
            ></div>{" "} 
          </div>
        ))}
      </div>
    </>
  );
};

export default Box;
