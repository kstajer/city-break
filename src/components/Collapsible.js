import { useState, useRef, React } from 'react'

const Collapsible = ({ desc, text, skyLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  return (
    <div className='city'>
      <button className='toggle-btn' onClick={() => {
        setIsOpen(!isOpen);
      }}>{text}</button>
      <div
        ref={parentRef}
        className="city-info"
        style={
          isOpen ?
            {
              height: parentRef.current.scrollHeight + "px",
            } :
            {
              height: "0px",
            }
        }
      >{desc}
      </div>
    </div>
  )
}

export default Collapsible