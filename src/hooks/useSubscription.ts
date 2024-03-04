import { useEffect } from "react";

import { Observable, tap } from "rxjs";

export const useSubscription = <T>(
  source: Observable<T>,
  nextHandler: (_value: T) => void,
  loadingHandler: (_value: any) => void,
  errorHandler: (_err: any) => void
) => {

  useEffect(() => {
    loadingHandler(true);
    const subscription = source.pipe(tap(console.log)).subscribe({
      next: (value) => {
        loadingHandler(false);
        nextHandler(value);
      },
      error: (err) => {
        loadingHandler(false);
        errorHandler(err);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(source)]);
};
