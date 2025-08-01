import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Home,
  FileText,
  Settings,
  HelpCircle,
  User,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLogout } from '@/services/authService';

interface SidebarProps {
  userEmail?: string;
}

const Sidebar = ({ userEmail }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const { logout } = useLogout();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navigationItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: FileText, label: 'Notebooks', path: '/notebook', active: false },
    { icon: Settings, label: 'Settings', path: '/settings', active: false },
    { icon: HelpCircle, label: 'Help', path: '/help', active: false },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen bg-[#fbfbf9] border-r border-gray-200 z-50 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-16' : 'w-64'
        } lg:relative lg:translate-x-0 ${
          isCollapsed ? '' : 'translate-x-0'
        } flex flex-col`}
      >
        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b border-gray-200'>
          {!isCollapsed && (
            <div className='flex items-center gap-2'>
              <img
                src='/asklawlm_logo.png'
                alt='AskLaw LM Logo'
                className='h-8 w-8 object-contain'
              />
              <h1 className='text-lg font-semibold text-[#0a0a0a]'>AskLawLM</h1>
            </div>
          )}

          <Button
            variant='ghost'
            size='sm'
            onClick={toggleSidebar}
            className='p-2 hover:bg-gray-100'
          >
            {isCollapsed ? (
              <ChevronRight className='h-4 w-4' />
            ) : (
              <X className='h-4 w-4 lg:hidden' />
            )}
            {!isCollapsed && <Menu className='h-4 w-4 hidden lg:block' />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className='flex-1 p-4'>
          <ul className='space-y-2'>
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Button
                  variant='ghost'
                  className={`w-full justify-start gap-3 h-12 ${
                    isCollapsed ? 'px-2' : 'px-4'
                  } ${
                    item.active
                      ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => navigate(item.path)}
                >
                  <item.icon
                    className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : ''}`}
                  />
                  {!isCollapsed && <span>{item.label}</span>}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Menu */}
        <div className='p-4 border-t border-gray-200'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className={`w-full justify-start gap-3 h-12 ${
                  isCollapsed ? 'px-2' : 'px-4'
                }`}
              >
                <div className='w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center'>
                  <User className='h-4 w-4 text-white' />
                </div>
                {!isCollapsed && (
                  <div className='flex flex-col items-start'>
                    <span className='text-sm font-medium text-gray-900'>
                      Account
                    </span>
                    <span className='text-xs text-gray-500 truncate max-w-[120px]'>
                      {userEmail}
                    </span>
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-48'>
              <DropdownMenuItem
                onClick={() => navigate('/settings')}
                className='cursor-pointer'
              >
                <Settings className='h-4 w-4 mr-2' />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout} className='cursor-pointer'>
                <LogOut className='h-4 w-4 mr-2' />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Menu Button */}
      {isCollapsed && (
        <Button
          variant='ghost'
          size='sm'
          onClick={toggleSidebar}
          className='fixed top-4 left-4 z-50 lg:hidden p-2 bg-white border border-gray-200 shadow-sm'
        >
          <Menu className='h-4 w-4' />
        </Button>
      )}
    </>
  );
};

export default Sidebar;
