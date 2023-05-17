import './App.css';
import { lazy, Suspense, useState } from 'react';
import Loading from './components/loading';
const Product = lazy(() => getDelay(import('./components/product/Product')));

function getDelay(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000)
  }).then(() => promise)
}

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    }
  ];
  const [preview, setPreview] = useState(false)
  console.log(preview);
  return (
    <div className="App">
      <label htmlFor="showPreview">Show preview</label>
      <input type="checkbox" checked={preview} name="showPreview" id="" onChange={e => setPreview(e.target.checked)} />
        { preview && (
          <Suspense fallback={<Loading />}>
            <Product key={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date.toUTCString()} />
          </Suspense>
        )}
          
    </div>
  );
}

export default App;
