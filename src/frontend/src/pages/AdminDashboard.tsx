import { LayoutDashboard, FileText, Gift, MessageSquare, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useState } from 'react';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const { clear, identity } = useInternetIdentity();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!identity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Admin Access Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Please log in to access the admin dashboard.</p>
            <Button onClick={() => onNavigate('home')} className="w-full">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const stats = [
    { label: 'Total Listings', value: '24', icon: FileText },
    { label: 'Promo Codes', value: '12', icon: Gift },
    { label: 'News Articles', value: '18', icon: FileText },
    { label: 'Pending Complaints', value: '3', icon: MessageSquare },
  ];

  const menuItems = [
    { label: 'Dashboard', page: 'admin-dashboard', icon: LayoutDashboard },
    { label: 'Listings', page: 'admin-listings', icon: FileText },
    { label: 'Promo Codes', page: 'admin-promo-codes', icon: Gift },
    { label: 'News', page: 'admin-news', icon: FileText },
    { label: 'Complaints', page: 'admin-complaints', icon: MessageSquare },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 border-r border-border bg-card overflow-hidden`}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <img 
              src="/assets/generated/app-icon.dim_512x512.png" 
              alt="Yono Store" 
              className="h-10 w-10"
            />
            <span className="font-bold text-xl">Yono Store</span>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.page}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => onNavigate(item.page)}
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:text-destructive"
            onClick={() => {
              clear();
              onNavigate('home');
            }}
          >
            <LogOut className="h-4 w-4 mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mr-4"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-3xl font-bold inline">Admin Dashboard</h1>
          </div>
          <Button variant="outline" onClick={() => onNavigate('home')}>
            View Site
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button onClick={() => onNavigate('admin-listings')} className="h-20">
              <FileText className="h-5 w-5 mr-2" />
              Manage Listings
            </Button>
            <Button onClick={() => onNavigate('admin-promo-codes')} className="h-20">
              <Gift className="h-5 w-5 mr-2" />
              Manage Promos
            </Button>
            <Button onClick={() => onNavigate('admin-news')} className="h-20">
              <FileText className="h-5 w-5 mr-2" />
              Manage News
            </Button>
            <Button onClick={() => onNavigate('admin-complaints')} className="h-20">
              <MessageSquare className="h-5 w-5 mr-2" />
              Review Complaints
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
