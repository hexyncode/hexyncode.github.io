import { Message } from "../lib/types";


export const TicketConversation = ({ messages }: { messages: Message[] }) => {
    return (
        <div className="space-y-6">
            {messages.map(message => (
                <div key={message.id} className={`flex gap-4 ${message.type === 'internal' ? 'pl-8' : ''}`}>
                    <img src={message.avatarUrl} alt={message.author} className="h-10 w-10 rounded-full flex-shrink-0" />
                    <div className="flex-1">
                        <div className={`rounded-xl p-4 ${message.type === 'internal' ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-gray-800/50 border border-gray-700/50'}`}>
                            <div className="flex justify-between items-center mb-2">
                                <p className="font-semibold text-white">{message.author}</p>
                                <p className="text-xs text-gray-400">{new Date(message.timestamp).toLocaleString()}</p>
                            </div>
                            <p className="text-gray-300">{message.text}</p>
                        </div>
                        {message.type === 'internal' && <p className="text-xs text-yellow-400/80 mt-2 ml-4">Internal Note</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}