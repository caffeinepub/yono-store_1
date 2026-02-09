import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CasinosPage } from './pages/CasinosPage';
import { BonusesPage } from './pages/BonusesPage';
import { NewsPage } from './pages/NewsPage';
import { ComplaintsPage } from './pages/ComplaintsPage';
import { CasinoDetailPage } from './pages/CasinoDetailPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminListings } from './pages/AdminListings';
import { AdminPromoCodes } from './pages/AdminPromoCodes';
import { AdminNews } from './pages/AdminNews';
import { AdminComplaints } from './pages/AdminComplaints';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

type Page = 
  | 'home' 
  | 'casinos' 
  | 'bonuses' 
  | 'news' 
  | 'complaints' 
  | 'casino-detail' 
  | 'news-detail'
  | 'admin-dashboard'
  | 'admin-listings'
  | 'admin-promo-codes'
  | 'admin-news'
  | 'admin-complaints';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const navigateTo = (page: string, id?: string) => {
    setCurrentPage(page as Page);
    if (id) setSelectedId(id);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'casinos':
        return <CasinosPage onNavigate={navigateTo} />;
      case 'bonuses':
        return <BonusesPage onNavigate={navigateTo} />;
      case 'news':
        return <NewsPage onNavigate={navigateTo} />;
      case 'complaints':
        return <ComplaintsPage onNavigate={navigateTo} />;
      case 'casino-detail':
        return <CasinoDetailPage casinoId={selectedId} onNavigate={navigateTo} />;
      case 'news-detail':
        return <NewsDetailPage newsId={selectedId} onNavigate={navigateTo} />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={navigateTo} />;
      case 'admin-listings':
        return <AdminListings onNavigate={navigateTo} />;
      case 'admin-promo-codes':
        return <AdminPromoCodes onNavigate={navigateTo} />;
      case 'admin-news':
        return <AdminNews onNavigate={navigateTo} />;
      case 'admin-complaints':
        return <AdminComplaints onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  const isAdminPage = currentPage.startsWith('admin-');

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {!isAdminPage && <Header onNavigate={navigateTo} />}
        <main className="flex-1">
          {renderPage()}
        </main>
        {!isAdminPage && <Footer />}
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
