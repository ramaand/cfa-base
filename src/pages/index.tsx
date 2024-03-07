import React from 'react';

import { Observable } from 'rxjs';

import { useObservable } from '@/hooks/useObservable';

export default function Home() {
  const { data, error, loading, refetch } = useObservable({
    source: new Observable(),
    initialState: {},
    depedencies: [],
  });
  return <div>Home Page</div>;
}
