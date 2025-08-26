import { Ticket } from "../lib/types";
import { ReplyBox } from "./ReplyBox";
import { TicketConversation } from "./TicketConversation";
import { statusColors, priorityColors } from "./TicketList"

export const TicketDetailView = ({ ticket }: { ticket: Ticket;}) => {
    const DetailItem = ({ label, value }: { label: string; value: React.ReactNode }) => (
        <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className="font-medium text-white">{value}</p>
        </div>
    );

    return (
        <div className="flex-1 flex flex-col">
             <header className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                    <a className="p-2 rounded-full hover:bg-gray-800 hidden md:block" href="../">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-300"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </a>
                    <div>
                        <p className="text-gray-400">{ticket.id}</p>
                        <h2 className="text-2xl font-bold text-white">{ticket.subject}</h2>
                    </div>
                </div>
                <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors">Update Status</button>
            </header>
            <div className="flex-1 p-6 flex flex-col lg:flex-row gap-6">
                {/* Main conversation area */}
                <div className="flex-1 space-y-6">
                    <TicketConversation messages={ticket.conversation} />
                    <ReplyBox />
                </div>
                {/* Right sidebar with details */}
                <aside className="lg:w-80 flex-shrink-0">
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 space-y-6">
                        <h3 className="text-lg font-semibold text-white">Ticket Details</h3>
                        <DetailItem label="Status" value={<span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColors[ticket.status]}`}>{ticket.status}</span>} />
                        <DetailItem label="Priority" value={<span className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${priorityColors[ticket.priority]}`}></span><span>{ticket.priority}</span></span>} />
                        <DetailItem label="Assigned To" value={ticket.assignedTo} />
                        <DetailItem label="Created At" value={new Date(ticket.createdAt).toLocaleString()} />
                        <DetailItem label="Customer" value={
                            <span className="flex items-center gap-2 mt-1">
                                <img src={ticket.customer.avatarUrl} alt={ticket.customer.name} className="h-6 w-6 rounded-full" />
                                <span>{ticket.customer.name}</span>
                            </span>
                        } />
                    </div>
                </aside>
            </div>
        </div>
    );
};