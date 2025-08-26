'use client'
import { useState } from 'react';
import { PaperclipIcon } from './Icons';

export const ReplyBox = () => {
    const [activeTab, setActiveTab] = useState<'public' | 'internal'>('public');
    return (
        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl">
            <div className="border-b border-gray-700 flex">
                <button onClick={() => setActiveTab('public')} className={`px-4 py-3 font-medium text-sm ${activeTab === 'public' ? 'text-white border-b-2 border-violet-500' : 'text-gray-400'}`}>Public Reply</button>
                <button onClick={() => setActiveTab('internal')} className={`px-4 py-3 font-medium text-sm ${activeTab === 'internal' ? 'text-white border-b-2 border-violet-500' : 'text-gray-400'}`}>Internal Note</button>
            </div>
            <div className="p-4">
                <textarea placeholder={activeTab === 'public' ? "Type your reply to the customer..." : "Type an internal note..."} className="w-full h-28 bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"></textarea>
            </div>
            <div className="p-4 border-t border-gray-700 flex justify-between items-center">
                <button className="text-gray-400 hover:text-white"><PaperclipIcon className="w-5 h-5" /></button>
                <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors">Submit</button>
            </div>
        </div>
    );
}