import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import getApp from './Servises/pixabayApp';

import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';

export default function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(gallery);
  console.log(search);

  function searchApp(name) {
    setSearch(name);
  }

  function changePage() {
    setPage(prevState => prevState + 1);
  }

  function startPage() {
    setPage(1);
  }

  useEffect(() => {
    if (search !== '' && page === 1) {
      setIsLoading(true);
      getApp(search, page)
        .then(({ hits }) => setGallery(hits))
        .finally(() => setIsLoading(false));
    }
    if (search !== '' && page > 1) {
      setIsLoading(true);
      getApp(search, page)
        .then(({ hits }) => setGallery(prevState => [...prevState, ...hits]))
        .finally(() => setIsLoading(false));
    }
  }, [search, page]);

  return (
    <div>
      <ToastContainer autoClose={3000} />
      <Searchbar onSubmit={searchApp} onPage={startPage} />
      <ImageGallery gallery={gallery} />
      {isLoading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      ) : (
        <Button onChangePage={changePage} />
      )}
      {<ImageGallery /> &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        })}
    </div>
  );
}

// const search = 'cat';
// const page = 2;
// const key = '19732085-0a6dcdc0e90ef399881a67a68';
// const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

// export default class App extends Component {
//   state = {
//     search: null,
//     loading: false,
//   };
//   componentDidMount() {
//     this.setState({ loading: true });
//     axios
//       .get(url)
//       .then(({ data }) => data.hits)
//       .then(search => this.setState({ search }))
//       .finally(() => this.setState({ loading: false }));
//   }

//   render() {
//     return (
//       <div>
//         <Searchbar />
//         {this.state.loading && (
//           <div>
//             <h1>Loading...</h1>
//           </div>
//         )}
//         {this.state.search && <div>тут будет галерея</div>}
//       </div>
//     );
//   }
// }

// function App() {
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const [fotos, setFotos] = useState(null);

//   console.log(fotos);

//   useEffect(() => {
//     const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

//     axios.get(url).then(({ data }) => setFotos(data.hits));
//   }, [search, page]);

//   // function PixabeyApp(name) {
//   //   setSearch(name);
//   // }

//   return (
//     <div className="App">
//       <Searchbar onSubmit={setSearch()} />
//       {fotos && (
//         <ul>
//           {fotos.map(({ id, webformatURL, largeImageURL }) => (
//             <li>
//               <img
//                 src={webformatURL}
//                 alt=""
//                 className="ImageGalleryItem-image"
//               />
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* <ImageGallery fotos={fotos} /> */}
//     </div>
//   );
// }

// export default App;
