'use client'
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { Tooltip } from '@heroui/react';
import Image from 'next/image';
import { CircleArrowLeft } from 'lucide-react';
import { useUserStore } from '../shared/store/useUser';
import { links } from './links';
import { useSideBarStore } from '../shared/store/useSideBar';

export default function SideMenu() {
  const pathname = usePathname();
  const open = useSideBarStore(state => state.open);
  const clearUserInfo = useUserStore(state => state.clearUserInfo);
  
  return (
    <aside 
      className={`sticky top-0 h-screen flex flex-col justify-between items-center 
        ${open ? 'w-72' : 'w-20'} transition-all duration-500 ease-in
        bg-black border-r border-primary
      `}
    >
      <section
        className={`
          w-full h-20 flex items-center gap-1 py-5 px-2
          font-semibold justify-center 
        `}
      >
        <figure className={`max-w-20 max-h-20 flex justify-center items-center bg-transparent ${open ? 'p-4' : 'px-2'} transition-all duration-500 ease-in`}>
          <Image
            src='/login.png'
            alt='Logo'
            width={150}
            height={150}
            className=''
          />
        </figure>
        {open && <p className="hidden sm:flex" >Stack-Lab</p> } 
      </section>

      <section className='flex flex-col items-center h-full my-12'>
        <nav className='flex flex-col gap-5'>
          {links.menuLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Tooltip
                key={link.name}
                content={link.name}
                placement={"right"}
                offset={10}
                color="primary"
                isDisabled={open}
                className='text-black'
              >
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    max-w-56 flex items-center gap-5 py-2
                    rounded-full backdrop-blur-xl 
                    font-semibold hover:text-primary
                    border border-transparent hover:border-primary
                    ${pathname.includes(link.href) && 'text-primary '}
                    ${open ? 'w-full justify-start px-4' : 'w-14 justify-center'} 
                  `}
                >
                  <LinkIcon className="w-8"/>
                  {open && <p className="hidden sm:flex" >{link.name}</p> } 
                </Link>
              </Tooltip>
            );
          })}
        </nav>
      </section>
      
      <Link
        href="/login"
        className={`
          max-w-56 flex items-center gap-5 py-2 my-6
          rounded-full backdrop-blur-xl 
          font-semibold hover:text-danger-400
          border border-transparent hover:border-danger-400
          ${open ? 'w-48 justify-start px-4' : 'w-14 justify-center'} 
        `}
        onClick={() => clearUserInfo()}
      >
        <CircleArrowLeft className="w-8"/>
        {open && <p className="hidden sm:flex" >Cerrar sesión</p> } 
      </Link>
    </aside>
  );
}
