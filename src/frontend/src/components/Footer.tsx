import { SiFacebook, SiX, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/assets/generated/site-logo.dim_512x128.png" 
              alt="Yono Store" 
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Your trusted source for online casino reviews, bonuses, and gaming news.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <SiX className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Casinos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bonuses</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">News</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Complaints</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Responsible Gaming</a></li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div>
            <h3 className="font-semibold mb-4">Responsible Gaming</h3>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/assets/generated/badge-18plus.dim_256x256.png" 
                alt="18+" 
                className="h-12 w-12"
              />
              <p className="text-xs text-muted-foreground">
                You must be 18+ to gamble. Play responsibly.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              If you or someone you know has a gambling problem, help is available. Contact your local support services.
            </p>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-red-500" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="mt-2 text-xs">
            Disclaimer: Yono Store is an affiliate website. We may receive compensation when you click on links to products or services we recommend.
          </p>
        </div>
      </div>
    </footer>
  );
}
