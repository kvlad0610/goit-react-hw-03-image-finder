import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
// import Loader from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import getApp from './Services/Services';

import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import Spinner from './Components/Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';

export default function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imgForModal, setImgForModal] = useState(null);

  console.log(gallery);
  console.log(search);
  console.log(imgForModal);

  function searchApp(name) {
    setSearch(name);
  }

  function changePage() {
    setPage(prevState => prevState + 1);
  }

  function startPage() {
    setPage(1);
  }

  function openModal(url) {
    setImgForModal(url);
  }

  function closeModal() {
    setImgForModal(null);
  }

  function scroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    if (search !== '' && page === 1) {
      setIsLoading(true);
      getApp(search, page)
        .then(({ hits }) => setGallery(hits))
        .catch(error => toast.error('Error'))
        .finally(() => setIsLoading(false));
    }
    if (search !== '' && page > 1) {
      setIsLoading(true);
      getApp(search, page)
        .then(({ hits }) => setGallery(prevState => [...prevState, ...hits]))
        .then(() => scroll())
        .catch(error => toast.error('Error'))
        .finally(() => setIsLoading(false));
    }
  }, [search, page]);

  return (
    <div>
      <ToastContainer autoClose={3000} />
      <Searchbar onSubmit={searchApp} onPage={startPage} />
      <ImageGallery gallery={gallery} imgModal={openModal} />
      {isLoading ? (
        <Spinner />
      ) : (
        gallery.length !== 0 && <Button onChangePage={changePage} />
      )}

      {imgForModal && <Modal onUrl={imgForModal} onCloseModal={closeModal} />}
    </div>
  );
}
