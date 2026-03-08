'use client';

import { BookMarked, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t bg-card/30 backdrop-blur-md py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 text-xl font-bold mb-4">
                            <BookMarked className="h-6 w-6 text-primary" />
                            <span className="font-headline">DocumentAI</span>
                        </div>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            Empowering professionals with AI-driven document architecting. Create, edit, and export high-quality content in minutes.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Platform</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">AI Models</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Integration</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
                    <p>© {new Date().getFullYear()} DocumentAI Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
