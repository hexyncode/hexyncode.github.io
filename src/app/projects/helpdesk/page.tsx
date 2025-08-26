"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StatsCard } from './components/StatsCard';
import { TicketList } from './components/TicketList';
import { TicketIcon } from './components/Icons';
import { mockTickets } from './lib/data';
import ReturnBanner from '@/components/ReturnBanner';

const Home = () => {
  const router = useRouter();

    const openTickets = mockTickets.filter(t => t.status === 'Open').length;
    const closedTickets = mockTickets.filter(t => t.status === 'Closed').length;
    const inProgressTickets = mockTickets.filter(t => t.status === 'In Progress').length;

    const onTicketSelect = (ticketId: string) => {
      console.log('Selected ticket: ', ticketId)
      router.push(`helpdesk/ticket/${ticketId}`);
    };
    
  return (
    <div>
      <ReturnBanner/>
    <div className="flex min-h-screen bg-gray-900 text-gray-100 font-sans pt-5">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 <StatsCard 
                    title="Open Tickets" 
                    value={openTickets} 
                    icon={<TicketIcon className="w-6 h-6"/>}
                    change="+5.2%"
                    changeType="increase"
                 />
                 <StatsCard 
                    title="In Progress" 
                    value={inProgressTickets} 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m7.8 16.2-2.9 2.9"/><path d="M6 12H2"/><path d="m7.8 7.8-2.9-2.9"/></svg>}
                    change="-1.8%"
                    changeType="decrease"
                 />
                 <StatsCard 
                    title="Closed Tickets" 
                    value={closedTickets} 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
                    change="+12.4%"
                    changeType="increase"
                 />
            </div>
            <TicketList onTicketSelect={onTicketSelect}/>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Home;