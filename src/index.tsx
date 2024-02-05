import { createRoot } from 'react-dom/client';
import { App } from '@/app/App';
import '@/app/styles/index.scss';
import { store } from '@/shared/store';
import { Provider } from 'react-redux';
import ErrorBoundary from '@/shared/providers/ErrorBoundary';

const root = document.getElementById('root');

if (!root) {
    throw new Error('nor found root');
}

const container = createRoot(root);

container.render(
    <ErrorBoundary>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundary>,
);
