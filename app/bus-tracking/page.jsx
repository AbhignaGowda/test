'use client';
import { useEffect } from 'react';
import io from 'socket.io-client';

export default function RealtimeLocationTracking() {
  useEffect(() => {
    const socket = io(); // It defaults to connecting to the same origin as your Next.js app

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('message', (data) => {
      console.log('Message from server:', data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Realtime Location Tracking</div>;
}
