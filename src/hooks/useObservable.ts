import { useState } from 'react';

import { Observable, Subscription, tap } from 'rxjs';

import { useSubscription } from './useSubscription';

type TObservableResponse<T> = {
  data: T | null;
  error: any;
  loading: any;
  refetch: () => void;
};

type TObservableParams<T> = {
  source: Observable<T>;
  initialState?: T;
  depedencies: any[];
};

export const useObservable = <T>(
  params: TObservableParams<T>
): TObservableResponse<T> => {
  const [data, setData] = useState<T | null>(params.initialState || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  let subscriptions: Subscription;
  const refetch = () => {
    if (subscriptions) subscriptions.unsubscribe();

    subscriptions = params.source
      .pipe(
        tap(() => {
          setLoading(() => {
            setData(null);
            setError(null);
            return true;
          });
        })
      )
      .subscribe({
        next: setData,
        error: (error: any) => {
          if (error instanceof Error) {
            setError(error.message);
          }

          setError('Something went wrong');
        },
        complete: () => setLoading(false),
      });
  };

  useSubscription(
    params.source,
    setData,
    setLoading,
    setError,
    params.depedencies
  );

  return { data, loading, error, refetch };
};
