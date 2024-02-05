import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Обновляем состояние, чтобы следующий рендер показал запасной интерфейс
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Логируем ошибку в консоль или отправляем на сервер
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Отображаем запасной интерфейс в случае ошибки
            return <h1>Что-то пошло не так.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
