'use client'

import React, { useState, useEffect, ReactNode } from 'react';
import ReturnBanner from '@/components/ReturnBanner';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { ChevronDown, Eye, Users, DollarSign, Video, ThumbsUp, MessageSquare, Share2, ArrowUp, ArrowDown } from 'lucide-react';

type Stat = {
  name: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

type ChartContainerProps = {
  title: string;
  children: ReactNode;
};

type Video = {
  title: string;
  views: string;
  likes: string;
  comments: string;
};

type VideoListItemProps = {
  video: Video;
};

// mock data

const mainStats = [
  { name: 'Subscribers', value: '125,430', change: '+12.5%', changeType: 'increase', icon: Users },
  { name: 'Views (30d)', value: '2.1M', change: '+8.2%', changeType: 'increase', icon: Eye },
  { name: 'Revenue (30d)', value: '$8,450', change: '-2.1%', changeType: 'decrease', icon: DollarSign },
  { name: 'New Videos (30d)', value: '8', change: '+0', changeType: 'neutral', icon: Video },
] as const;

const subscriberData = [
  { name: 'Jan', subscribers: 4000 },
  { name: 'Feb', subscribers: 3000 },
  { name: 'Mar', subscribers: 5000 },
  { name: 'Apr', subscribers: 4500 },
  { name: 'May', subscribers: 6000 },
  { name: 'Jun', subscribers: 5500 },
  { name: 'Jul', subscribers: 7000 },
];

const viewsData = [
  { date: '2025-06-10', views: 2432 },
  { date: '2025-06-11', views: 1980 },
  { date: '2025-06-12', views: 2150 },
  { date: '2025-06-13', views: 1800 },
  { date: '2025-06-14', views: 3500 },
  { date: '2025-06-15', views: 2750 },
  { date: '2025-06-16', views: 2950 },
  { date: '2025-06-17', views: 2200 },
  { date: '2025-06-18', views: 3300 },
  { date: '2025-06-19', views: 4100 },
  { date: '2025-06-20', views: 2800 },
  { date: '2025-06-21', views: 3650 },
  { date: '2025-06-22', views: 3920 },
  { date: '2025-06-23', views: 3100 },
  { date: '2025-06-24', views: 4300 },
  { date: '2025-06-25', views: 3250 },
  { date: '2025-06-26', views: 3980 },
  { date: '2025-06-27', views: 4450 },
  { date: '2025-06-28', views: 3900 },
  { date: '2025-06-29', views: 4200 },
  { date: '2025-06-30', views: 4700 },
  { date: '2025-07-01', views: 3500 },
  { date: '2025-07-02', views: 4950 },
  { date: '2025-07-03', views: 4100 },
  { date: '2025-07-04', views: 5300 },
  { date: '2025-07-05', views: 4700 },
  { date: '2025-07-06', views: 5500 },
  { date: '2025-07-07', views: 5000 },
  { date: '2025-07-08', views: 5750 },
  { date: '2025-07-09', views: 6000 },
];


const topVideos = [
  { id: 1, title: 'My Most Ambitious Project Yet', views: '450.1k', likes: '32k', comments: '4.5k' },
  { id: 2, title: 'A Day in the Life of a Creator', views: '320.5k', likes: '25k', comments: '2.1k' },
  { id: 3, title: 'Reviewing the New Tech Gadget', views: '215.7k', likes: '18k', comments: '1.8k' },
  { id: 4, title: 'How I Edit My Videos', views: '180.2k', likes: '15k', comments: '1.2k' },
];

const revenueSources = [
    { name: 'AdSense', value: 4500, fill: '#8884d8' },
    { name: 'Sponsorships', value: 2500, fill: '#82ca9d' },
    { name: 'Merch', value: 1000, fill: '#ffc658' },
    { name: 'Affiliates', value: 450, fill: '#FF8042' },
];

const StatCard = ({ stat }: { stat: Stat }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400 text-sm">{stat.name}</span>
            <stat.icon className="text-gray-500" size={20} />
        </div>
        <div>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <div className={`flex items-center text-sm mt-1 ${stat.changeType === 'increase' ? 'text-green-400' : stat.changeType === 'decrease' ? 'text-red-400' : 'text-gray-400'}`}>
                {stat.changeType === 'increase' && <ArrowUp size={14} className="mr-1" />}
                {stat.changeType === 'decrease' && <ArrowDown size={14} className="mr-1" />}
                <span>{stat.change}</span>
            </div>
        </div>
    </div>
);

const ChartContainer = ({ title, children }: ChartContainerProps) => (
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
    <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
    <div style={{ width: "100%", height: 300 }}>{children}</div>
  </div>
);

const VideoListItem = ({ video }: VideoListItemProps) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-700/50 last:border-b-0">
        <div className="flex items-center">
             <div className="w-16 h-10 bg-gray-700 rounded-md mr-4 flex items-center justify-center">
                <Video className="text-gray-500" size={20}/>
             </div>
            <p className="text-white text-sm truncate max-w-xs">{video.title}</p>
        </div>
        <div className="flex items-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
                <Eye size={16} className="text-gray-500" />
                <span>{video.views}</span>
            </div>
            <div className="flex items-center space-x-2">
                <ThumbsUp size={16} className="text-gray-500" />
                <span>{video.likes}</span>
            </div>
            <div className="flex items-center space-x-2">
                <MessageSquare size={16} className="text-gray-500" />
                <span>{video.comments}</span>
            </div>
        </div>
    </div>
);

export default function CreatorDashboard() {
    const [timeframe, setTimeframe] = useState('Last 30 days');

    return (
        <div>
            <ReturnBanner/>
        <div className="bg-gray-900 text-white min-h-screen font-sans pt-5">
            <main className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">CreatX Dashboard</h1>
                        <p className="text-gray-400 mt-1">Welcome back, User</p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <button className="bg-gray-800 border border-gray-700/80 text-sm text-gray-300 px-4 py-2 rounded-md flex items-center">
                            {timeframe}
                            <ChevronDown size={16} className="ml-2" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {mainStats.map(stat => <StatCard key={stat.name} stat={stat} />)}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2">
                        <ChartContainer title="Subscriber Growth">
                            <ResponsiveContainer>
                                <AreaChart data={subscriberData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                    <defs>
                                        <linearGradient id="colorSubscribers" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                                    <XAxis dataKey="name" stroke="#A0AEC0" fontSize={12} />
                                    <YAxis stroke="#A0AEC0" fontSize={12} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#2D3748', border: '1px solid #4A5568' }} 
                                        labelStyle={{ color: '#E2E8F0' }}
                                    />
                                    <Area type="monotone" dataKey="subscribers" stroke="#8884d8" fillOpacity={1} fill="url(#colorSubscribers)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </div>

                    <ChartContainer title="Revenue Sources">
                        <ResponsiveContainer>
                            <BarChart data={revenueSources} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(74, 85, 104, 0.3)" />
                                <XAxis type="number" stroke="#A0AEC0" fontSize={12} />
                                <YAxis type="category" dataKey="name" stroke="#A0AEC0" fontSize={12} width={80} />
                                <Tooltip 
                                    formatter={(value) => `$${value}`}
                                    cursor={{fill: 'rgba(136, 132, 216, 0.1)'}}
                                    contentStyle={{ backgroundColor: '#2D3748', border: '1px solid #4A5568' }} 
                                    labelStyle={{ color: '#E2E8F0' }}
                                />
                                <Bar dataKey="value" fill="#8884d8" barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
                    <ChartContainer title="Daily Views (Last 30 Days)">
                        <ResponsiveContainer>
                            <LineChart data={viewsData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                                <XAxis dataKey="date" stroke="#A0AEC0" fontSize={12} />
                                <YAxis stroke="#A0AEC0" fontSize={12} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#2D3748', border: '1px solid #4A5568' }} 
                                    labelStyle={{ color: '#E2E8F0' }}
                                />
                                <Legend wrapperStyle={{fontSize: "14px"}}/>
                                <Line type="monotone" dataKey="views" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                    <h3 className="text-lg font-semibold text-white mb-4">Top Performing Videos</h3>
                    <div className="flex flex-col">
                        {topVideos.map(video => <VideoListItem key={video.id} video={video} />)}
                    </div>
                </div>

            </main>
        </div>
        </div>
    );
}
