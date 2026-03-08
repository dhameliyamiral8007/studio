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
        <section className="py-20 md:py-32 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-reveal">
                    <h2 className="text-4xl md:text-5xl font-black font-headline mb-6 tracking-tight">
                        Everything You Need for <span className="text-primary">Better Documents</span>
                    </h2>
                    <p className="text-muted-foreground text-xl leading-relaxed">
                        DocumentAI combines powerful AI with intuitive editing tools to help you produce professional content faster than ever.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-3xl border bg-card/40 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-2 border-primary/5 shadow-lg"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-secondary/50 border border-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-base">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
