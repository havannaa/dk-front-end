//create an interface for the middleware using redux's Middleware type
interface Middleware {
    (store: MiddlewareType): (next: MiddlewareType) => (action: MiddlewareType) => void;
}


//create a type for the middleware that works with redux's applyMiddleware function
type MiddlewareType = Middleware & { getState: () => Middleware; dispatch: (action: { payload: string; type: string }) => Middleware; } | any;

export const consoleLogStateMiddleware: Middleware = (store) => (next) => (action) => {
    console.log(store.getState());
   // console.log(action, 'action');
    const originalResult = next(action);
    return originalResult;
}