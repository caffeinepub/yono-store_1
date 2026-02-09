import { useState, useEffect } from 'react';
import { Copy, Clock, ExternalLink, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface BonusesPageProps {
  onNavigate: (page: string, id?: string) => void;
}

const mockBonuses = [
  {
    id: '1',
    code: 'WELCOME100',
    title: '100% Welcome Bonus',
    description: 'Get 100% match on your first deposit up to $500',
    casino: 'Royal Casino',
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    link: '#',
  },
  {
    id: '2',
    code: 'FREESPINS50',
    title: '50 Free Spins',
    description: 'Claim 50 free spins on selected slot games',
    casino: 'Lucky Slots',
    expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    link: '#',
  },
  {
    id: '3',
    code: 'MEGA200',
    title: '200% Mega Bonus',
    description: 'Triple your deposit with our exclusive mega bonus',
    casino: 'Mega Jackpot',
    expiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    link: '#',
  },
];

function CountdownTimer({ expiresAt }: { expiresAt: Date }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = expiresAt.getTime() - now;

      if (distance < 0) {
        setTimeLeft('Expired');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  return (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Clock className="h-4 w-4" />
      <span>{timeLeft}</span>
    </div>
  );
}

export function BonusesPage({ onNavigate }: BonusesPageProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast.success('Promo code copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Exclusive Bonuses & Promo Codes</h1>
          <p className="text-muted-foreground text-lg">
            Claim exclusive bonuses and promo codes available only at Yono Store
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBonuses.map((bonus) => (
            <Card 
              key={bonus.id} 
              className="hover:shadow-lg transition-all duration-300 hover:border-accent/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{bonus.casino}</Badge>
                  <CountdownTimer expiresAt={bonus.expiresAt} />
                </div>
                <CardTitle>{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {bonus.description}
                </p>
                <div className="bg-muted/50 rounded-lg p-4 border-2 border-dashed border-accent/50">
                  <div className="flex items-center justify-between">
                    <code className="text-lg font-bold text-accent">{bonus.code}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyCode(bonus.code, bonus.id)}
                      className="hover:bg-accent/20"
                    >
                      {copiedId === bonus.id ? (
                        <Check className="h-4 w-4 text-accent" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => window.open(bonus.link, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Claim Bonus
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
