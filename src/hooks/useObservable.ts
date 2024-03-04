import { useState } from "react";

import { Observable } from "rxjs";

import { useSubscription } from "./useSubscription";

type TObservableResponse<T> = {
  data: T;
  error: any;
  loading: any;
};

export const useObservable = <T>(
  source: Observable<T>,
  initialState: T,
): TObservableResponse<T> => {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useSubscription(source, setData, setLoading, setError);

  return { data, loading, error };
};
