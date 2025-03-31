import { Routes, Route, Link } from 'react-router-dom';
import WeimarRepublicQuiz from './quizzes/WeimarRepublicQuiz';
import GermanyRecoveryQuiz from './quizzes/GermanyRecoveryQuiz';
import NaziRiseQuiz from './quizzes/NaziRiseQuiz';

export default function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-8">Mom's Germany Quiz Hub</h1>

      <Routes>
        <Route
          path="/"
          element={
            <div className="space-y-4">
              <img src="/dogs-landing.jpg"
                alt="Illustration of two dogs"
                className="mx-auto mb-6 rounded-lg shadow-md w-full max-w-md"
              />
              <p className="text-lg">Select a quiz:</p>
              <div className="space-y-2">
                <Link
                  to="/weimar"
                  className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Weimar Republic
                </Link>
                <Link
                  to="/recovery"
                  className="block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Germany Recovery
                </Link>
                <Link
                  to="/nazi"
                  className="block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Nazi Rise
                </Link>
              </div>
            </div>
          }
        />
        <Route path="/weimar" element={<WeimarRepublicQuiz />} />
        <Route path="/recovery" element={<GermanyRecoveryQuiz />} />
        <Route path="/nazi" element={<NaziRiseQuiz />} />
      </Routes>
    </div>
  );
}
