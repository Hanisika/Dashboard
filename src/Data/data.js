// ICONS
import {
  FaHome,
  FaClipboardList,
  FaUserFriends,
  FaBoxOpen,
  FaChartLine,
  FaDollarSign,
  FaMoneyBillWave,
  FaClipboard,
} from 'react-icons/fa';

// IMAGES
import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.jpg';

// SIDEBAR DATA
export const SidebarData = [
  {
    icon: FaHome,
    heading: "Dashboard",
  },
  {
    icon: FaClipboardList,
    heading: "Orders",
  },
  {
    icon: FaUserFriends,
    heading: "Customers",
  },
  {
    icon: FaBoxOpen,
    heading: "Products",
  },
  {
    icon: FaChartLine,
    heading: "Analytics",
  },
];

// CARDS DATA
export const CardsData = [
  {
    title: "Sales",
    color: {
      background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
 
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      background: "linear-gradient(180deg, rgb(251, 139, 139) 0%, rgb(252, 120, 139) 100%)",
      boxShadow: "0px 10px 20px 0px rgb(251, 191, 191)",
    },
    barValue: 80,
    value: "14,270",
    
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      background: "linear-gradient(180deg, rgb(237, 136, 53) 0%, rgb(221, 154, 122) 100%)",
      boxShadow: "0px 10px 20px 0px rgb(245, 217, 198)",
    },
    barValue: 60,
    value: "4,270",
   
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// UPDATES DATA
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, Samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
