'use client'

import { useState } from 'react';
import { Ticket, TicketStatus, TicketPriority } from '../lib/types'; // Assumes types are in a separate file
import { mockTickets } from '../lib/data'; // Assumes data is in a separate file
import { FilterDropdown } from './FilterDropdown'; // Assumes component is in a separate file{}

export const statusColors: Record<TicketStatus, string> = {
  Open: 'bg-green-500/20 text-green-400 border border-green-500/30',
  'In Progress': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  Closed: 'bg-red-500/20 text-red-400 border border-red-500/30',
};
export const priorityColors: Record<TicketPriority, string> = {
  High: 'bg-red-500',
  Medium: 'bg-yellow-500',
  Low: 'bg-green-500',
};

export const TicketList = ({ onTicketSelect }: { onTicketSelect: (ticketId: string) => void }) => {
  const [tickets] = useState<Ticket[]>(mockTickets);

  return (
    <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden">
      <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">All Tickets</h3>
        <div className="flex items-center gap-2">
          <FilterDropdown label="Status" options={['All', 'Open', 'In Progress', 'Closed']} />
          <FilterDropdown label="Priority" options={['All', 'High', 'Medium', 'Low']} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-gray-700">
            <tr className="text-sm text-gray-400">
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Subject</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Priority</th>
              <th className="px-6 py-4 font-medium">Last Update</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} onClick={() => onTicketSelect(ticket.id)} className="border-b border-gray-800 hover:bg-gray-800/70 transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={ticket.customer.avatarUrl} alt={ticket.customer.name} className="h-8 w-8 rounded-full" onError={(e) => { e.currentTarget.src = 'https://placehold.co/32x32/cccccc/ffffff?text=U'; e.currentTarget.onerror = null; }} />
                    <span className="font-medium text-white">{ticket.customer.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">{ticket.subject}</td>
                <td className="px-6 py-4"><span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColors[ticket.status]}`}>{ticket.status}</span></td>
                <td className="px-6 py-4"><div className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${priorityColors[ticket.priority]}`}></span><span className="text-gray-300">{ticket.priority}</span></div></td>
                <td className="px-6 py-4 text-gray-400">{new Date(ticket.lastUpdate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketList;