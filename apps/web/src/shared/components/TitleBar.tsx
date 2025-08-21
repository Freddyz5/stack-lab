import React from 'react';
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@heroui/react';
import { useUserStore } from '../store/useUser';
import { Cog, LogOut, PanelLeftOpen, PanelRightOpen, UserRound } from 'lucide-react';
import { useSideBarStore } from '../store/useSideBar';

type Props = {
  children: React.ReactNode;
  moduleName?: string;
  className?: string;
};

const TitleBar = ({ children, moduleName, className } : Props) => {

  const userInfo = useUserStore(state => state.userInfo);
  const open = useSideBarStore(state => state.open);
  const setOpen = useSideBarStore(state => state.setOpen);

  return (
    <header className={`${className} bg-black sticky top-0 h-20 z-10 flex items-center justify-around border-b border-secondary`}>
      <section className="w-[5%]flex items-center">
        <Button
          isIconOnly
          onPress={() => setOpen(!open)}
          variant='light'
          color='primary'
        >
          {open ? <PanelRightOpen className=''/> : <PanelLeftOpen className='' />}
        </Button>
      </section>

      <section className="w-[30%] font-bold text-2xl">
        <h1>{moduleName}</h1>
      </section>
      
      <section className="w-[40%] flex items-center justify-around">
        { children }
      </section>
      
      <section className="w-[25%]flex items-center">
        <Dropdown placement="bottom-end"
        className='bg-secondary'
        >
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="w-12 h-12 transition-transform cursor-pointer hover:scale-105"
              src={userInfo?.avatar}
              name={`${userInfo?.name} ${userInfo?.lastName}`}
              fallback={<UserRound className="h-12 w-12 text-gray-300" />}
              color="secondary"
            />
          </DropdownTrigger>

          <DropdownMenu
            aria-label="Profile Actions"
            disabledKeys={["user"]}
          >
            <DropdownItem key="user" isReadOnly className="h-16 gap-2 opacity-100">
              <User
                avatarProps={{
                  isBordered: true,
                  src: userInfo?.avatar,
                  fallback: <UserRound className="h-10 w-10" />,
                  color: 'default',
                }}
                description={userInfo?.email || ""}
                name={`${userInfo?.name} ${userInfo?.lastName}`}
              />
            </DropdownItem>
            
            <DropdownItem
              key="logout"
              color="danger"
              href="/login"
              startContent={<LogOut className="h-5 w-5" />}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>
    </header>
  );
};

export default TitleBar;