import { useCollection } from '../hooks/useCollection';

// componensts
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

export default function Home() {
  const { documents: books } = useCollection('books');

  return (
    <div className='App'>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
