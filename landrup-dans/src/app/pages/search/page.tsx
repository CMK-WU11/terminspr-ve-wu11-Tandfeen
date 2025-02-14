'use client';

import React, { useState } from 'react';
import type { Activity } from '@/types';
import { fetchActivities, fetchAssetById } from '@/utils/api';
import ActivityCard from '@/components/activities/ActivityCard';
import Header from '@/components/layout/Header';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Activity[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const allActivities = await fetchActivities();
      const filtered = await Promise.all(
        allActivities
          .filter((activity) =>
            activity.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(async (act) => {
            try {
              const asset = await fetchAssetById(act.id);
              return { ...act, asset: { url: asset.url } };
            } catch (error) {
              return { ...act, asset: { url: 'https://via.placeholder.com/300' } };
            }
          })
      );
      setResults(filtered);
      setSearched(true);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 pt-4">
      <Header title="Søg Aktiviteter" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Søg efter aktiviteter..."
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-secondary text-white rounded-md mb-4">
        Søg
      </button>
      {searched && results.length === 0 ? (
        <p>Ingen aktiviteter fundet. Prøv et andet søgeord.</p>
      ) : (
        results.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))
      )}
    </div>
  );
}
