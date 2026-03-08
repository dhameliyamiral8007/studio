'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Loader2 } from 'lucide-react';

interface PromptFormProps {
    onGenerate: (prompt: string, template: string) => void;
}

const templates = [
    { value: 'general', label: 'General Document' },
    { value: 'technical_report', label: 'Technical Report' },
    { value: 'research_summary', label: 'Research Summary' },
    { value: 'marketing_copy', label: 'Marketing Copy' },
    { value: 'contract', label: 'Contract Template' },
];

export default function PromptForm({ onGenerate }: PromptFormProps) {
    const [prompt, setPrompt] = useState('');
    const [template, setTemplate] = useState('general');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (prompt.trim()) {
            setIsLoading(true);
            await onGenerate(prompt, template);
            setIsLoading(false);
        }
    };

    const examplePrompts = [
        "Technical report on solar energy trends",
        "Research summary of quantum computing",
        "Marketing copy for a new SaaS product",
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full pt-4 md:pt-8">
            <Card className="w-full max-w-3xl shadow-2xl border border-primary/10 bg-card/50 backdrop-blur-xl">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-4xl md:text-6xl font-black font-headline tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-2">
                        AI Document Studio
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Input your requirements below and watch AI architect your next professional document in seconds.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="p-3 bg-background/50 rounded-xl border-2 border-primary/5 focus-within:border-primary/20 transition-colors shadow-inner">
                            <Textarea
                                placeholder="Describe your document requirements here..."
                                className="min-h-[140px] text-lg border-none focus-visible:ring-0 shadow-none resize-none bg-transparent"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 mb-2">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-full mb-1">Try these:</span>
                            {examplePrompts.map((example) => (
                                <button
                                    key={example}
                                    type="button"
                                    onClick={() => setPrompt(example)}
                                    className="text-xs py-1.5 px-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all border border-primary/10"
                                >
                                    {example}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Select onValueChange={setTemplate} defaultValue={template} disabled={isLoading}>
                                <SelectTrigger className="w-full sm:w-[240px] h-12 text-base rounded-xl border-2 border-primary/5">
                                    <SelectValue placeholder="Select a template" />
                                </SelectTrigger>
                                <SelectContent>
                                    {templates.map(t => (
                                        <SelectItem key={t.value} value={t.value} className="text-base py-3 cursor-pointer">
                                            {t.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button
                                type="submit"
                                className="w-full sm:flex-1 h-12 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
                                disabled={isLoading || !prompt.trim()}
                            >
                                {isLoading ? (
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                ) : (
                                    <Sparkles className="mr-2 h-5 w-5 fill-current" />
                                )}
                                Generate Document
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
