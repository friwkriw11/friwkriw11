import './widget.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Woman2OutlinedIcon from '@mui/icons-material/Woman2Outlined';
import Man2OutlinedIcon from '@mui/icons-material/Man2Outlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
const Widget = ({ type }) => {

    let data;
    const number = 1346;
    const diff = 30;
    switch (type) {
        case "members":
            data = {
                title: "Members",
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className='icon' />,

            };

            break;
        case "membership-non-paid":
            data = {
                title: "Membership non paid",
                link: "See all memberships non paid",
                icon: <BadgeOutlinedIcon className='icon' />,

            }
            break;
        case "insurance-non-paid":
            data = {
                title: "Insurance non paid",
                link: "See all Insurance non paid",
                icon: <HealthAndSafetyOutlinedIcon className='icon' />,
            }
            break
        case "boys":
            data = {
                title: "Boys",
                link: "See all boys",
                icon: <Man2OutlinedIcon className='icon' />,
            }
            break;
        case "girls":
            data = {
                title: "Girls",
                link: "See all girls",
                icon: <Woman2OutlinedIcon className='icon' />,
            }
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title"> {data.title} </span>
                <span className="counter"> {number} </span>
                <span className="link"> {data.link} </span>
            </div>
            <div className="right">
                <div className="percentage">{diff}%</div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget