import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, X, Send, Mic, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "Hello! I'm LunAI. How can I help you today?",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isTyping]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate RAG response
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "I'm currently a demo version. Once connected to the RAG agent, I'll be able to answer questions about the portfolio projects and services!",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-[350px] md:w-[400px] h-[500px] max-h-[80vh] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
                                <Bot className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">LunAI Assistant</h3>
                                <span className="text-xs text-green-400 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                    Online
                                </span>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:text-foreground hover:bg-white/10"
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-4">
                        <div className="flex flex-col gap-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex gap-3 max-w-[85%]",
                                        msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border",
                                            msg.role === "user"
                                                ? "bg-primary text-primary-foreground border-primary"
                                                : "bg-muted border-border"
                                        )}
                                    >
                                        {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                    </div>
                                    <div
                                        className={cn(
                                            "p-3 rounded-2xl text-sm leading-relaxed",
                                            msg.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-tr-sm"
                                                : "bg-white/10 text-foreground border border-white/5 rounded-tl-sm"
                                        )}
                                    >
                                        {msg.content}
                                        <span className="text-[10px] opacity-50 block mt-1 text-right">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-3 max-w-[85%]">
                                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="bg-white/10 border border-white/5 p-4 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            )}
                            <div ref={scrollRef} />
                        </div>
                    </ScrollArea>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/10 bg-white/5">
                        <div className="relative flex items-center gap-2">
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Ask about my projects..."
                                className="pr-20 bg-black/20 border-white/10 focus-visible:ring-primary/50 text-sm"
                            />
                            <div className="absolute right-1 flex items-center gap-1">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                                    type="button"
                                >
                                    <Mic className="w-4 h-4" />
                                </Button>
                                <Button
                                    size="icon"
                                    className="h-8 w-8 bg-primary text-primary-foreground hover:bg-primary/90"
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim()}
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-[10px] text-muted-foreground/60">
                                Powered by RAG & LunAI
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110",
                    isOpen
                        ? "bg-destructive hover:bg-destructive/90 rotate-90"
                        : "bg-primary hover:bg-primary/90 animate-bounce-subtle"
                )}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageSquare className="w-6 h-6" />
                )}
            </Button>
        </div>
    );
};

export default ChatBot;
