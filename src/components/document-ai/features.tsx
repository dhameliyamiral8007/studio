'use client';

import { Sparkles, FileText, Download, ShieldCheck, Zap, Globe } from 'lucide-react';

const features = [
    {
        icon: <Zap className="h-6 w-6 text-yellow-500" />,
        title: 'Instant Generation',
        description: 'Create high-quality drafts in seconds using state-of-the-art AI models.',
    },
    {
        icon: <FileText className="h-6 w-6 text-blue-500" />,
        title: 'Professional Templates',
        description: 'Pre-defined structures for technical reports, research summaries, and more.',
    },
    {
        icon: <Download className="h-6 w-6 text-green-500" />,
        title: 'Rich Exporting',
        description: 'Download your documents as PDF, Word (DOCX), HTML, or Markdown.',
    },
    {
        icon: <Sparkles className="h-6 w-6 text-purple-500" />,
        title: 'Smart Formatting',
        description: 'Automatic markdown rendering and rich-text editing for a polished look.',
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-red-500" />,
        title: 'Secure & Private',
        description: 'Your data is handled with care and processed securely.',
    },
    {
        icon: <Globe className="h-6 w-6 text-cyan-500" />,
        title: 'Multi-Format Support',
        description: 'Seamlessly switch between different output styles and document types.',
    },
];

export default function Features() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                        Everything You Need for Better Documents
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        DocumentAI combines powerful AI with intuitive editing tools to help you produce professional content faster than ever.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-background border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
