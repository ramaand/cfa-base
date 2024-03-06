import { useEffect } from 'react';

import { Observable, tap } from 'rxjs';

export const useSubscription = <T>(
  source: Observable<T>,
  nextHandler: (_value: T) => void,
  loadingHandler: (_value: any) => void,
  errorHandler: (_err: any) => void,
  dependecies: any[]
) => {
  useEffect(() => {
    const subscription = source
      .pipe(tap(() => loadingHandler(true)))
      .subscribe({
        next: nextHandler,
        error: (error) => {
          if (error instanceof Error) {
            errorHandler(error.message);
          }
        },
        complete: () => {
          loadingHandler(false);
        },
      });

    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dependecies)]);
};
