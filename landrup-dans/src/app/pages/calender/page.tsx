'use client';

import React, { useEffect, useState } from 'react';
import type { Activity } from '@/types';
import { fetchActivities, fetchAssetById } from '@/utils/api';

import Header from '@/components/layout/Header';
import CalenderCard from '@/components/calender/CalenderCard';

export default function CalendarPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivities()
      .then(async (acts) => {
        const extended = await Promise.all(
          acts.map(async (act) => {
            try {
              const asset = await fetchAssetById(act.id);
              return { ...act, asset: { url: asset.url } };
            } catch (error) {
              console.error('Error fetching asset for activity id:', act.id, error);
              return { ...act, asset: { url: 'https://via.placeholder.com/300' } };
            }
          })
        );
        setActivities(extended);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching activities:', error));
  }, []);

  const handleSignUp = (id: number) => {
    console.log('Tilmeld clicked for activity id:', id);
  };

  return (
    <div className="container mx-auto px-4 pt-4">
      <Header title="Kalender" />
      {loading ? (
        <p>Loading calendar...</p>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => (
            <CalenderCard key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  );
}
