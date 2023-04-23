import './App.css';
import TransactionsPage from './pages/TransactionsPage';
import TransactionsProvider from './providers/transactions.provider';

function App() {
  return (
    <div>
      <TransactionsProvider>
        <TransactionsPage />
      </TransactionsProvider>
    </div>
  );
}

export default App;
