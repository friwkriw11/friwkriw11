import "./topSection.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const TopSection = ({ title }) => {

  const navigate = useNavigate();


  return (
    <div className="top  items-center  " >
      <div className=" content flex p-[4px] ">
        <a onClick={() => navigate(-1)} className="font-[500]  text-[24px]" href=""><ArrowBackIcon className="mb-[4px]" /> Back </a>
      </div>
      <div className={` flex justify-center `}>
      <h1 className="text-[48px] font-[600]">{title}</h1>
      </div>
    </div>

  )
}

export default TopSection