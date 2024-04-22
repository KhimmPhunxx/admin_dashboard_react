import { useNavigate } from 'react-router-dom';
import main_page_pg from './../../assets/bg_images/main_poge_bg.png'
import { FaUserTie } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { GiFarmer } from "react-icons/gi";


function Main_Page() {
    const navigation = useNavigate();
    
    interface List {
        id: number;
        icon: any;
        title: string;
        link: string;
    }

    const list: List[] = [
        {id: 1, icon: <FaUserTie/> , title: 'Staff Dashboard', link: '/dashboard_staff'},
        {id: 2, icon: <RiAdminLine/> , title: 'Admin Dashboard', link: '/contact'},
        {id: 3, icon: <GiFarmer/> , title: 'Farmer Dashboard', link: '/services'},
    ]


    // const list array of objects
   

  return (
    <main className=' max-w-full h-screen bg-slate-400 bg-no-repeat bg-cover bg-center' 
        style={{backgroundImage: `url(${main_page_pg})`}}
    >
        <div className='logo  pt-14 justify-center items-center flex'> 
            <div className='w-[160px] h-[160px] border rounded-full'>
                <img 
                className='w-full h-full object-cover rounded-full'
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1713657600&semt=ais"
                alt="" 
                />
            </div>
        </div>
        <section className=' flex justify-center items-center gap-10 pt-[3%]'>
            {
                list.map((item) => (
                    <div 
                        onClick={() => navigation(item.link)}
                        key={item.id} 
                        className=' w-[400px] h-[300px] bg-slate-300 rounded-md cursor-pointer px-8 bg-opacity-30'
                    >
                        <div className=' flex justify-center items-center text-6xl h-[50%]'>
                            {item.icon}
                        </div>
                        <div className=' bg-gray-300 rounded flex justify-center text-3xl font-semibold text-gray-700 items-center h-[30%] hover:scale-105 duration-200'>
                            {item.title}
                        </div>
                    </div>
                ))
            }     
        </section>
    </main>
  )
}

export default Main_Page
