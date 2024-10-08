import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Alpinhaus
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Crafting digital experiences since 2023
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alpinhaus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;