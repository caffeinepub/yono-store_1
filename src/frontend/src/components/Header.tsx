import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useInternetIdentity } from '../hooks/useInternetIdentity';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { identity, login, clear, isLoggingIn } = useInternetIdentity();

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Casinos', page: 'casinos' },
    { label: 'Bonuses', page: 'bonuses' },
    { label: 'News', page: 'news' },
    { label: 'Complaints', page: 'complaints' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/assets/generated/site-logo.dim_512x128.png" 
              alt="Yono Store" 
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.page}
                variant="ghost"
                onClick={() => handleNavClick(item.page)}
                className="text-sm font-medium"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:flex"
            >
              <Search className="h-5 w-5" />
            </Button>

            {identity ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('admin-dashboard')}
                  className="hidden md:flex"
                >
                  Admin
                </Button>
                <Button
                  variant="ghost"
                  onClick={clear}
                  className="hidden md:flex"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="default"
                onClick={login}
                disabled={isLoggingIn}
                className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isLoggingIn ? 'Logging in...' : 'Login'}
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t border-border/40">
            <Input
              type="search"
              placeholder="Search casinos, bonuses, news..."
              className="max-w-2xl mx-auto"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.page}
                  variant="ghost"
                  onClick={() => handleNavClick(item.page)}
                  className="justify-start"
                >
                  {item.label}
                </Button>
              ))}
              {identity ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      onNavigate('admin-dashboard');
                      setMobileMenuOpen(false);
                    }}
                    className="justify-start"
                  >
                    Admin
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={clear}
                    className="justify-start"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  variant="default"
                  onClick={login}
                  disabled={isLoggingIn}
                  className="justify-start bg-accent text-accent-foreground"
                >
                  {isLoggingIn ? 'Logging in...' : 'Login'}
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
