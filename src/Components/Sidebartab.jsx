
const Sidebartab = ({name, icon}) => {

    return (
      <div className={`flex gap-[5vh] items-center py-[5vh] px-[2vh] h-[10vh] cursor-pointer transition-colors select-none`} >
       {icon && <img src={icon} alt={`${name}  icon`} className="w-[1.8vw] h-[4vh] ml-[3vh] select-none" />}
        <span className=" font-medium text-[2.3vh]">{name}</span>
      </div>
    );
  };
  

export default Sidebartab